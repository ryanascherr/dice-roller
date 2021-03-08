window.allNumbers = document.querySelectorAll(".blankNumber");
window.numberContainer = document.querySelector(".numberContainer");
window.allSizes = document.querySelectorAll(".blankSize");
window.sizeContainer = document.querySelector(".sizeContainer");
window.rollDice = document.querySelector("#generate");

window.numberOfDice = 0;
window.sizeOfDice = 0;
window.result = 0;

numberContainer.addEventListener("click", function(event) {
    var element = event.target;

    for (var i = 0; i < allNumbers.length; i++) {
        allNumbers[i].setAttribute("class", "blankNumber");
    }

    if (element.matches(".blankNumber")) {
        var number = element.getAttribute("data-number");
        element.setAttribute("class", "highlight");

        window.numberOfDice = parseInt(number);
    }
});

sizeContainer.addEventListener("click", function(event) {
    var element = event.target;

    for (var i = 0; i < allSizes.length; i++) {
        allSizes[i].setAttribute("class", "blankSize");
    }

    if (element.matches(".blankSize")) {
        var size = element.getAttribute("data-size");
        element.setAttribute("class", "highlight");

        window.sizeOfDice = parseInt(size);
    }
});

generate.addEventListener("click", function() {

    console.log(window.numberOfDice, window.sizeOfDice);

    for (var i = 0; i < window.numberOfDice; i++) {
        var math = Math.floor(Math.random() * window.sizeOfDice) + 1;
        console.log(math);
        window.result += math;
    }

    console.log(window.result);

    var alert = document.querySelector(".alert");

    if (window.numberOfDice == 0 || window.sizeOfDice == 0) {
        var mistakeAlertText = "You must choose dice number and dice size. Please try again.";
        alert.innerHTML = mistakeAlertText;
        return;
    } else {
        var alertText = "You rolled " + window.result + "!";
        alert.innerHTML = alertText;
    }

    window.result = 0;
});

