const modalBtn = document.getElementById("modalBtn");
const modalText = document.getElementById("modalUserText");

const pad2 = n => String(n).padStart(2, "0");

if (modalBtn) {
    modalBtn.addEventListener("click", e => {
        e.preventDefault();

        const rawUser = localStorage.getItem("actualUser");

        if (!rawUser) {
            alert("Najpierw zaloguj się.");
            window.location.href = "index.html";
            return;
        }

        const user = JSON.parse(rawUser);
        const date = new Date(user.registrationDate);

        modalText.innerHTML = `
            <p><strong>Nazwa użytkownika:</strong> ${user.username}</p>
            <p><strong>E-mail:</strong> ${user.email}</p>
            <p><strong>Data rejestracji:</strong>
                ${pad2(date.getDate())}.${pad2(date.getMonth() + 1)}.${date.getFullYear()}
            </p>
        `;

        const modal = new bootstrap.Modal(
            document.getElementById("staticBackdrop")
        );
        modal.show();
    });
}