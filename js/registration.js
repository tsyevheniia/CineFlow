const mainForm = document.getElementById('mainForm');
const inputEmail = document.getElementById('inputEmail');
mainForm.addEventListener('submit', (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!mainForm.checkValidity()) {
        mainForm.classList.add('was-validated');
        return;
    }

    mainForm.classList.add('was-validated');
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.some(user => user.email === emailInput.value);
    if (inputEmail.value === '') {
        alert('Please enter your email address');
    }
    else if(!user){
        alert('There is no such email address.Please register!');
        localStorage.setItem('loginUser', JSON.stringify(inputEmail.value))
        window.location.href ='registration.html'
    }
    else{
        alert('There is such email address. Please sign in!');
        localStorage.setItem('loginUser', JSON.stringify(emailInput.value))
        window.location.href ='login.html'
    }
})