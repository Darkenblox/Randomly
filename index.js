var number;

let numbers = [];

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

function addNbr(list) {
    randomNbr = getRandomInt(1,17)
    if (list.find(nbrInList => nbrInList == randomNbr)) {
        return addNbr(list)
    }
    else {
        return randomNbr
    }
}

number = prompt("How many numbers ? ");

for (let i = 0; i < number; i++) {
    numbers.push(addNbr(numbers))
}

numbers.sort((a,b)=>a-b)

document.getElementById("numbers").innerHTML = numbers