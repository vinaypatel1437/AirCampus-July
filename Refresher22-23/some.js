// let fs = require("fs");
// let data = fs.readFileSync("Todo.txt", 'utf-8');
// console.log(data);
// fs.writeFileSync("handling.txt", "");
// fs.copyFileSync("FileHandling.txt", "handling.txt");
// fs.unlinkSync("FileHandling.txt");
// fs.rmdirSync("helloWorld")
// Universal Text Format
// console.log(data);
// helloWorld();

let arr = [2,4,3,5,10,6,7];
// let newArr = arr.reduce((sum, ele) => sum + ele);
let newArr = arr.sort((b,a) => a-b);
console.log(newArr);