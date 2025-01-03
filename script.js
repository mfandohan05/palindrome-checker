const inputBox = document.getElementById("text-input");
const submitButton = document.getElementById("check-btn")
const result = document.getElementById("result");
let userInput = "";
let cleanedInput = "";

submitButton.addEventListener("click", getInputValue);
inputBox.addEventListener("keypress", function(e) {
    if(e.key === "Enter") {
        e.preventDefault();
        getInputValue();
    }
});
function getInputValue() {
    if (inputBox.value === "") {
        alert("Please input a value");
    }
    else {
        userInput = inputBox.value;
    }
    
}
function palindromeChecker() { 
    cleanInputString(userInput);
    let left = 0;
    let right = cleanedInput.length-1;
    while (left < right) {
        if(cleanedInput.charAt(left) === cleanedInput.charAt(right)) {
            left++;
            right--;
        }
        else {
            returnOutputToUser(false);
            clearUserInput();
            return false;
        }
    }
    returnOutputToUser(true);
    clearUserInput();
    return true;
}
function cleanInputString(inputString) {
    let regExp = /[a-zA-Z0-9]/;
    for (let i = 0; i < inputString.length; i++) {
        if(regExp.test(inputString.charAt(i))) {
            cleanedInput += inputString.charAt(i).toLowerCase();
        }
    }
}
function clearUserInput() {
    cleanedInput = "";
    userInput = "";
    inputBox.value = "";
}
function returnOutputToUser(output) {
    if (output) {
        result.innerText = userInput + " is a palindrome.";
    }
    else {
        result.innerText = userInput + " is not a palindrome.";
    }
    
}
