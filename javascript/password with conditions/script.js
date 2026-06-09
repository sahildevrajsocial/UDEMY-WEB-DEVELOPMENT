const password = prompt("please enter a new password");

if (password.length >= 6) {
    console.log("Long enough password");
}
else {
    console.log("Password too short! must be 6+ characters");
}

if (password.indexOf(' ') === -1) {
    console.log("Good job! no spaces");
}
else {
    console.log("Password cannot contain spaces!")
}