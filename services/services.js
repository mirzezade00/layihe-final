document.getElementById('fitness').addEventListener('click', function() {
    updateContent('fitness');
});

document.getElementById('mental-health').addEventListener('click', function() {
    updateContent('mental-health');
});

function updateContent(service) {
    const allContents = document.querySelectorAll('.service-content');
    allContents.forEach(function(content) {
        content.style.display = 'none';
    });

    const contentToShow = document.getElementById(service + '-content');
    contentToShow.style.display = 'block';
}
updateContent('fitness');

document.getElementById("mental-select").addEventListener("change", function () {

    document.querySelectorAll(".info-box").forEach(function (box) {
        box.style.display = "none";
    });

    const selectedValue = this.value;
    if (selectedValue) {
        const selectedBox = document.getElementById(`info-${selectedValue}`);
        if (selectedBox) {
            selectedBox.style.display = "block";
        }
    }
});

document.getElementById('registerButton').onclick = function() {
    window.location.href = '../registration/registration.html';
};


      document.querySelectorAll('.article').forEach(article => {
            article.addEventListener('click', function () {
                const allContents = document.querySelectorAll('.fitness-content');
                const contentId = `content-${this.id}`;
                const contentToShow = document.getElementById(contentId);
        
                if (contentToShow && contentToShow.style.display === 'block') {
                    contentToShow.style.display = 'none';
                    return; 
                }
        
                allContents.forEach(content => content.style.display = 'none');
        
                if (contentToShow) {
                    contentToShow.style.display = 'block';
                }
            });
        });
        

        const opinions = document.querySelector('.opinions');
        const opinionItems = opinions.innerHTML; // Mövcud rəyləri saxlayır
        opinions.innerHTML += opinionItems; // Rəyləri təkrar əlavə edir
         