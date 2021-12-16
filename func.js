'use strict'
var test = 10;

function greet(){
    var another = 1;
    console.log( 'function:', test, another);
}

greet();

console.log('global:', test);
//console.log('local:', another);

function firstFunc() {
    //alert(' call andrija please')    
}

firstFunc();

function promtSum(){    
    var number1 = parseInt(prompt('1. number: '));
    var n2 = parseInt(prompt('2. number: '));

    sum(number1, n2);
}

//SAMPLE OF VAR GLOBAL THE CORRECT ONE
// var number1;
// function promtSum(){    
//     number1 = parseInt(prompt('1. number: '));
//     var n2 = parseInt(prompt('2. number: '));

//     sum(number1, n2);
// }
// console.log(number1);



function sum(num1, num2) {
    //if(!number2) is same as if (number == undefined);
    if (isNaN(num1) || isNaN(num2)) {
        return('please go away');
    }else {
    var total = num1 + num2;
    return(total);
}
}

var number1;
function promtSum(){    
    number1 = parseInt(prompt('1. number: '));
    var num2 = parseInt(prompt('2. number: '));

    alert(sum(number1, num2));
}
console.log(number1);


// if (isNaN(myTestVar)) {
//     console.log('Your variable is not a number')
// }
// var content = false;
// var result = isNaN(content);
// console.log(result);
// var age = prompt('how old are you?');console.logbirthDate}`)
// }


//FUNCTION WITH PARAMETERS

function primeNumber(cNumber) {
    let i;
    for (i = 2; i < cNumber; i++) {
        console.log(`${cNumber}/${i} = ${cNumber/i}`);
        if (cNumber % i == 0) {
        console.log(`${cNumber} is not a prime number`);
        break;            
        }
    }
    if(cNumber == i){
        console.log(`${cNumber} is a prime number.`);
    }
}


primeNumber(7);

function isPrime1(cNumber) {
    var result;
    var i;
    for ( i = 2; i <= cNumber/2; i++) {
        console.log(`${cNumber}/${i} = ${cNumber/i}`);
        if (cNumber % i == 0) {
            result = false;
            break;
        }
    }
    console.log(i);
    if (Math.ceil(cNumber/2) === i) {
        result = true;
    }
    return result;
}

function isPrime2(cNumber) {
    for (let i = 2; i < cNumber/2; i++) {
        if(cNumber % i === 0){
            return false;
    }    
}
    return true;
}
console.log(isPrime2('vonn'));


//HOISTING
myFunction();

function myFunction() {
    console.log('Hello');
}


//EXPRESSION FUNCTION
var myFunc2 = function(){
    console.log('hey there');
}

myFunc2();

let myFunc3 = () => 'hi again'


function limited(start, end) {
    for (let i = start; i <= end; i++) {
        if (isPrime2(i)) console.log(i); 
    }
}
console.log(limited(1,10));

//VAR LET CONST

// test2 = 20;
// console.log(test2);
// var test2 = 5;

// let test3 = 50;
// console.log(test3);
// test3 = 10;

// const test4 = 11;
// console.log(test4);
// test4 = 5;

//ARROW FUNCTION

function myFunc() {
    return 123;
}

let myfunc12 = function() {
    return 123;
}

const myFunc13 = () => {
    return 123;
}

const myFunc14 = () => 123;

console.log(myFunc());
console.log(myfunc12());
console.log(myFunc13());
console.log(myFunc14());


//task for bullent!!

