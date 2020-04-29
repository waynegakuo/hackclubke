const burger = document.getElementById('burger');
const ul = document.querySelector('nav ul');
const form = document.querySelector('.my-form');

burger.addEventListener('click', ()=> {
    ul.classList.toggle('show');
    form.classList.toggle('push');
})