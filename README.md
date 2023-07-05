# Pa11y Test Server
This is a simple test server that runs [Pa11y](https://pa11y.org/) tests against specified URL:s.

## Getting started
1. run `npm install` to install all **node_modules**.
2. add an `.env` file with the fields **USERNAME** and **PASSWORD**
```env
USERNAME=example@example.com
PASSWORD=XXXXXXXXX
```
3. Update `data.json` file with urls that **Pa11y** should run tests against. Also configure if [basic authorization](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication#www-authenticate_and_proxy-authenticate_headers) should be used to log in to the website.
```json
{
  "urls": [
    "https://github.com",
    "https://google.com"
  ],
  "useBasicAuth": false
}
```
4. run the application with the command `npm run start`
5. Now should it log in the console "Pa11y Test Server app listening on port 3XXX!"
6. Visit the address that the server is listening on. (http://localhost:3000)

If everything works as expected you should get results like this:
![Image of Pa11y test server](https://github.com/filiphuhta/pa11y-test-server/blob/main/images/example.png)


## Author
- Filip Huhta