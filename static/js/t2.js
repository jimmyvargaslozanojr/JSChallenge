// const x = 4;
// const y = 10;

// if (x > 5 || y > 10) {
//     console.log('x is 10');
// }else if ( x > 10) {
//     console.log('x is greater than 10');
// }else {
//     console.log('x is less than 10');
// }

//Ternary Operator

// const x = 9;

// const color = x > 10 ? 'red' : 'blue';
// console.log(color);

// switch (color) {
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//         console.log('color is blue');
//         break;
//     default:
//         console.log('color is not red or blue');
//         break;
// }

// function addNums(num1 = 2,num2 = 2){
//     // console.log(num1 + num2);
//     return num1 + num2;
// }

// console.log(addNums(3,2));

// const add = (num1 , num2) =>  num1 + num2;
// console.log(add(3,2));

// object oriented programmin 59:40


//Constructor  Function
// function Person(firstname,lastname,dob){
//     this.firstname = firstname,
//     this.lastname = lastname,
//     this.dob = new Date(dob);

// }

// Person.prototype.getBirthYear = function(){
//     return this.dob.getFullYear();
// }

// Person.prototype.getFullName = function(){
//     return `${this.firstname} ${this.lastname}`;
// }

// class Person {
//     constructor(firstname,lastname,dob){
//         this.firstname = firstname,
//         this.lastname = lastname,
//         this.dob = new Date(dob);
//     }

//     getBirthYear(){
//         return this.dob.getFullYear();
//     }

//     getFullName(){
//         return `${this.firstname} ${this.lastname}`;
//     }
// }



// //Instatiate Object
// const person1 = new Person('John','Doe','4-3-1980');
// const person2 = new Person('Mary','Smith','3-6-1980');

// console.log(person1);

