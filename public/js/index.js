const mainForm = document.getElementById("mainForm");
const navbar = document.getElementsByClassName('navbar')[0];
const header = document.getElementsByClassName('header')[0];
const user = localStorage.getItem('actualUser');

if (user) {
    window.location.href = "main.html";
} else {
    document.body.style.display = "block";
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const emailVerification = () => {
    const emailInput = document.getElementById("inputEmail");
    const value = emailInput.value.trim();

    if (!emailRegex.test(value)) {
        emailInput.setCustomValidity("Nieprawidłowy adres e-mail");
    } else {
        emailInput.setCustomValidity("");
    }
};

document.addEventListener('scroll', () => {
    const headerHeight = header.offsetHeight;
    if (window.scrollY >= headerHeight - 150) {
        navbar.classList.add('bg-dark');
    } else {
        navbar.classList.remove('bg-dark');
    }
});

document.getElementById("mainForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    emailVerification();

    if (!mainForm.checkValidity()) {
        mainForm.classList.add("was-validated");
        return;
    }

    const email = document.getElementById("inputEmail").value.trim();

    try {
        const response = await fetch("/api/main", {
            method: "POST",
            headers: {
                "Content-Type": "text/plain",
                "Accept": "text/plain"
            },
            body: email
        });

        if (response.ok) {
            localStorage.setItem('loginUser', email);
            window.location.href = "login.html";
        } else if (response.status === 400) {
            localStorage.setItem('registrationUser', email);
            window.location.href = "registration.html";
        } else {
            alert("Błąd serwera. Spróbuj ponownie później.");
        }

    } catch (error) {
        console.error("Error:", error);
        alert("Błąd serwera. Spróbuj ponownie później.");
    }
});