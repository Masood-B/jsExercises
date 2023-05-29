// Q1

// From the internet

// 1. Variable: A value that can change, depending on conditions or on information passed to the program.

// 2. Value: A value is a definite object.

// 3. Data Type: A classification that dictates what a variable or object can hold in computer programming.

// 4. Initialization:  A constant or variable values that are used in the code for executing a computer program.

// 5.  const: If you never want a variable to change, 
//     var: You want the hoisting behavior, 
//     let: If you don't want it,

// 6.  Variable Scope : Its lifetime in the program.

// 7. While Loop: A while loop is an iteration method that is best used when you don't know the number of iterations ahead of time. The contents of the loop    are executed as long as the expression evaluates to true.
//    ForEach Loop: A for loop is an iteration method that is best used when you know the number of iterations ahead of time. It’s always followed by the initialization, expression and increment statements.

// 8. Hoisting variable: A mechanism where variables and function declarations are moved to the top of their scope before code execution.
//    Scope variable: The availability of variables and functions in certain parts of the code.

function fullName(){
    console.log("Masood Basardien");
} 
fullName();

// Q2

let firstName = "Masood";
let lastName = "Basardien";
let age = 21;
let subjects = [`Mathematics`, `Physical Science`, `Life Science` , `Accounting`, `Life Orientation`, `English`, `Afrikaans`];
let address = [`Chapel Road`, 14, `Mitchell's Plain`, `Cape Town`, `South Africa`]

let info = [firstName, lastName, age, subjects, address]
console.log(info)

// Q3

function btnResult(){

let numb1 = +document.querySelector("#numb1").value;
let numb2 = +document.querySelector("#numb2").value;
let sign = document.querySelector("#operator").value;
// let calculate = document.querySelector("#display");
let result = document.querySelector(".lblResult");
    
    if (sign == "-"){
        result.innerText = numb1 - numb2;
    }else if (sign == "+"){
        result.innerText = numb1 + numb2;
    }else if (sign == "/"){
        result.innerText = numb1 / numb2;
    }else if (sign == "*"){
        result.innerText = numb1 * numb2;
    }

}
// Q4

// used what give in the link: https://www.freecodecamp.org/news/how-to-reverse-a-string-in-javascript-in-3-different-ways-75e4763c68cb/

// let back = "programming";
// let ward = back.split("");
// console.log(ward.reverse().join(""));

// console.dir(new String);

let pc = "programming";
let newPc = "";
for (let i = pc.length - 1; i >= 0; i--){
    newPc += pc[i];
}
console.log(newPc)

// Q5

let pName = [
    "Kelly",
    "Joe",
    "Trevor",
    "Mish-Al"
]
let pDob = [
    "2020-03-11",
    "2021-06-04",
    "2019-12-20",
    "2020-05-31"
]

let detail = {pName,pDob};
console.log(detail)

// let qFive = {
// nameFirst: "Mash-Al",
// old: 2,
// daysLeft:"2 days",
// };
// let display = qFive.nameFirst +" I am years " + qFive.old +" and my birthday is up in " + qFive.daysLeft;
// console.log(display);

// calculate the age
let dob = new Date(05/29/2020);
let next = Date.now() - dob.getTime();
let ageDt = new Date(next);
let year = ageDt.getUTCFullYear();
let old = Math.abs(year - 2020);

// calculate how many days
let date_1 = new Date('05/31/2023');
let date_2 = new Date();
let days = (date_1, date_2) =>{
    let minus = date_1.getTime() - date_2.getTime();
    let daysLeft = Math.ceil(minus / (1000 * 60 * 60 * 24));
    return daysLeft;
}

console.log("My name is Mish-Al, I am "+old+ " years old years old and my birthday is in "+days(date_1, date_2)+" days time ")

// Q6

let marks = 0;

switch (true) {
 case marks == 100:
 console.log("You're amazing");
 break;
 case marks >= 90:
 console.log("Well Done");
 break;
 case marks >= 80:
 console.log("Way to go");
 break;
 case marks >= 75:
 console.log("Keep it up");
 break;
 case marks >= 60:
 console.log("You did good");
 break;
 case marks >= 50:
 console.log("That was good");
 break;
 case marks <= 49:
 console.log("You failed");
 break;
 default:
 console.log("You failed");
}

// for (let i = 0; i < 10; i++){
//     if ((i % 2) > 0)
//     continue
// }
// console.log(i)