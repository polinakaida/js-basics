//1
const a = 7;
const b = 4;
console.log(a * b);

//2
const c = 15;
const d = 5;
console.log(c / d);

//3
const e = 8;
const f = 11;
console.log(e + f);

//4
const numValue = 11;
const booleanValue = true;
const stringValue = 'java script';
const stringValue2 = '100';
console.log(numValue, booleanValue, stringValue, stringValue2);

//5
let num = 1;
num += 11;
num -= 11;
num *= 11;
num /= 11;
num ++;
num--;
console.log(num);

//1
const number = Number(prompt('Enter a number:'));
const square = number ** 2;
console.log('Square of a number: ', square);

//2
const num1 = +prompt('Enter first number:');
const num2 = +prompt('Enter second number:');
const average = (num1 + num2) / 2;
console.log('Average: ', average);

//3 
const minutes = +prompt('Enter the number of minutes:');
const seconds = minutes * 60;
console.log(minutes + ' minutes = ', seconds, ' seconds');

//4
const greeting = 'Hello, ';
const userName = prompt('Enter yout name:');
const message = greeting + userName + '!';
alert(message);

document.write("<p>" + message + "</p>");
