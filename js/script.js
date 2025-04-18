const navbar = document.getElementsByClassName('navbar')[0];
const header = document.getElementsByClassName('header')[0];
let users = JSON.parse(localStorage.getItem('users')) || [];
const emailInput = document.getElementById('inputEmail');
const email = document.getElementById('email');
document.addEventListener('scroll', (e) => {
    const headerHeight = header.offsetHeight;
    if (window.scrollY >= headerHeight - 150) {
        navbar.classList.add('bg-dark');
    } else {
        navbar.classList.remove('bg-dark');
    }
});

document.addEventListener('DOMContentLoaded', ()=>{
    email.value = JSON.parse(localStorage.getItem('loginUser'));
})
