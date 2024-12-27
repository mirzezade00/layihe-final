document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('registerButton')?.addEventListener("click", () => {
        window.location.href = '../registration/registration.html';
    });
});

document.getElementById('ektomorf-btn').addEventListener('click', function() {
    toggleTips('ektomorf');
});

document.getElementById('mezomorf-btn').addEventListener('click', function() {
    toggleTips('mezomorf');
});

document.getElementById('endomorf-btn').addEventListener('click', function() {
    toggleTips('endomorf');
});


function toggleTips(type) {
    const allTips = document.querySelectorAll('.tips-content');
    allTips.forEach(tip => tip.style.display = 'none');
    
    const selectedTip = document.getElementById(`${type}-tips`);
    if (selectedTip) {
        selectedTip.style.display = 'block'; 
    }
}
