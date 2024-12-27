document.addEventListener("DOMContentLoaded", function() {
    const individualButton = document.getElementById('individual-button');
    const businessButton = document.getElementById('business-button');
    const professionalAdvice = document.getElementById('professional-advice');
    const personalAdvice = document.getElementById('personal-advice');
    
    individualButton.addEventListener('click', function() {
        professionalAdvice.style.display = 'block';  
        personalAdvice.style.display = 'none';  
        individualButton.classList.add('active');
        businessButton.classList.remove('active');
    });

    businessButton.addEventListener('click', function() {
        professionalAdvice.style.display = 'none'; 
        personalAdvice.style.display = 'block';  
        businessButton.classList.add('active');
        individualButton.classList.remove('active');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('registerButton')?.addEventListener("click", () => {
        window.location.href = '../registration/registration.html';
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach((item) => {
        const question = item.querySelector(".faq-question");
        const answer = item.querySelector(".faq-answer");
        const icon = item.querySelector(".toggle-icon");

        question.addEventListener("click", () => {
            answer.style.display = answer.style.display === "block" ? "none" : "block";

            const currentSrc = icon.src.split('/').pop();
            if (currentSrc === "plus.png") {
                icon.src = "../images/minus.png"; 
            } else {
                icon.src = "../images/plus.png"; 
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const burgerIcon = document.getElementById("burger-icon");
    const menu = document.querySelector(".menu");

    burgerIcon.addEventListener("click", () => {
        menu.style.display = (menu.style.display === "flex") ? "none" : "flex";
    });

    document.addEventListener("click", (e) => {
        if (!burgerIcon.contains(e.target) && !menu.contains(e.target)) {
            menu.style.display = "none"; // Menyudan kənara klik edildikdə bağlanır
        }
    });
});

