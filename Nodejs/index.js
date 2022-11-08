const fs = require('fs');

// fs.readFile('./files/index.txt', 'utf-8', (err, data) => {
//     if (err) throw err;
//     console.log(data);
// });

fs.writeFile('./files/index.txt', 'This is Index File', (err) => {
    if (err) throw err;
    console.log('File saved!');
});

fs.appendFile('./files/index.txt', 'This is Index File Line 2', (err) => {
    if (err) throw err;
    console.log('File saved!');
});

fs.unlink('./files/index.txt', (err) => {
    if (err) throw err;
    console.log('File deleted!');
});