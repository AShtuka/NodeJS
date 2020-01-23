const path = require('path');

console.log(path.basename(__filename)); // name of file where we are
console.log(path.dirname(__filename)); // name of directory where we are
console.log(path.extname(__filename)); // type of file
console.log(path.parse(__filename)); // return obj with root, dir, ext, name - field
console.log(path.parse(__filename).ext); // return  ext field (type of file)
console.log(path.join(__dirname, 'test', 'second.html')); // create path string to second.html file
console.log(path.resolve(__dirname, 'test', 'second.html')); // create path string to second.html file, and can work with absolute path
