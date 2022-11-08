const fs = require('fs');

// Synchronous read
console.log("Synchronous read method:");
let data = fs.readFileSync('sample.txt');
console.log("Data in the file is - " + data.toString());
console.log("Hello World - 1");

// Asynchronous read
console.log("Asynchronous read method:");
fs.readFile('sample.txt',  (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log("Data in the file is - " + data.toString());
});
console.log("Hello World - 2");