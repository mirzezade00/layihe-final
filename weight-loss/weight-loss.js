document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('registerButton')?.addEventListener("click", () => {
        window.location.href = '../registration/registration.html';
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.toggle');
    
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            const dietCard = this.closest('.diet-card');
            const dietDetails = dietCard.querySelector('.diet-details');
            dietDetails.classList.toggle('show');
        });
    });
});
