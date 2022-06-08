function perfectNumbers(arrayOfNumbers) {
    for (let index = 0; index < arrayOfNumbers.length; index++) {
        const element = arrayOfNumbers[index];
        perfectNumber(element)
    }

    function perfectNumber(number) {
        let temp = 0;
        for (let i = 1; i <= number / 2; i++) {
            if (number % i === 0) {
                temp += i;
            }
        }

        if (temp === number && temp !== 0) {
            console.log(number + " is a perfect number!");
        }
        else {
            console.log(number + " is not so perfect.");
        }
    }
}
perfectNumbers([6, 28, 54]);