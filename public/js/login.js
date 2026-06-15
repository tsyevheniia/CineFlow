const user = localStorage.getItem("actualUser");
const form = document.getElementById("loginForm");
const emailInput = document.getElementById("inputEmail");
const passwordInput = document.getElementById("inputPassword");
const emailError = document.getElementById("emailError");
const savedEmail = localStorage.getItem("loginUser");
const passwordFormatError = document.getElementById("passwordFormatError");
const passwordWrongError = document.getElementById("passwordWrongError");

if (user) {
    window.location.href = "main.html";
} else {
    document.body.style.display = "block";
}

if (savedEmail) {
    emailInput.value = savedEmail;
}

emailInput.addEventListener("input", () => {
    emailError.textContent = "Proszę wprowadzić poprawny adres e-mail.";
    emailInput.setCustomValidity("");
    form.classList.remove("was-validated");
});

passwordInput.addEventListener("input", () => {
    passwordWrongError.classList.add("d-none");
    passwordFormatError.classList.remove("d-none");
    passwordInput.classList.remove("is-invalid");
    form.classList.remove("was-validated");
});

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    emailError.textContent = "Proszę wprowadzić poprawny adres e-mail.";
    emailInput.setCustomValidity("");
    passwordWrongError.classList.add("d-none");
    passwordFormatError.classList.remove("d-none");
    passwordInput.classList.remove("is-invalid");

    if (!form.checkValidity()) {
        form.classList.add("was-validated");
        return;
    }

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    let response;
    try {
        response = await fetch("/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
    } catch {
        alert("Błąd serwera. Spróbuj ponownie później.");
        return;
    }

    if (response.status === 404) {
        emailError.textContent = "Konto z tym adresem e-mail nie istnieje.";
        emailInput.setCustomValidity("Nieprawidłowe dane");
        form.classList.add("was-validated");
        return;
    }

    if (response.status === 401) {
        passwordFormatError.classList.add("d-none");
        passwordWrongError.classList.remove("d-none");
        passwordInput.classList.add("is-invalid");
        form.classList.add("was-validated");
        return;
    }

    if (!response.ok) {
        alert("Błąd serwera. Spróbuj ponownie później.");
        return;
    }

    const data = await response.json();
    localStorage.setItem("actualUser", JSON.stringify(data));
    window.location.href = "main.html";
});

window.addEventListener("beforeunload", () => {
    localStorage.removeItem("loginUser");
});