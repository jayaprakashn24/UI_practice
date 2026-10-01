const display = document.getElementById("display");
const buttons = document.querySelectorAll("[data-value]");
const clearButton = document.getElementById("clear");
const equalButton = document.getElementById("equal");

// Number and operator buttons
buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        const value = button.dataset.value;
        display.value += value;
    });
});

// Clear button
clearButton.addEventListener("click", function () {
    display.value = "";
});

// Equal button
equalButton.addEventListener("click", function () {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
});
