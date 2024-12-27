document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("formRegisterButton").addEventListener("click", function () {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();
        const messageElement = document.getElementById("message");

        if (!name || !email || !password) {
            messageElement.textContent = "Bütün sahələri doldurun!";
            messageElement.style.color = "red";
            return;
        }

        if (!email.includes("@")) {
            messageElement.textContent = "E-poçt ünvanını doğru daxil edin!";
            messageElement.style.color = "red";
            return;
        }

        if (password.length < 6) {
            messageElement.textContent = "Şifrə ən az 6 simvoldan ibarət olmalıdır!";
            messageElement.style.color = "red";
            return;
        }

        messageElement.textContent = "Qeydiyyat uğurla tamamlandı!";
        messageElement.style.color = "green";

        setTimeout(() => {
            window.location.href = "../index.html";
        }, 1500);
    });
});
