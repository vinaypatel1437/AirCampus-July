// const inputBox = document.getElementById("inputBox");
// const submitBtn = document.getElementById("searchBtn");
// const ul = document.querySelector("ul");

// let arr = [
//     "Vinay",
//     "Patel",
//     "AirCampus",
//     "Air",
//     "Campus",
//     "2022",
//     "2023",
//     "2024"
// ]
// mapping(arr);
// submitBtn.addEventListener("click", search);

// function mapping(array) {
//     ul.innerHTML = "";
//     array.forEach(element => {
//         ul.innerHTML += `<li>${element}</li>`    
//     });
// }

// function search(e) {
//     let data = inputBox.value;
//     let newArr = [];
//     for(let i = 0; i<arr.length; i++) {
//         if(arr[i].includes(data)) {
//             newArr.push(arr[i]);
//         }
//     }
//     mapping(newArr);
// } 

let mainDiv = document.getElementById("main");
let span = document.querySelector("span");
let arr = [
    {
        id: "1",
        name: "Laptop",
        image: "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8&w=1000&q=80"
    },
    {
        id: "2",
        name: "Mobile",
        image: "data:image/jpeg;base64,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"
    },
    {
        id: "3",
        name: "Bottle",
        image: "https://thumbs.dreamstime.com/b/bottle-water-12522351.jpg",
    },
    {
        id: "4",
        name: "TV",
        image: "https://media.istockphoto.com/photos/an-old-tv-with-a-monochrome-picture-id1159377900?b=1&k=20&m=1159377900&s=612x612&w=0&h=zaWBAVMN1_6zeBZmHysN-MTc0UVUXoEOCBnP-XVVt7Q="
    },
    {
        id: "5",
        name: "Bed",
        image: "https://www.shutterstock.com/image-vector/wood-double-bed-red-blanket-260nw-327401444.jpg"
    }
]
let cart = []

function mapping(array) {
    mainDiv.innerHTML = "";
    array.forEach(element => {
        mainDiv.innerHTML += `<div>
        <img src="${element.image}">
        <h4>${element.name}</h4>
        <button onclick="addToCart(${element.id})">Add+</button>
        </div>`    
    });
}
function mapping2(array) {
    mainDiv.innerHTML = "";
    array.forEach(element => {
        mainDiv.innerHTML += `<div>
        <img src="${element.image}">
        <h4>${element.name}</h4>
        </div>`    
    });
}

function addToCart(id) {
    for(let i=0;i<arr.length; i++) {
        if(arr[i].id == id) {
            cart.push(arr[i]);
        }
    }
    span.innerText = String(cart.length);
}
function showCart() {
    mapping2(cart)
}
function goToHome() {
    mapping(arr);
}

mapping(arr)
