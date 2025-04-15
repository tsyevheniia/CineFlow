const navbar = document.getElementsByClassName('navbar')[0];
const header = document.getElementsByClassName('header')[0];
let users = JSON.parse(localStorage.getItem('users')) || [];
document.addEventListener('scroll', (e) => {
    const headerHeight = header.offsetHeight;
    if (window.scrollY >= headerHeight - 150) {
        navbar.classList.add('bg-dark');
    } else {
        navbar.classList.remove('bg-dark');
    }
});

(() => {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    const confirmPassword = document.getElementById('confirmPassword');
    const password = document.getElementById('password');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (password.value !== confirmPassword.value) {
                confirmPassword.setCustomValidity("Passwords do not match.");
            } else {
                confirmPassword.setCustomValidity("");
            }
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                saveDate(event);
            }

            form.classList.add('was-validated');
        }, false);
    });
})();

const saveDate = (e) => {
    e.preventDefault();
    const userName = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    let data = {name: userName, email: email, password: password};

    const emailExists = users.some(person => person.email === email);

    if (emailExists) {
        document.getElementById('email').value = ''
        alert('This email is already in use');
    } else {
        users.push(data);
        localStorage.setItem('users', JSON.stringify(users));
        window.location.href = 'main.html';
    }
};
