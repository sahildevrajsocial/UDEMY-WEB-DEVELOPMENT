const number = 21;
let popup = Number(prompt("Enter a number:- "));

let count = 1;
while (popup !== number) {
    if (popup < number) {
        popup = Number(prompt("guess a lil higher!"));
    }
    else {
        popup = Number(prompt("guess a lil lower"));
    }
    count++;
}
console.log(`it took you ${count} guesses`)