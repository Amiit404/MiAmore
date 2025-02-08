// Password Protection
const password = "iloveyou";

function checkPassword() {
    let input = document.getElementById("passwordInput").value;
    let errorMsg = document.getElementById("error");

    if (input === password) {
        document.getElementById("passwordScreen").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
    } else {
        errorMsg.classList.remove("hidden");
        setTimeout(() => errorMsg.classList.add("hidden"), 2000);
    }
}

// Love Acceptance Feature
document.getElementById("yesBtn").addEventListener("click", function () {
    let response = document.getElementById("response");
    response.innerHTML = "Yay! You are my everything! 💖";
    response.classList.remove("hidden");
});

document.getElementById("noBtn").addEventListener("click", function () {
    let response = document.getElementById("response");
    response.innerHTML = "Error! That's not an option! 😠💔";
    response.style.color = "red";
    response.classList.remove("hidden");
});
