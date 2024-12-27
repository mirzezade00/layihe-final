document.addEventListener("DOMContentLoaded", () => {
    const dietForm = document.getElementById("diet-form");
    const resultContainer = document.getElementById("result-container");

    const numberInputs = dietForm.querySelectorAll('input[type="text"]');
    numberInputs.forEach(input => {
        input.addEventListener("input", (e) => {
            e.target.value = e.target.value.replace(/[^0-9.]/g, '');
        });
    });

    dietForm.addEventListener("submit", (e) => {
        e.preventDefault();

        resultContainer.innerHTML = "";

        const age = parseInt(dietForm.age.value);
        const weight = parseFloat(dietForm.weight.value);
        const height = parseFloat(dietForm.height.value);
        const gender = dietForm.gender.value;

        if (!age || !weight || !height) {
            alert("Zəhmət olmasa bütün məlumatları düzgün daxil edin.");
            return;
        }

        let bmr;
        if (gender === "male") {
            bmr = 10 * weight + 6.25 * height - 5 * age + 5;
        } else if (gender === "female") {
            bmr = 10 * weight + 6.25 * height - 5 * age - 161;
        }

        console.log(`Gender: ${gender}, BMR: ${bmr}`);

        const resultDiv = document.createElement("div");
        resultDiv.className = "result";

        resultDiv.innerHTML = `
            <span>Sizin gündəlik qəbul etməli olduğunuz kalori: ${bmr.toFixed(2)} kcal</span>
            <button type="button" class="close-btn">X</button>
        `;

        const closeButton = resultDiv.querySelector(".close-btn");
        closeButton.addEventListener("click", () => {
            resultContainer.innerHTML = "";
        });

        resultContainer.appendChild(resultDiv);
    });
});

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('registerButton')?.addEventListener("click", () => {
        window.location.href = '../registration/registration.html';
    });
});

const goalForm = document.getElementById("goal-form");
const goalInput = document.getElementById("goal-input");
const goalList = document.getElementById("goal-list");

const goals = JSON.parse(localStorage.getItem("goals")) || [];

function renderGoals() {
    goalList.innerHTML = ""; 
    goals.forEach((goal) => {
        const listItem = document.createElement("li");
        listItem.textContent = goal;

        const removeButton = document.createElement("button");
        removeButton.style.fontSize = "1.5rem"
        removeButton.textContent = "Sil";
        removeButton.classList.add("remove-button");
        removeButton.addEventListener("click", function () {
            removeGoal(goal); 
        });

        listItem.appendChild(removeButton);
        goalList.appendChild(listItem);
    });
}

function addGoal(goalText) {
    if (goals.includes(goalText)) {
        alert("Bu hədəf artıq mövcuddur!");
        return;
    }

    goals.push(goalText);
    localStorage.setItem("goals", JSON.stringify(goals));
    renderGoals();
}

function removeGoal(goalText) {
    const goalIndex = goals.indexOf(goalText);
    if (goalIndex > -1) {
        goals.splice(goalIndex, 1);
        localStorage.setItem("goals", JSON.stringify(goals));
        renderGoals();
    }
}

// goalForm.addEventListener("submit", function (e) {
//     e.preventDefault();
//     const goalText = goalInput.value.trim();

//     if (goalText === "") {
//         alert("Məqsəd sahəsini doldurun!");
//         return;
//     }

//     addGoal(goalText);
//     goalInput.value = ""; 
// });

// renderGoals();






const proxyUrl = "https://api.allorigins.win/get?url=";
const apiUrl = "https://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json";

function fetchQuote() {
    const fullUrl = proxyUrl + encodeURIComponent(apiUrl) + `&timestamp=${new Date().getTime()}`;

    fetch(fullUrl)
        .then(function (response) {
            if (!response.ok) {
                throw new Error("API-dən məlumat alınmadı.");
            }
            return response.json();
        })
        .then(function (data) {
            const parsedData = JSON.parse(data.contents);
            document.getElementById("quote").innerText = `"${parsedData.quoteText}"`;
            document.getElementById("author").innerText = `— ${parsedData.quoteAuthor || "Nameless"}`;
        })
        .catch(function (error) {
            console.error("Xəta baş verdi:", error);
            document.getElementById("quote").innerText = "Sitat yüklənə bilmədi. Yenidən cəhd edin.";
            document.getElementById("author").innerText = "";
        });
}

fetchQuote();

setInterval(fetchQuote, 10000);

document.getElementById("refreshButton").remove();
