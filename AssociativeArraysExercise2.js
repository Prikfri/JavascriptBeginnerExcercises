function wordsTracker(arrayOfStrings) {

    let mapOfWords = new Map();
    let wordsToTrack = arrayOfStrings[0].split(" ");

    const quantity = 0;
    for (const word of wordsToTrack) {
        mapOfWords.set(word, quantity)
    }
    for (let index = 1; index < arrayOfStrings.length; index++) {
        const currWord = arrayOfStrings[index];

        if (mapOfWords.has(currWord)) {
            let wordQuantity = mapOfWords.get(currWord)
            mapOfWords.set(currWord, ++wordQuantity);

        }
    }
    sortedMapOfwords = new Map([...mapOfWords].sort((a, b) => b[1] - a[1]))

    for (const kvp of sortedMapOfwords) {
        console.log(`${kvp[0]} - ${kvp[1]}`)
    }
}
/*wordsTracker([
    'sentence this',
    'In', 'this', 'sentence', 'you',
    'have', 'to', 'count', 'the', 'occurrences',
    'of', 'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
])*/


function oddOcurences(array) {
    let map = new Map();
    let arrayWithSplitWords = array.split(" ");
    const quantity = 1;

    for (const word of arrayWithSplitWords) {
        lowerCaseWord = word.toLowerCase();

        if (!map.has(lowerCaseWord)) {
            map.set(lowerCaseWord.toLowerCase(), +quantity)

        } else {
            let wordQuantity = map.get(lowerCaseWord);
            map.set(lowerCaseWord, ++wordQuantity);
        }
    }
    let s = "";
    for (const kvp of map) {
        if (kvp[1] % 2 !== 0) {
            s += kvp[0] + " ";
        }
    }
    console.log(s);
}
//oddOcurences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')



function parkingLot(array) {
    let map = new Map();
    for (const string of array) {
        let occupationAndNumber = string.split(", ");
        let occupation = occupationAndNumber[0];
        let carNumber = occupationAndNumber[1];
        if (!map.has(occupation)) {
            map.set(occupation, []);
        }
        let arrayForCarNumbers = map.get(occupation)
        arrayForCarNumbers.push(carNumber);

    }
    let arrayWithCarsIN = map.get("IN");
    let arrayWithCarsOUT = map.get("OUT");

    if (!map.get("OUT") == false) {
        for (const carNumber of arrayWithCarsOUT) {
            if (arrayWithCarsIN.indexOf(carNumber) >= 0) {
                arrayWithCarsIN.splice(arrayWithCarsIN.indexOf(carNumber), 1);
            }
        }
    }
    arrayWithCarsIN.sort();
    if (arrayWithCarsIN.length === 0) {
        console.log("Parking Lot is Empty");
    } else {
        for (const car of arrayWithCarsIN) {
            console.log(car);
        }
    }
}
//parkingLot(['IN, CA2844AA','OUT, CA2844AA'])


function partyTime(array) {

    let map = new Map();
    let counterForAllGuests = 0;
    let counterForAttendingGuests = 0;
    for (const guestTag of array) {
        if (guestTag == "PARTY") {
            continue;
        }
        if (!map.has(guestTag)) {
            counterForAllGuests++;
            if (guestTag.match(/^\d/)) {
                map.set(guestTag, 0);
            } else {
                map.set(guestTag, 1);
            }
        } else {
            counterForAttendingGuests++;
            map.delete(guestTag)
        }
    }
    console.log(counterForAllGuests - counterForAttendingGuests);
    const sortedMap = new Map([...map.entries()].sort((a, b) => a[1] - b[1]));

    for (const guest of sortedMap) {
        console.log(guest[0]);
    }
}
//partyTime(['9NoBUajQ','Ce8vwPmE','SVQXQCbc','tSzE5t0p','tASzE5t0p','7IK9Yo0h','PARTY','9NoBUajQ','Ce8vwPmE','SVQXQCbc'])


function cardGame(array) {
    let cardType = {
        "S": 4,
        "H": 3,
        "D": 2,
        "C": 1,
    }
    let cardPower = {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "J": 11,
        "Q": 12,
        "K": 13,
        "A": 14
    }
}
//???????????????????????


function companyUsers(array) {
    array.sort();
    console.log(array);
    let uniqueArray = [...new Set(array)];
    let map = new Map();
    for (const string of uniqueArray) {
        let companyNameAndUserArray = string.split(" -> ");

        if (!map.has(companyNameAndUserArray[0]))
            map.set(companyNameAndUserArray[0], []);

        map.set(
            companyNameAndUserArray[0],
            [...map.get(companyNameAndUserArray[0]), companyNameAndUserArray[1]],
        );

    }

    for (const company of map) {
        console.log(company[0]);
        for (const iterator of company[1]) {
            console.log(`-- ${iterator}`);
        }
    }
}
/*companyUsers([
    'SoftUni -> BB12345',
    'SoftUni -> bB12345',
    'SoftUni -> BB12345',
    'SoftUni -> AA12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]
)*/


function minerTask(arrayOfStrings) {

    let mapOfWords = new Map();

    const quantity = 0;
    for (let index = 0; index < arrayOfStrings.length; index += 2) {
        const key = arrayOfStrings[index];
        const value = Number(arrayOfStrings[index + 1]);
        if (mapOfWords.has(key)) {
            let currValue = mapOfWords.get(key);
            let newQuantity = currValue += value;
            mapOfWords.set(key, newQuantity);
            continue;
        }
        mapOfWords.set(key, value)


    }
    for (const kvp of mapOfWords) {
        console.log(`${kvp[0]} -> ${kvp[1]}`)
    }
}
/*minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'])*/


function travelTime(array) {

    let map = new Map();
    array.sort();
    let currentCountry = "";
    let countryTrips = "";
    for (const string of array) {

        let arrayWithInputData = string.split(" > ");

        if (countryTrips !== arrayWithInputData[0]) {
            countryTrips = "";
            countryTrips += (arrayWithInputData[0] + " -> ");
        }
        if (arrayWithInputData[0] !== currentCountry) {
            //console.log(arrayWithInputData[0] + " -> ");
        }
        if (!map.has(arrayWithInputData[1])) {
            map.set(arrayWithInputData[1], arrayWithInputData[2]);
            let destinationPrice = map.get(arrayWithInputData[1]);
            countryTrips += (` ${arrayWithInputData[1]} -> ${arrayWithInputData[2]}`)
        }
       console.log(countryTrips);
       
    }
    //console.log(map)
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
]
)