const sculptureList = require('./data.js'); // import data.js

//const element = sculptureList[1] // <---- comment out this line in your solution!


// this following snippet is just to show how to iterate an object's keys
// comment this out in your solution!
// for (const key in element){
//     console.log(`${key}: ${element[key].length}`)
// }

const sculptureListLengths = [];

let index = 0;

for (const element of sculptureList) {
    const lengthObject = {};

    for (const key in element) {
        lengthObject[key] = element[key].length;
    }
    sculptureListLengths[index] = Object.assign({}, lengthObject)

    index++;
}

console.log(sculptureListLengths)
