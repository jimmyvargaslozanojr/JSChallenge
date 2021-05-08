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

const todo = [
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

const todoJSON = JSON.stringify(todo);
// console.log(todoJSON);

for(let i = 0;1 < 10;i++){
    console.log(i);
}