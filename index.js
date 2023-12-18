// code your solution here

// function razzle(){
//     console.log("You've been razzled!")
// }

// function razzle(){
//     console.log("You've been razzled!")
// }
// razzle()

// razzle()
// function razzle(){
//     console.log("You've been razzled!")
// }

// function razzle(lawyer = "Billy", target = " 'em"){
//     console.log(`${lawyer} razzle-dazzles ${target}!`);
// }
// razzle()
// razzle("Methuselah", "T'challah")

function saturdayFun(activity = "roller-skate"){
    return (`This Saturday, I want to ${activity}!`)
}
saturdayFun("dance")
saturdayFun()

// 1 + 1
// "Razzle" + "dazzle!"

// function(){
//     console.log("Yet more razzling")
// }

// (function () {
//     console.log("Yet more razzling")
// })

// function() {
//     console.log("Yet more razzling")
// }

// const button = document.getElementById("button")
// button.addEventListener("click", function () {
//     console.log("yet more razzling")
// })

// const fn = function(){
//     console.log("Yet more razzling")
// }

// fn

// const fn = function (){
//     console.log("yet more razzling")
//     fn
//     fn()
// }

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

console.log(mondayWork('study'))

// (function (baseNumber){
//     return baseNumber + 3
// }(2))

// function outer(greeting, msg = "It's a fine day to learn") {
//     const innerFunction = function (name, lang = "Python") {
//         return `${greeting}, ${name}! ${msg} ${lang}`; 
//   };
//   return innerFunction("student", "JavaScript"); 
// }

// outer("Hello");

// function outer(greeting, msg = "It's a fine day to learn") {
//     const innerFunction = function (name, lang = "Python") {
//       return `${greeting}, ${name}! ${msg} ${lang}`;
//     };
//     return innerFunction;
//   }

//   outer("Hello")("student", "JavaScript");

// const storedFunction = outer("Hello");
// storedFunction("student", "JavaScript");

// function outer(greeting, msg = "It's a fine day to learn") {
//     return function (name, lang = "Python") {
//       return `${greeting}, ${name}! ${msg} ${lang}`;
//     };
//   }
  
//   outer("Hello")("student", "JavaScript");

// const array = (function (thingToAdd) {
//     const base = 3;
//     return [
//       function () {
//         return base + thingToAdd;
//       },
//       function () {
//         return base;
//       },
//     ];
//   })(2);

//   array[0]; //=> ƒ () { return base + thingToAdd; }
//   array[1]; //=> ƒ () { return base; }

//   array[0](); //=> 5
//   array[1](); //=> 3

function wrapAdjective(flair = '*') {
    return function (adjective = 'special') {
        return `You are ${flair}${adjective}${flair}!`;
    };
}
