const fs = require('fs');

const page1 = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);
const page3 = fs.readFileSync(`${__dirname}/../client/client3.html`);

const loadPage = (request, response, index) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

const getIndex = (request, response) => loadPage(request, response, page1);
const getPage2 = (request, response) => loadPage(request, response, page2);
const getPage3 = (request, response) => loadPage(request, response, page3);

module.exports = {
  getIndex,
  getPage2,
  getPage3,
};
