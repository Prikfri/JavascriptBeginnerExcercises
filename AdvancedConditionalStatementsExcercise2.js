function cinema(arrayOfParameters) {
    let typeOfProjection = arrayOfParameters[0];
    let rows = arrayOfParameters[1];
    let columns = arrayOfParameters[2];
    let profitFromProjection = rows * columns
    if (typeOfProjection === "Premiere") {
        profitFromProjection = (profitFromProjection *= 12).toFixed(2);
    } else if (typeOfProjection === "Normal") {
        profitFromProjection = (profitFromProjection *= 7.5).toFixed(2);
    } else if (typeOfProjection === "Discount") {
        profitFromProjection = (profitFromProjection *= 5).toFixed(2);
    } else {
        console.log("We do not have that type of projection.")
    }
    console.log(profitFromProjection)
}
//cinema(["Normal","21","13"])


function summerClothing(arrayOfParameters) {
    let degrees = parseInt(arrayOfParameters[0]);
    let partOfDay = arrayOfParameters[1];
    let outfit;
    let shoes;
    if (degrees >= 10 && degrees <= 18) {
        if (partOfDay == "Morning") {
            outfit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (partOfDay == "Afternoon") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (partOfDay == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else if (degrees > 18 && degrees <= 24) {
        if (partOfDay == "Morning") {
            outfit = "Shirt";
            shoes = "Moccasins";
        } else if (partOfDay == "Afternoon") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (partOfDay == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    } else if (degrees >= 25) {
        if (partOfDay == "Morning") {
            outfit = "T-Shirt";
            shoes = "Sandals";
        } else if (partOfDay == "Afternoon") {
            outfit = "Swim Suit";
            shoes = "Barefoot";
        } else if (partOfDay == "Evening") {
            outfit = "Shirt";
            shoes = "Moccasins";
        }
    }
    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)
}
//summerClothing(["16","Morning"])

function flowersForNewHome(arrayOfParameters) {
    let typeOfFlower = arrayOfParameters[0];
    let numberOfFlowers = Number(arrayOfParameters[1]);
    let budget = Number(arrayOfParameters[2]);
    let flowers = {
        "Roses": 5,
        "Dahlias": 3.8,
        "Tulips": 2.8,
        "Narcissus": 3,
        "Gladiolus": 2.50
    }
    let necessaryMoney = flowers[typeOfFlower] * numberOfFlowers;

    if (typeOfFlower == "Roses" && numberOfFlowers > 80) {
        necessaryMoney *= 0.9;
    } else if (typeOfFlower == "Dahlias" && numberOfFlowers > 90) {
        necessaryMoney *= 0.85;
    } else if (typeOfFlower == "Tulips" && numberOfFlowers > 80) {
        necessaryMoney *= 0.85;
    } else if (typeOfFlower == "Narcissus" && numberOfFlowers < 120) {
        necessaryMoney *= 1.15;
    } else if (typeOfFlower == "Gladiolus" && numberOfFlowers < 80) {
        necessaryMoney *= 1.20;
    }

    budget = (budget - necessaryMoney).toFixed(2);
    if (budget >= 0) {
        console.log(`Hey, you have a great garden with ${numberOfFlowers} ${typeOfFlower} and ${budget} leva left.`)
    } else if (budget < 0) {
        budget = Math.abs(budget).toFixed(2);
        console.log(`Not enough money, you need ${budget} leva more.`)
    }
}
//flowersForNewHome(["Narcissus","1000","2500"]);


function MathOperations(arrayOfParameters) {
    let operation;
    let number1 = Number(arrayOfParameters[0]);
    let number2 = Number(arrayOfParameters[1]);
    let operator = arrayOfParameters[2];

    switch (operator) {
        case '+': operation = number1 + number2; break;
        case '-': operation = number1 - number2; break;
        case '*':
        case '.': operation = number1 * number2; break;
        case '/': operation = (number1 / number2).toFixed(2); break;
        case '%': operation = number1 % number2; break;
    }
    let evenOrOdd;
    if (operator == "+" || operator == "-" || operator == "*") {
        if (operation % 2 == 0) {
            evenOrOdd = "even"
        } else {
            evenOrOdd = "odd"
        }
        console.log(`${number1} ${operator} ${number2} = ${operation} - ${evenOrOdd}`)
    } else if (number2 == "0") {
        console.log(`Cannot divide ${number1} by zero`)
    } else if (operator == "/") {
        console.log(`${number1} ${operator} ${number2} = ${operation}`);
    } else if (operator == "%") {
        console.log(`${number1} ${operator} ${number2} = ${operation}`)
    }

}
//MathOperations([10, 0, "/"])