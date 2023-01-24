// Hoisting -- Done
// Closure -- Done
// Promise -> resolve or reject. -- Done
// Event Loop -- Done
// map, filter and reduce - Done
// meta -> Done
// Prototype chaining -> Done
// currying -- Done

// pati -> patni
// Promise
// .then(()=>{
//    console.log("Promise fullfiled and got some tasty khana");
// })
// .catch(()=>{
//     console.log("Prmoise reject and band baj gyi");
// })
// let ans = 1;
// apiCall().then((data)=>{
//     ans = data;
//     console.log(ans); // Ye karte hai.
// }).catch((err)=>{
//     ans = err;
// });
// console.log(ans) // Ye nhi karte

// async function() {
//     let ans = await apiCall();
//     console.log(ans);
// }
// -> A -> 10 Crore -> 10 Crore
// -> B


// a+b+c;
// 5+10+20

// Currying
// function additionCurryingFunc(a) {
//     return function (b) {
//         return (a * b)/100;
//     }
// }
// let firstOutput = additionCurryingFunc(5);
// let firstCustomer = firstOutput(4000);
// let secondCustomre = firstOutput(5000);
// let thirdOutput = firstOutput(10000);
// console.log(firstCustomer, secondCustomre, thirdOutput);
// let thirdOutput = secondOutput(10);
// console.log(thirdOutput);

// let ans = additionCurryingFunc(10)(20)(30);
// console.log(ans);
// 
// While GEC is being created the variables and function are being assigned some memory. This process is known as hoisting.
// console.log("Hello world");
// // console.log(ans);
// let ans = 10;
// var ans2 = 100;
// console.log(ans, ans2);



// let  addition  = () =>  {
//     var a = 20;
//     var b = 50;
//     return a+b;
// }
// addition();

// Closure is a concept and currying is the process of transforming a function into curried_function.


// setTimeout(()=>{
//     console.log("Hello world");
// }, 1000);

// function sum() {
//     let ans = 5 + 10;
// }

// Event Loop
// Call Stack 
// Call Back Queue
// Code.

// Promises > Callback
// mutationObserver
// Micro Task Queue -> Prmo

// Code -> Call Stack -> Function Run finally
        // |       | <--------------
        // |                       |
        // --> thread-pool -> call back queue    



// let obj = {
//     hello:['world'],
//     age: 34,
// }
// console.log(obj)
// let arr = [2,3,4,4];
// console.log(arr);

// Map, filter and reduce

// Map
// Output -> Output length is equal input length.
// It is use for one-on-one mapping.
// [2, 3, 4, 5, 6] = [4, 5, 6, 7, 8] = [4, 6, 8, 10, 12]
// let arr = [2, 3, 4, 5, 6];
// let outputArr = arr.map((ele) => ele*2);
// console.log(outputArr, "  ", arr);

// function myMap(arr, func) {
//     let outputArr = [];
//     for(let i=0 ;i < arr.length; i++) {
//         let ans = func(arr[i]);
//         outputArr.push(ans);
//     }
//     return outputArr;
// }
// let output = myMap(arr, (ele) => ele*2);
// console.log(output);

// Filter
// Output either equal to input or less than input.
// let arr = [2,3,4,5,6,7,8,9,10];
// let outputArr = arr.filter((ele) => {
//    return ele % 3 === 0
// });
// console.log(outputArr);

// function myFilter(arr, func) {
//     let outputArr = [];
//     for(let i=0; i<arr.length;i++) {
//         let ans = func(arr[i]);
//         if(ans) {
//             outputArr.push(arr[i]);
//         }
//     }
//     return outputArr;
// }
// let output = myFilter(arr, (ele) => ele%3===0);
// console.log(output);

// Reduce
// PhotoSynthesis
// Water + CO2 + sunlight ---> Plant ka khana ;
// if we want to reduce out array into single value than we use reduce func.
// [2, 4, 6, 8, 10] => 30
// 2-4-6-8-10;
// let arr = [2, 4, 6, 8, 10];
// let output = arr.reduce((acc, ele) => {
//     return acc-ele;
// }, 0 );
// console.log(output);

// function myReduce(arr, func) {
//     let output = 0;
//     for(let i=0; i<arr.length; i++) {
//         output = func(output, arr[i]);       
//     }
//     return output;
// }
// let outpuAns = myReduce(arr, (acc, ele) => {
//         return acc*ele;
//     });
//     console.log(outpuAns)





// Cow                 Milk
// Hen                 Egg
// Tree                Fruit                







// Array.prototype.myMap = function myMap(func) {
//     let outputArr = [];
//     for(let i=0 ;i < this.length; i++) {
//         let ans = func(this[i]);
//         outputArr.push(ans);
//     }
//     return outputArr;
// }

// let arr = [2,3,4,5,6,7];

// let ans = arr.myMap((ele) => ele+2);
// console.log(ans);

