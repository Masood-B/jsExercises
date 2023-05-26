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
    