const path = require('path');
const { connectableObservableDescriptor } = require('rxjs/internal/observable/ConnectableObservable');

// console.log(path.dirname)
console.log(__filename) // /Users/sss-1/Desktop/project/nodejs/udemy/path.js
console.log(path.basename(__filename)) // path.js
console.log(path.dirname(__filename)) // /Users/sss-1/Desktop/project/nodejs/udemy
console.log(path.extname(__filename)) // .js
console.log(path.parse(__filename)) // obj 
console.log(path.join(__dirname, "test" , 'second.html')) // /Users/sss-1/Desktop/project/nodejs/udemy/test/second.html
console.log(path.resolve(__dirname , 'test' , 'second.html'))


