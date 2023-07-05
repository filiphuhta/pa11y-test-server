const dotenv = require('dotenv');
const pa11y = require('pa11y');
dotenv.config();

module.exports = {
  generateTableMarkup: function (data) {

    let tableString = `<p>${data.documentTitle}</p> <table><tr>`
    for (let column in data[0]) {
      tableString += `<th>${column}</th>`
    }
    tableString += "</tr>"
    data.issues.forEach(element => {
      tableString += "<tr>"
      for (let prop in element) {
        tableString += `<td>${element[prop]}</td>`
      }
      tableString += "</tr>"
    });
    tableString += `</table>`;
    return tableString;
  },
  runTests: async function (data) {
    try {
      const userLogin = `${process.env.USERNAME}:${process.env.PASSWORD}`;
      const encodedCredentials = new Buffer.from(userLogin).toString('base64');
      const options = {
        log: {
          debug: console.log,
          error: console.error,
          info: console.log
        },
        standard: 'WCAG2AAA',
        includeWarnings: true,
        headers: {}
      };

      if (data.useBasicAuth) {
        options.headers.Authorization = `Basic ${encodedCredentials}`;
      }
      const urlPromises = data.urls.map(url => pa11y(url, options));
      // Run tests against all urls
      const results = await Promise.all(urlPromises);

      return results;
    } catch (error) {
      // Output an error if it occurred
      console.error(error.message);

    }
  }
};
