const fs = require('fs');
const path = require('path')

// fs.mkdir(path.join(__dirname , 'notes'), (err) => {
//     if (err) throw new Error(err)
//     console.log("created dir")
// })

// fs.writeFile(
//     path.join(__dirname , "notes","cool.html"), 
//     'Hello body' , 
//     (err) => {
//         if (err) throw new Error(err); 
//         console.log("created file")
//     }
// )

// fs.appendFile(path.join(__dirname, 'notes', 'cool.html'),
//     'its very coolllll',
//         (err) => {
//             if (err) throw new Error(err);
//             console.log("file changed")
//         }
//     )

// fs.readFile(path.join(__dirname, 'notes', 'cool.html'),
//     'utf-8',
//     (err,data) => {
//         if (err) throw new Error(err);
//         console.log(Buffer.from(data).toString())
//     }
// )

// fs.rename(
//     path.join(__dirname, 'notes', 'notcool.html'),
//     path.join(__dirname, 'notes', 'cool.html'),
//     err => {
//         if (err) throw new Error(err);
//         console.log('dir changed')
//     }
// )
