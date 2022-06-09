function dayOfTheWeek(number) {

    switch (parseInt (number)) {
        case 1:
            console.log("Monday");
            break;
        case 2:
            console.log("Tuesday");
            break;
        case 3:
            console.log("Wednesday");
            break;
        case 4:
            console.log("Thursday");
            break;
        case 5:
            console.log("Friday");
            break;
        case 6:
            console.log("Saturday");
            break;
        case 7:
            console.log("Sunday");
            break;

        default:
            console.log("Error");

            break;
    }
}
//dayOfTheWeek(1)


function workingDayOrWeekend(day) {
    switch (day[0]) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            console.log("Working day");
            break;

        case 'Saturday':
        case 'Sunday':
            console.log("Weekend");
            break;

        default:
            console.log("Error");
            break;
    }
}
//workingDayOrWeekend('Tuesday');


function animalType(animal) {
    switch (animal[0]) {
        case "dog":
            console.log("mammal");
            break;
        case "crocodile":
        case "tortoise":
        case "snake":
            console.log("reptile");
            break
        default:
            console.log("unknown");

            break;
    }
}
//animalType(dog);


function addressingPeople(parameters) {
    let age = parseInt(parameters[0]);
    let gender = parameters[1];
    if (gender === "m") {
        if (age < 16) {
            console.log("Master");
        } else
            console.log("Mr.");

    } else if (gender === "f") {
        if (age < 16) {
            console.log("Miss");
        } else
            console.log("Ms.");
    } else
        console.log("There is no such gender.");
}
//addressingPeople([18, "m"]);


function hoodShop(arrayOfParameters) {

    let product = arrayOfParameters[0];
    let town = arrayOfParameters[1];
    let quantity = parseFloat(arrayOfParameters[2]);
    let result = 0;

    if (town === "Sofia") {
        let productsInSofia = {
            "coffee": 0.50,
            "water": 0.80,
            "beer": 1.20,
            "sweets": 1.45,
            "peanuts": 1.60
        }
        result += productsInSofia[product];

    } else if (town === 'Plovdiv') {
        let productsInPlovdiv = {
            "coffee": 0.40,
            "water": 0.70,
            "beer": 1.15,
            "sweets": 1.30,
            "peanuts": 1.50
        }
        result += productsInPlovdiv[product];
    } else if (town === 'Varna') {
        let productsInVarna = {
            "coffee": 0.45,
            "water": 0.70,
            "beer": 1.10,
            "sweets": 1.35,
            "peanuts": 1.55
        }
        result += productsInVarna[product];

    }
    result *= quantity;
    console.log(result);
}
//hoodShop(["sweets","Sofia", "2.23"])


function numberInInterval(number) {
    if (number[0] >= -100 && number[0] <= 100 && number[0] != 0) {
        console.log("Yes");
    } else
        console.log("No");
}
//numberInInterval([10]);


function workTime(arrayOfParameters) {
    let hour = parseInt(arrayOfParameters[0]);
    let day = arrayOfParameters[1];
    let dayOfWeek = function (day) {
        return ["Monday", "Tuesday", "Wednesday", "Thursday",
            "Friday", "Saturday", "Sunday"].indexOf(day);

    }
    if (hour >= 10 && hour <= 18 &&
        dayOfWeek(day) >= 0 && dayOfWeek(day) <= 5) {
        console.log("open");

    } else if (hour < 10 || hour > 18 ||
        dayOfWeek(day) == 6) {

        console.log("closed");
    }


}
//workTime(["19","Friday"])


function ticketForCinema(dayOfWeek) {
    let day = dayOfWeek[0];

    switch (day) {
        case "Monday":
        case "Tuesday":
        case "Friday":
            console.log("12");
            break;
        case "Wednesday":
        case "Thursday":
            console.log("14");
            break;
        case "Saturday":
        case "Sunday":
            console.log("16");
            break;
        default:
            console.log("That is not day of the week");
            break;
    }
}
//ticketForCinema(["Monday"]);


function fruitOrVegetable(params) {
    let frOrVeg = params[0];
    let fruits = ["banana", "apple", "kiwi", "cherry", "lemon", "grapes"];
    let vegetables = ["tomato", "cucumber", "pepper", "carrot"];
    if (fruits.includes(frOrVeg)) {
        console.log("fruit");

    } else if (vegetables.includes(frOrVeg)) {
        console.log("vegetable");
    } else {
        console.log("unknown");
    }
}
//fruitOrVegetable(["tomato"]);


function invalidNumber(params) {
    let validOrInvalidNumber = parseInt(params[0]);
    if (validOrInvalidNumber >= 100 && validOrInvalidNumber <= 200 || validOrInvalidNumber=="0") {
    } else {
        console.log("invalid");
    }
}
//invalidNumber(["0"]);