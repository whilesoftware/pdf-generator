require('dotenv').config()
const pdfshift = require('pdfshift')(process.env.PDFSHIFT_APIKEY);
const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);

// Step 3, execute
async function execute() {
    const data = await (await readFile('content.html')).toString();
    pdfshift.convert(data, {landscape: false, use_print: false, sandbox: true}).then(function (binary_file) {
    fs.writeFile('output.pdf', binary_file, "binary", function () {})
}).catch(function({message, code, response, errors = null}) {})
}

execute();