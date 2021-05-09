const fullname = 'Jimmy V. Lozano Jr.';
const age = 30;

const nameAge = `My name is ${fullname} and ${age} years old.`;
// console.log(nameAge);

function myNameAge(age){
    return 2021 - age;
}
// console.log(myNameAge(1990));

const multiply = (a, b) => { return a * b};
// console.log(multiply(3,2));

const person = {
    firstname : ' John',
    lastname: 'Doe',
    age: 30,
    hobbies : ['music', 'movie', 'sports'],
    address: {
        street: '50 main st.',
        city: 'Boston',
        sttes : 'MA'
    }
}

person.email = 'john@gmail.com';
// console.log(person);

const todos = [
    {
        id:1,
        text : 'Take out trash',
        isCompleted: true
    },
    {
        id:2,
        text : 'Meeting with boss',
        isCompleted: true
    },
    {
        id:3,
        text : 'Dentist appt',
        isCompleted: false
    },
    
];

 // console.log(todo[1].text);

// const todoJSON = JSON.stringify(todo);
// console.log(todoJSON);

// For loop
// for(let i = 0;i <= 100;i++){
//     console.log(i);
// }

//  While

// let i =0;
// while (i < 10) {
//     console.log(`While Loop Number: ${i}`);
//     i++;
// }

// for (let i = 0; i < todo.length; i++) {
//     console.log(todo[i].text);
    
// }
// for (let todo of todos){
//     console.log(todo.text);
// }

// High order array

//forEach

// todos.forEach(function(todo){
//     console.log(todo.text);
// });

//Map

// const todoText = todos.map(function(todo){
//     return todo.text;
// });
// console.log(todoText);

//Filter

// const todoCompleted = todos.filter(function(todo){
//     return todo.isCompleted === true;
// }).map(function(todo){
//     return todo.text;
// });
// console.log(todoCompleted);