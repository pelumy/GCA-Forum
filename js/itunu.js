// js styling for navbar toggle, please copy all.
let navbar = document.querySelector('ul');
let navbarClass = navbar.classList;
let navbarChange = document.querySelector('.navbar-change')
let navbarToggle = document.querySelector('#navbar-toggle')

navbarToggle.addEventListener('click', () =>{
    navbar.classList.toggle('navbarChange');
});