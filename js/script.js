"use strict"

//documents

const language = document.querySelectorAll(".language");
const ru = document.querySelector(".ru")
const uz = document.querySelector(".uzb")
const eng = document.querySelector(".eng")
const down = document.querySelector(".fa-caret-down")
const up = document.querySelector(".fa-caret-up")
const play = document.querySelector(".fa-play")
const languages = document.querySelector(".languages");
const lang = document.querySelector(".lang");
const rus = document.querySelector(".rus");
const uzbb = document.querySelector(".uzbb");

//Functions Event Listeners

const plays = ()=>{
    play.addEventListener("click", ()=>{
        languages.style.display="block"
        down.style.display = "block"
        play.style.display = "none"
    })
    down.addEventListener("click", ()=>{
        languages.style.display="none"
        down.style.display = "none"
        play.style.display = "block"
    })
}

plays();


//Languages

const langs = ()=>{
    rus.addEventListener("click", ()=>{
            eng.style.display = "none"
            ru.style.display = "block"
            languages.style.display = "none"
            down.style.display = "none"
            play.style.display = "block"
    })
    uzbb.addEventListener("click", ()=>{
        eng.style.display = "none"
        uz.style.display = "block"
        ru.style.display = "none"
        languages.style.display = "none"
        down.style.display = "none"
        play.style.display = "block"
    })
}
langs()




const append = document.querySelector(".li")
const navList = todoList.children

prepend.addEventListener("click", function(){

})




// class Person{
//     name;
//     age;
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
// }

// const person2 = new Person("number", "click");

// console.log(person2);