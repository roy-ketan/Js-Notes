// console.log('Hello everyone this is Ketan Roy2');
// console.log('Still i can change wordings!');
// console.log('I have just linked html with js files');
// This is comment tag and line above is used to print in 

// VARIABLE

// let a = 5;

// let b = 'ketan';

// let c = true;

// let d = 12.5;

// console.log(a);
// console.log(b);

// var k = 67;

// if(c = true){

//     let k = 69;

//     console.log(k);
// }

// console.log(k)





// CONSTANTS

// const a = 5;

// console.log(a);




// DYNAMIC TYPING

// let a = 5;
// a = 'Babbar';

//  console.log(a);




// REFERENCE DATATYPES


// 1. Objects -  person

// let person = {
//     firstName = 'love';
//     age = 24;

// };

// To access - person.firstName , person.age

// dot(.) notation and bracket[] notation both can be used to access




// OPERATORS

// let a = 10;
// console.log(++a);




// COMPARISON OPERATORS

// console.log(5=='5');




// Ternary operator 

// condition ? val1 : val2 ; agar condition true hui toh value1 print hogi agar false hai toh value2 print hogi

// let age = 26;

// let status = (age>=18)?'I can vote':'Cannot vote';

// console.log(status);




// LOGICAL OPERATOR

// AND, OR, NOT



// NON BOOLEANS

// console.log(false || 5 || 1); Phle hi truthy value mil gayi(5) toh aage nahi jata dhundne....(short circuiting) in OR Operator
// "AND" ke liye bhi dhund lena



// BITWISE OPERATORS

// let a = 2;
// let b = 3;

// console.log(a&b);
// console.log(a|b);




// CONTROL STATEMENT

// let marks = 98;

// if(marks>90){
//     console.log('A');
// }


// let num = 2;

// switch(num){

//     case 1 : console.log('A');
//     break;
//     case 2 : console.log('B');
//     break;
//     case 3 : console.log('C');
//     break;
//     case 4 : console.log('D');
//     break;
//     default: console.log('E');
// }





// OBJECT CREATION

// const rectangle = {
//     length : 1,
//     breadth : 2,


//     draw : function(){
//         console.log('drawing');
//     }
// };





// CLASS CREATION TO CREATE MULTIPLE OBJECTS

// FACTORY FUNCTION

// function createRectangle(){

//     return rectangle = {
//     length : 1,
//     breadth : 2,


//     draw(){
//         console.log('drawing');
//     }
// };



// }


// let rectangleObj1 = createRectangle();

// console.log(rectangleObj1.length);





// BY INPUTSs
 

// function createRectangle(len,bre){

//     return rectangle = {
//     length : len,
//     breadth : bre,


//     draw(){
//         console.log('drawing');
//     }
// };



// }


// let rectangleObj1 = createRectangle(5,4);

// console.log(rectangleObj1.length);
 




// CONSTRUCTOR FUNCTION


// function Rectangle(){
//     this.length = 3;
//     this.breadth = 2;
//     this.draw = function(){
//         console.log('I am drawing!');
//     }

// }

// let rectangleObject = new Rectangle();
// rectangleObject.draw();





// DYNAMIC NATURE OF OBJECTS


// function Rectangle(){
//     this.length = 3;
//     this.breadth = 2;
//     this.draw = function(){
//         console.log('I am drawing!');
//     }

// }

// let rectangleObject = new Rectangle();
// rectangleObject.draw();
// rectangleObject.color = 'yellow';

// console.log(rectangleObject);

// delete rectangleObject.color;

// console.log(rectangleObject);

// console.log(rectangleObject.constructor);
// console.log(Rectangle.constructor);






// BY REFERENCE

// let a = { value : 10};
// let b = a;

// a.value++;

// console.log(a);
// console.log(b);





// ITERATING THOROUGH OBJECTS

// let rectangle = {
//     length : 2,
//     breadth : 4
// };

// for-in loop

// for(let key in rectangle){
//     console.log(key,rectangle[key]);// Here we use bracket notation (from dot,bracket notation)
// }


// for-of loop

// for(let key of Object.keys(rectangle)){    // Hack to use for-of loops in objects
//     console.log(key,rectangle[key]);
// }

// for(let key of Object.entries(rectangle)){    // to print key-value pairs
//     console.log(key,rectangle[key]);
// }





// To check whether this particular property is present in 
// if('color' in rectangle){
//     console.log('color is there!');
// }
// else{
//     console.log('No color attribute found!');
// }





// OBJECT CLONING

// 1. Iteration 

// let rectangle = {
//     length : 2,
//     breadth : 4
// };


// let shape = {};

// for(key in rectangle){
//     shape[key] = rectangle[key];
// }

// console.log(shape);





// 2. Assign


// let shape2 = Object.assign({},rectangle);

// console.log(shape2);




// 3. Spread

// let shape3 = {...rectangle};
// console.log(shape3);




// INBUILT OBJECTS
//1.Math
// console.log(Math.random());
// console.log(Math.PI);
// console.log(Math.round(1.5));
// console.log(Math.max(1,2,3,4));
// console.log(Math.min(2,3,1,4));
// console.log(Math.abs(-2.5));

//2. string

// we know about primitive strings....

// let lastName = 'Roy';
// // Lets see object strings

// let firstName = new String('Ketan');


// console.log(typeof(lastName));
// console.log(typeof(firstName));


// console.log(lastName.length); // Js behavior - If we use '.' even with primitive string it will show some properties and methods 

// console.log(lastName.includes('oy'));

// // ....And so on so forth

// let message = 'This is my first message';

// let words = message.split(' ');

// console.log(words);





// TEMPLATE LITERAL

// let message = 'This is \n my first \n message!';

// console.log(message);

// // using backtip literal

// let message2 = `This is ketan
// my first 
// message!`;

// console.log(message2);

// // Lets make it dynamic

// let name = 'Ketan';

// let message3 = `This is ${name}
// my first 
// message!`;

// console.log(message3);






// DATE AND TIME

// let date = new Date();

// console.log(date);





// Arrays 

// let numbers = [1,3,2,4];

// numbers.unshift(8);
// numbers.push(9);
// numbers.splice(2,0,'a','b','c');


// console.log(numbers);
// console.log(numbers.indexOf(2));
// console.log(numbers.includes(4));




// Array of Objects

// let courses = [
//     {no:1, naam:'Ketan'},
//     {no:2, naam:'Roy'}
// ];

// console.log(courses);
// console.log(courses.indexOf({no:1, naam:'Ketan'})); // Gives wrong answer - It needs call back function




// // CALLBACK FUNCTION

// let ans = courses.find(function(course){    // This returns an 'object' what you are searching for
//     return course.naam==='Ketan';
// })

// console.log(ans);





// Function Assignment

// let stand = function walk(){
//     console.log('Walking');
// };

// stand();




// Anonymous Function Assignment

// let a = function(){
//     console.log('This is anonymous function assignment!');
// };

// a();






// Dynamic Function

// function sum(a,b){
//     let total = 0;
//     for(let value of arguments){
//         total+=value;
//     }
//     return total;
// }



// let ans = sum(1,2);  Yaha parameters badha bhi skte hai

// console.log(ans);






// Rest Operator

// function sum(...args){     Makes an array
//     console.log(args);
// }


// sum(1,2,3,4,5);


// function sum(num,value,...args){
//     console.log(args);
// }

// sum(1,2,3,4,5);






// Default Parameters

// function interest(p,r=5,y=5){
//     return p*(r/100)*y;
// }


// console.log(interest(1000));






// Getter Setter

// let person =  {
//     fName : 'Ketan',
//     lName : 'Roy',

//     get fulName(){
//         return `${person.fName} ${person.lName}`;
//     },

//     set fulName(value){
//         if(typeof(value)!=='string'){
//             throw new Error("You have not sent a string");
//         }
//         let parts = value.split(' ');
//         this.fName = parts[0];
//         this.lName = parts[1];
//     }
// };



// console.log(person.fulName); // Getter call hua hai yaha

// person.fulName = 'Rahul Kumar'; // Setter call hua hai yaha

// console.log(person.fulName);
 




// Try and Catch Block

//  try{
//     person.fulName = 1;
//  }

//  catch(e){
//     alert('You have sent a number in fulName!');

//  }


//  try{
//     person.fulName = 'Hello';
//  }

//  catch(e){
//     alert(e);

//}


// ............................................DOM...................................................................









