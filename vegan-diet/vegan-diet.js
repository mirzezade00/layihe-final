document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('registerButton')?.addEventListener("click", () => {
        window.location.href = '../registration/registration.html';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const burgerIcon = document.getElementById("burger-icon");
    const menu = document.querySelector(".menu");

    burgerIcon.addEventListener("click", () => {
        menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    });
});