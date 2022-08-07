function phoneBook(arrayOfStrings) {

    let dict = new Object();

    for (const string of arrayOfStrings) {
        let arrayWithInfo = string.split(" ");
        dict[arrayWithInfo[0]] = arrayWithInfo[1];
        //Adds property to object dict with key index 0 and value index 1
    }

    for (const person in dict) {
        if (Object.hasOwnProperty.call(dict, person)) {
            const personsNumber = dict[person];
            console.log(`${person} -> ${personsNumber}`);
        }
    }
}
/*phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);*/


function meetingSchedule(arrayOfStrings) {
    let dictWithMeetingInfo = new Object();

    for (const string of arrayOfStrings) {
        let arrayWithMeetingInfo = string.split(" ");
        if (arrayWithMeetingInfo[0] in dictWithMeetingInfo) {
            console.log(`Conflict on ${arrayWithMeetingInfo[0]}!`)
            continue;
        }
        else console.log(`Scheduled for ${arrayWithMeetingInfo[0]}`)

        dictWithMeetingInfo[arrayWithMeetingInfo[0]] = arrayWithMeetingInfo[1];

    }
    for (const scheduledDay in dictWithMeetingInfo) {
        if (Object.hasOwnProperty.call(dictWithMeetingInfo, scheduledDay)) {
            const person = dictWithMeetingInfo[scheduledDay];
            console.log(`${scheduledDay} -> ${person}`);
        }
    }
}

/*meetingSchedule(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
)*/


function addressBook(arrayOfStrings) {

    let addressDictionary = new Object();

    for (const string of arrayOfStrings) {
        let arrayWithInfo = string.split(":");
        addressDictionary[arrayWithInfo[0]] = arrayWithInfo[1];
    }

    let sortedAddressDictionary = Object.keys(addressDictionary)
        .sort()     //
        .reduce((acc, key) => ({
            ...acc, [key]: addressDictionary[key]
        }), {})

    for (const person in sortedAddressDictionary) {
        if (Object.hasOwnProperty.call(sortedAddressDictionary, person)) {
            const personsNumber = sortedAddressDictionary[person];
            console.log(`${person} -> ${personsNumber}`);
        }
    }
}
/*addressBook(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
)*/



function storage(array) {
    let map = new Map();

    for (const string of array) {
        let tokens = string.split(" ");
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if (!map.has(product)) {
            map.set(product, +quantity)
        } else {
            let currQuantity = map.get(product);
            let newQuantity = currQuantity += quantity;
            map.set(product, newQuantity);
        }
    }
    for (const kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}
/*storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40']
)*/



function schoolGrades(arrayOfStrings) {

    let gradesBookDictionary = new Map();

    for (const string of arrayOfStrings) {
        let arrayWithNameAndGrades = string.split(" ");
        let person = arrayWithNameAndGrades[0];
        let grades = 0;

        //Iterating through the array with person`s name and grades to get the sum of grades a person has
        for (let index = 1; index < arrayWithNameAndGrades.length; index++) {
            const element = Number(arrayWithNameAndGrades[index]);
            grades += element;
        }
        //Averaging the grades
        grades /= (arrayWithNameAndGrades.length - 1);

        //Checking if the person does NOT exist in the gradesbook and adding it to the dictionary if he does not.
        if (!gradesBookDictionary.has(person)) {
            gradesBookDictionary.set(person, +grades)
        } else {
            //If the person exists assign his current averaged grade to currGrades
            let currGrades = gradesBookDictionary.get(person);
            //Get the averaged sum of both old and new grades
            let newGrades = ((currGrades += grades) / 2);
            //Assign the new averaged grades to the person
            gradesBookDictionary.set(person, newGrades);
        }
    }
    //Sorting the map by keys using .sort() method
    sortedGradesbookDictionary = new Map([...gradesBookDictionary].sort((a, b) => String(a[0]).localeCompare(b[0])))

    for (const person of sortedGradesbookDictionary) {
        console.log(`${person[0]}: ${(person[1]).toFixed(2)}`);
    }
}

/*schoolGrades(['Steven 3 5 6 4',
'George 4 6',
'Tammy 2 5 3',
'Steven 6 3']
)*/


function wordOccurences(params) {

    let map = new Map();

    for (const string of array) {
        //let tokens = string.split(" ,");
        let product = tokens[0];
        let quantity = Number(tokens[1]);

        if (!map.has(product)) {
            map.set(product, +quantity)
        } else {
            let currQuantity = map.get(product);
            let newQuantity = currQuantity += quantity;
            map.set(product, newQuantity);
        }
    }
    for (const kvp of map) {
        console.log(`${kvp[0]} -> ${kvp[1]}`);
    }
}
