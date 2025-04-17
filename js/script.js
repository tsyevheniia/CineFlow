const navbar = document.getElementsByClassName('navbar')[0];
const header = document.getElementsByClassName('header')[0];
let users = JSON.parse(localStorage.getItem('users')) || [];
const emailBtn = document.getElementById('emailBtn');
const emailInput = document.getElementById('inputEmail');
document.addEventListener('scroll', (e) => {
    const headerHeight = header.offsetHeight;
    if (window.scrollY >= headerHeight - 150) {
        navbar.classList.add('bg-dark');
    } else {
        navbar.classList.remove('bg-dark');
    }
});

const signUp = ()=>{
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.some(user => user.email === emailInput.value)
    if(emailInput.value === '') {
        console.log(emailInput)
        alert('Please enter your email address');
    }
    else if(!user){
        alert('There is no such email address');
    }
    else{
        window.location.href ='login.html'
    }
}
emailBtn.addEventListener('click', (e)=>{e.preventDefault();signUp()})
document.querySelector('#registerForm').addEventListener('submit', saveDate);
