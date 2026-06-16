let popup = prompt("Hey! say something");

while (true) {
    popup = prompt(popup);
    if (popup === "stop it!!!") {
        break;
    }
}
console.log("okay you win!!!")