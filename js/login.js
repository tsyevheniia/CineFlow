const checkLogin = (e) => {
    e.preventDefault()
    const email = document.getElementById('exampleInputEmail1').value;
    const password = document.getElementById('exampleInputPassword1').value;

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const foundUser = users.find(user => user.email === email && user.password === password);

    if (foundUser) {
        window.location.href = 'main.html';
    } else {
        document.getElementById('exampleInputEmail1').value = ''
        document.getElementById('exampleInputPassword1').value =  ''
        alert('This account does not exist.');
    }
};
document.querySelector('#loginForm').addEventListener('submit', checkLogin);