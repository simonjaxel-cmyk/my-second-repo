// // console.error("Hello World!");

// const myName = "Simon";
// let myAge = 30;

// // //console.log(myName + " is " + myAge + " years old.");

// // if(myAge > 18) {
// //     console.log("I am an adult.");
// // } else {
// //     console.war("I am a child.");
// // }

// // // Outil de comparaison pour des strings : ===

// const fruits = ["clementine", "mandarine", "orange", "lemon"];
// // console.log(fruits);
// // console.log(fruits[0]);
// // fruits.push("tangerine");
// // console.log(fruits);

// // fruits.forEach(fruit => {
// //     console.log(fruit)
// // });

// // const fruit = {
// //     name: "clementine",
// //     quantity: "3",
// //     variety: "satsuma"
// // };

// /* Functions */
// const sayHello = (name) => {
//     console.log("Hello " + name + "!");
// }

// sayHello("Simon");
// const target = document.querySelector("h3")
// console.log(target);

// //modify content or style
// target.innerHTML = "COUCOUUU";
// target.style.color = "red";

// const targets = document.querySelectorAll("h3");
// console.log(targets);

// targets[0].style.backgroundColor = "yellow";

// const myButton = document.querySelector("button");
// myButton.addEventListener("click", () => {
//     console.log("button is clicked")
//     const body = document.querySelector("body");
//     body.style.backgroundColor = "lightblue";
// });

// const myButton = document.querySelector("button");
// myButton.addEventListener("click", () => {
//     //get the message
//     const message = document.querySelector("input");
//     console.log(message.value);
//     //add to the shopping list
//     const list = document.querySelector("ul");
//     list.innerHTML += `<li>${message.value}</li>`;
// });

const myURL = "trail.json";

const getData = async (doStuffs) => {
    try{
        const response = await fetch(myURL);
        if(!response.ok) {
            throw new Error("Network response was not ok" + response.statusText);
        }
        const data = await response.json();
        doStuffs(data);
    } catch(error) {
        console.error("problem occured while getting the data" + error)
    }
}

const container = document.querySelector("#cards-container")

getData((data) => {
    data.forEach(event => {
        console.log(event.event_name)
        const card = `
        <div class="card">
            <img src="${event.images[0]}" alt="event image">
            <h2>${event.event_name}</h2>
        </div>
        `;
        container.innerHTML += card;
    });
});
