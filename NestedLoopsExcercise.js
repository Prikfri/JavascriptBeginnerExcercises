function time(params) {
    for (let hours = 0; hours < 24; hours++) {
        for (let minutes = 0; minutes < 60; minutes++) {
            console.log(`${hours}:${minutes}.`);
        }
    }
}
//time();

function multiplicationTable(params) {
    for (let multiplier1 = 1; multiplier1 < 11; multiplier1++) {
        for (let multiplier2 = 1; multiplier2 < 11; multiplier2++) {

            console.log(`${multiplier1} * ${multiplier2} = ${multiplier1 * multiplier2}`);
        }
    }
}
//multiplicationTable();


function combination(parameter) {
    let number = Number(parameter[0]);
    let correctSum = 0;
    for (let x1 = 0; x1 <= number; x1++) {
        for (let x2 = 0; x2 <= number; x2++) {
            for (let x3 = 0; x3 <= number; x3++) {
                let sum = x1 + x2 + x3;
                if (sum==number) {
                    correctSum++;
                }
            }

        }
    }
    console.log(correctSum);
}
combination(["25"]);

function magicNumber(arrayOfNumbers) {
    let firstNumber= arrayOfNumbers[0];
    let lastNumber = arrayOfNumbers[1];
    let magicNumber;
}