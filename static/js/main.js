// Single element
// const form = document.getElementById('my-form');
// console.log(document.querySelector('.container'));

//Multiple element
// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByClassName('item'));
// console.log(document.getElementsByTagName('li'));

// const items = document.querySelectorAll('.item');
// items.forEach((item) => console.log(item));

// const ul = document.querySelector('.items');
// // ul.remove();

// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = 'Hello';
// ul.children[1].innerText = 'Brad';
// ul.lastElementChild.innerHTML = '<h1>Hello</h1>';

// const btn = document.querySelector('.btn');
// btn.style.background = 'red';
// btn.addEventListener('mouseout',(e) => {
//     e.preventDefault();
//     document.querySelector('#my-form')
//     .style.background = '#ccc';
//     document.querySelector('body')
//     .classList.add('bg-dark');
//     console.log('click');
//     document.querySelector('.items')
//     .lastElementChild.innerHTML = '<h1>Hello</h1>';
// });


const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);
function onSubmit(e){
    e.preventDefault();

    if(nameInput.value === '' || emailInput === ''){
        msg.classList.add('error-msg');
        msg.innerHTML = 'Please enter all fields';

        setTimeout(() => msg.remove(),3000);
    } else {
        console.log('success');
        const li = document.createElement('li');
        li.appendChild(document
            .createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);
        
        nameInput.value = '';
        emailInput.value = '';
    }
    

}