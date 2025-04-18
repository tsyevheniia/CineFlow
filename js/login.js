document.addEventListener('DOMContentLoaded', () => {
    const emailInputSignIn = document.getElementById('exampleInputEmail1');
    emailInputSignIn.value = JSON.parse( localStorage.getItem('loginUser'));
});

(() => {
    'use strict';

    const forms = document.querySelectorAll('.needs-validation');

    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            }

            form.classList.add('was-validated');
        }, false);
    });
})();

const checkLogin = (e) => {
    e.preventDefault();
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const actualUser = users.find(user => user.email === email && user.password === password);
    const checkingPassword = users.find(user=> user.password !== password);

    if (actualUser) {
        localStorage.setItem('actualUser', JSON.stringify(actualUser));
        localStorage.removeItem('loginUser');
        window.location.href = 'main.html';
    }else if(checkingPassword){
        alert('Please enter correct password');
    }
     else {
        document.getElementById('exampleInputEmail1').value = '';
        document.getElementById('exampleInputPassword1').value = '';
        alert('This account does not exist.');
    }
};
document.querySelector('#loginForm').addEventListener('submit', checkLogin);