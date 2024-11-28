const correctPasscode = "0000"; // Set your passcode here

document.addEventListener("DOMContentLoaded", function () {
    const passcodeScreen = document.getElementById("passcode-screen");
    const content = document.getElementById("content");
    const passcodeInput = document.getElementById("passcode-input");
    const submitPasscode = document.getElementById("submit-passcode");
    const errorMessage = document.getElementById("error-message");

    submitPasscode.addEventListener("click", function () {
        if (passcodeInput.value === correctPasscode) {
            passcodeScreen.style.display = "none";
            content.style.display = "block";
        } else {
            errorMessage.style.display = "block";
        }
    });

    passcodeInput.addEventListener("keydown", function (e) {
        if (e.key === "Enter") {
            submitPasscode.click();
        }
    });
});

var myCarousel = document.querySelector('#carouselExampleAutoplaying');
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 1000, // 7 seconds
    ride: 'carousel'
});
