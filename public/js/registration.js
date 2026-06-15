const user = localStorage.getItem("actualUser");

const regForm = document.getElementById("registerForm");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");

const emailFormatError = document.getElementById("emailFormatError");
const emailExistsError = document.getElementById("emailExistsError");

if (user) {
    window.location.href = "main.html";
} else {
    document.body.style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
    emailInput.value = localStorage.getItem("registrationUser") || "";
});

[usernameInput, passwordInput, confirmPasswordInput].forEach((input) => {
    input.addEventListener("input", () => {
        input.setCustomValidity("");
        regForm.classList.remove("was-validated");
    });
});

emailInput.addEventListener("input", () => {
    emailInput.setCustomValidity("");
    emailFormatError.style.display = "";
    emailExistsError.style.display = "none";
    regForm.classList.remove("was-validated");
});

regForm.addEventListener("submit", async (e) => {
    e.preventDefault();

    emailInput.setCustomValidity("");
    confirmPasswordInput.setCustomValidity("");
    emailFormatError.style.display = "";
    emailExistsError.style.display = "none";

    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.setCustomValidity("Nieprawidłowe dane");
    }

    if (!regForm.checkValidity()) {
        regForm.classList.add("was-validated");
        return;
    }

    const formData = {
        username: usernameInput.value.trim(),
        email: emailInput.value.trim(),
        password: passwordInput.value.trim(),
        registrationDate: new Date(),
    };

    let response;
    try {
        response = await fetch("/api/registration", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
    } catch (err) {
        console.error("Błąd rejestracji:", err);
        alert("Błąd serwera. Spróbuj ponownie później.");
        return;
    }

    if (response.status === 400) {
        emailInput.setCustomValidity("Nieprawidłowe dane");
        emailFormatError.style.display = "none";
        emailExistsError.style.display = "";
        regForm.classList.add("was-validated");
        return;
    }

    if (!response.ok) {
        console.error("Nieoczekiwany status:", response.status);
        alert("Błąd serwera. Spróbuj ponownie później.");
        return;
    }

    const safeUser = {
        username: formData.username,
        email: formData.email,
        registrationDate: formData.registrationDate,
    };

    localStorage.removeItem("registrationUser");
    localStorage.setItem("actualUser", JSON.stringify(safeUser));
    window.location.href = "main.html";
});

window.addEventListener("beforeunload", () => {
    localStorage.removeItem("registrationUser");
});