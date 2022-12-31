let inputData = document.getElementById("inputBox");
// let clearBtn = document.getElementById("clear");
let button = document.querySelector("button");
let toDoList = document.querySelector("ul");
// let deleteBtn = document.querySelectorAll(".delete");

let arr = [];
window.addEventListener('load', ()=>{
    // arr = JSON.parse(localStorage.getItem("toDoData")) == null ? [] : JSON.parse(localStorage.getItem("toDoData"));
    arr = JSON.parse(localStorage.getItem("toDoData")) || [];
    arr.forEach(element => {
        toDoList.innerHTML += `<li>${element}<button onclick="deleteFn('${element}', this)">Delete</button></li>`;
    });
    // for(let i=0;i<arr.length; i++) {
    //     toDoList.innerHTML += `<li>${arr[i]} <button>delete</button></li>`;
    // }
    // for(let i in arr) {
    //     toDoList.innerHTML += `<li>${arr[i]}</li>`;
    // }
    console.log(arr);
})
// let arrr = ["vinay", "patel", "abc"];

button.addEventListener("click", (e) => {
    e.preventDefault();
    console.log(inputData.value); 
    // let id = Math.random()*1000;
    // let child = document.createElement('li');
    // console.log(child);
    // child.innerText = inputData.value;
    // toDoList.appendChild(child);
    toDoList.innerHTML += `<li>${inputData.value}<button onclick="deleteFn('${inputData.value}', this)">delete</button></li>`;
    arr.push(inputData.value);
    // arr[id] = inputData.value;
    localStorage.setItem("toDoData", JSON.stringify(arr));
    inputData.value = "";
})

function deleteFn(todo, element) {
    console.log(element)
    let index = arr.indexOf(todo); // Index nikala perticular data ka
    arr.splice(index,1); // Array se data remove kiya
    element.parentElement.remove();  // Removed from UI
    localStorage.setItem("toDoData", JSON.stringify(arr)); // Removed array ko local Storage pe save kiya
}


// clearBtn.addEventListener("click", (e)=> {
//     e.preventDefault();
//     // localStorage.removeItem("toDoData");
//     // localStorage.clear();
// })
// JSON.stringify converts any Object into String.
// JSON.parse converts string into object.