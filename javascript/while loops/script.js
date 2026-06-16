const code = "devraj";

let guess = prompt("enter the code:- ");
while (guess !== code) {
    guess = prompt("keep guessing...")
}
console.log("Congratulations!!!")