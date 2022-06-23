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
                if (sum == number) {
                    correctSum++;
                }
            }

        }
    }
    console.log(correctSum);
}
//combination(["25"]);



function trip(array) {

    let budget = 0;
    let city = String;
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element === "End") {
            break;
        }
        else if (isNaN(element)) {
            city = element;
            budget = Number(array[++index]);
            continue;
        }
        if (!isNaN(element)) {

            budget -= element;
            if (budget <= 0) {
                console.log(`Going to ${city}!`)
            }
        }

    }
}
//trip(["France","2000","2000","Portugal","1450","400","400","200","300","300","Egypt","1900","1000","280","300","500","End"])



function building(arrayOfApartaments) {
    let floors = Number(arrayOfApartaments[0]);
    let apartamentsOnFloor = Number(arrayOfApartaments[1]);
    for (let floor = floors; floor > 0; floor--) {
        let currentFloor = '';
        for (let apartament = 0; apartament < apartamentsOnFloor; apartament++) {
            if (floor == floors) {
                currentFloor += `L${floor}${apartament} `;
            } else if (floor % 2 == 0) {
                currentFloor += `O${floor}${apartament} `;
            } else if (floor % 2 != 0) {
                currentFloor += `A${floor}${apartament} `;
            }
        }
        console.log(currentFloor);

    }
}
//building(["6", "4"])



function pyramyidOfNumbers(params) {
    let n = Number(params[0]);
    let current = 1;
    let isBigger = false;
    let printCurrentLine = "";
    for (let rows = 0; rows < n; rows++) {
        for (let cols = 0; cols <= rows; cols++) {
            if (current > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += current + " ";
            current++;
        }
        console.log(printCurrentLine);
        printCurrentLine = "";
        if (isBigger) {
            break;
        }
    }
}
//pyramyidOfNumbers(["2"]);




function equalSumOfEvenAndOddPositions(arrayOfNumbers) {

    let firstNumber = Number(arrayOfNumbers[0]);
    let lastNumber = Number(arrayOfNumbers[1]);
    let numbersWithEqualEvenAndOddSum = "";
    for (let index = firstNumber; index <= lastNumber; index++) {
        const element = arrayOfNumbers[index];
        var digits = index.toString().split('');
        var realDigits = digits.map(Number);
        let evenPlacesSum = 0;
        let oddPlacesSum = 0;
        for (let index = 0; index < realDigits.length; index++) {
            const element = realDigits[index];
            if (index % 2 == 0) {
                oddPlacesSum += element;
            }
            else if (index % 2 != 0) {
                evenPlacesSum += element;
            }
        }
        if (evenPlacesSum == oddPlacesSum) {
            numbersWithEqualEvenAndOddSum += index + " ";
        }
    }
    console.log(numbersWithEqualEvenAndOddSum);
}
//equalSumOfEvenAndOddPositions((["100000","100050"]));



function sumOfPrimeAndSumOfCompositeNumbers(arrayOfNumbers) {
    let sumOfPrimeNumbers = 0;
    let sumOfCompoundNumbers = 0;
    loop1: for (let index = 0; index < arrayOfNumbers.length; index++) {
        if (arrayOfNumbers[index] == "stop") {
            break loop1;
        }
        let isPrime = true;
        const element = Number(arrayOfNumbers[index]);

        if (element < 0) {
            console.log("Number is negative.");
            continue;
        }
        if (element > 1) {
            for (let i = 2; i < element; i++) {
                if (element % i == 0) {
                    sumOfCompoundNumbers += element;
                    isPrime = false;
                    break;
                }

            }
            if (isPrime) {
                sumOfPrimeNumbers += element;
            }
        }

    }


    console.log(`Sum of all prime numbers is: ${sumOfPrimeNumbers}`);
    console.log(`Sum of all non prime numbers is: ${sumOfCompoundNumbers}`);
}
//sumOfPrimeAndSumOfCompositeNumbers(["3","9","0","7","19","4","stop"])





function testJury(array) {
    let allGrades = 0;
    let grades = 0;
    let subject = "";
    let counter = 0;
    let averageGrade = 0;
    let counterForAllGrades = 0;
    let juryNumbers = Number(array[0]);
    for (let index = 1; index < array.length; index++) {
        if (array[index] === "Finish") {
            break;
        }
        const element = Number(array[index]);

        if (isNaN(element)) {
            subject = array[index];
            //grade = Number(array[++index]);
            //console.log("subject " + subject)
            continue;
        }
        if (!isNaN(element)) {
            grades += element;
            allGrades += element;
            counter++;
            counterForAllGrades++;
            if (counter == juryNumbers) {
                averageGrade = (grades / juryNumbers).toFixed(2);
                console.log(`${subject} - ${averageGrade}.`);
                counter = 0;
                grades = 0;
                subject = "";
                averageGrade = 0;
            }
        }

    }
    console.log(`Student's final assessment is ${(allGrades / counterForAllGrades).toFixed(2)}.`)

}
//testJury(["3","Arrays","4.53","5.23","5.00","Lists","5.83","6.00","5.42","Finish"])



function ticketsForCinema(array) {
    let movieName = "";
    let allTicketsAvaiable = 0;
    let studentTicketsForTheMovie = 0;
    let standardTicketsForTheMovie = 0;
    let kidsTicketsForTheMovie = 0;
    let allStudentTickets = 0;
    let allStandardTickets = 0;
    let allKidsTickets = 0;

    movieName = array[0];

    for (let index = 1; index < array.length; index++) {
        const element = array[index];
        //Checks if the element is number and assigns its value on allTicketsAvaiable
        if (!isNaN(element)) {
            allTicketsAvaiable = element;
            //break;
        }

        if ((isNaN(element) && element !== "kid" && element !== "student" && element !== "standard" && index !== 0) && element !== 'End' && element !== "Finish") {
            movieName = element;
            //break;
        }

        // Switch case to calculate the number of every ticket and for every category of tickets
        switch (element) {
            case "student":
                studentTicketsForTheMovie++;
                allStudentTickets++;
                break;
            case "standard":
                standardTicketsForTheMovie++;
                allStandardTickets++;
                break;
            case "kid":
                kidsTicketsForTheMovie++;
                allKidsTickets++;
                break;
            default:
                break;
        }

        
        if ((isNaN(element) && element !== "kid" && element !== "student" && element !== "standard" && index !== 0) && element === 'End' || element === "Finish") {
            let occupationPercentage = (((standardTicketsForTheMovie + studentTicketsForTheMovie + kidsTicketsForTheMovie) / allTicketsAvaiable) * 100).toFixed(2);
           // console.log("standard " + standardTicketsForTheMovie);
           // console.log("student " + studentTicketsForTheMovie);
           // console.log("kids " + kidsTicketsForTheMovie);
           // console.log("all " + allTicketsAvaiable);
            console.log(`${movieName} - ${occupationPercentage}% full.`);

            standardTicketsForTheMovie = 0;
            studentTicketsForTheMovie = 0;
            kidsTicketsForTheMovie = 0;
            allTicketsAvaiable = 0;
        }
    }
    //console.log(allKidsTickets);
    let ticketsFromAllMovies = allKidsTickets + allStandardTickets + allStudentTickets;
    let percentageOfKidsTickets = ((allKidsTickets / ticketsFromAllMovies) * 100).toFixed(2);
    let percentageOfStudentTickets = ((allStudentTickets / ticketsFromAllMovies) * 100).toFixed(2);
    let percentageOfStandardTickets = ((allStandardTickets / ticketsFromAllMovies) * 100).toFixed(2);

    console.log(`Total tickets: ${ticketsFromAllMovies}`)
    console.log(`${percentageOfStudentTickets}% student tickets.`);
    console.log(`${percentageOfStandardTickets}% standard tickets.`);
    console.log(`${percentageOfKidsTickets}% kids tickets.`);

}
ticketsForCinema(["The Matrix",

    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])

