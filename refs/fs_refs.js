const fs = require('fs');
const path = require('path');

// fs - file system

// fs.mkdir(path.join(__dirname, 'notes'), err => { // create new directory
//     if (err) throw new Error(err);
//     console.log('Folder was create');
// });

// fs.writeFile(
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'Hello world ', // create file with content 'Hello world'. If we run this method again we rewrite this file
//     err => {
//         if (err) throw new Error(err);
//         console.log('File was create');
//
//         fs.appendFile(
//             path.join(__dirname, 'notes', 'mynotes.txt'),
//             ' My dear friends', // add new content to file,
//             // but in this case it's work correct becouse this method placed inside callback.
//             // if we placed it outside it dosen't work correct becouse it are async
//             err => {
//                 if (err) throw new Error(err);
//                 console.log('File was updated');
//
//                 fs.readFile( // work correct and wait for fs.appendFile
//                     path.join(__dirname, 'notes', 'mynotes.txt'),
//                     'utf-8', // if we use it we can write just console.log(data) - and obtain string
//                     (err, data) => {
//                         if (err) throw new Error(err);
//                         console.log(data) // output as byte set
//                         // console.log(Buffer.from(data).toString()) // output as string
//                     }
//                 )
//             }
//         )
//     }
// );

// fs.readFile( // work as async method and not wait for fs.appendFile
//     path.join(__dirname, 'notes', 'mynotes.txt'),
//     'utf-8', // if we use it we can write just console.log(data) - and obtain string
//     (err, data) => {
//         if (err) throw new Error(err);
//         console.log(data) // output as byte set
//         // console.log(Buffer.from(data).toString()) // output as string
//     }
// )

fs.rename(
    path.join(__dirname, 'notes', 'mynotes.txt'),
    path.join(__dirname, 'notes', 'notes.txt'),
    err => {
        if (err) throw new Error(err);
        console.log('File was renamed');
    }
)