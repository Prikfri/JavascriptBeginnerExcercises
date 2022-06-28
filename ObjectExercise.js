function personInfo(firstName, lastName, age) {
    let personInfoObject = {
        firstName,
        lastName,
        age
    };
    for (const key in personInfoObject) {
        console.log(`${key}: ${personInfoObject[key]}`)
    }
}
//personInfo("John", "Johnson", "12")


function city(name, area, population, country, postCode) {
    let objectCity = {
        name,
        area,
        population,
        country,
        postCode
    };
    for (const key in objectCity) {
        console.log(`${key} -> ${objectCity[key]}`);
    }
}
//city("Sofia"," 492", "1238438", "Bulgaria", "1000")



function convertToObject(jsonString) {
    let person = JSON.parse(jsonString);
    for (const key in person) {
        console.log(`${key}: ${person[key]}`);

    }
}
//convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')


function convertToJSON(name, lastName, hairColor) {
    let personCharacteristics = {
        name,
        lastName,
        hairColor
    }
    let toJSON = JSON.stringify(personCharacteristics)
    console.log(toJSON);
}
//convertToJSON('George','Jones','Brown')



function cat(array) {

    let cats = [];

    class Cat {
        constructor(name, age) {

            this.name = name;
            this.age = age;
        }

        meow() {
            console.log(`${this.name}, age ${Number(this.age)} says Meow`);
        }
    }

    //let cat = new Cat("asd", 12);
    //cat.meow();


    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let catData = array[index].split(' ');
        let name, age;
        [name, age] = [catData[0], catData[1]];
        let currentCat = new Cat(name, age);
        cats.push(currentCat);
        currentCat.meow();

    }
    //console.log(cats);


}
//cat(['Mellow 2', 'Tom 5']);



function songs(array) {
    songsArray = [];

    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }

    let numberOfSongs = array[0];

    for (let index = 1; index <= numberOfSongs; index++) {
        const element = array[index].split('_');
        //console.log(index)
        let [typeList, name, time] = element;

        let currentSong = new Song(typeList, name, time);
        songsArray.push(currentSong);
        //console.log(songsArray);
    }

    for (const iterator of songsArray) {

        if (array[array.length - 1] === "all") {
            console.log(iterator.name);
        }
        else if (array[array.length - 1] === iterator.typeList) {
            console.log(iterator.name)
        }
    }
}
//songs([3,'favourite_DownTown_3:14','favourite_Kiss_4:16','favourite_Smooth Criminal_4:01','favourite'])


function employees(array) {
    for (const iterator of array) {

        personalNumber = iterator.length;
        console.log(`Name: ${iterator} -- Personal Number: ${personalNumber}`)
    }
}

//employees(['Silas Butler','Adnaan Buckley','Juan Peterson','Brendan Villarreal']);


function towns(array) {

    class CityLocation {
        constructor(name, latitude, longitude) {
            this.town = name;
            this.latitude = latitude;
            this.longitude = longitude;
        }
    }

    for (let index = 0; index < array.length; index++) {
        const element = array[index].split(' |');

        let name = element[0];
        let latitude = (Number(element[1])).toFixed(2);
        let longitude = (Number(element[2])).toFixed(2)
        let currentCity = new CityLocation(name, latitude, longitude)
        console.log(`{ town: '${currentCity.town}', latitude: '${currentCity.latitude}', longitude: '${currentCity.longitude}' }`);
    }
}
//towns(['Sofia | 42.696552 | 23.32601','Beijing | 39.913818 | 116.363625'])




function storeProvision(array1, array2) {
    let currentStoreProvisions = {};
    for (let index = 0; index < array1.length; index += 2) {
        const key = array1[index];
        currentStoreProvisions[key] = Number(array1[index + 1])
    }

    for (let j = 0; j < array2.length; j += 2) {
        const key = array2[j];
        if (!(key  in currentStoreProvisions)) {
            currentStoreProvisions[key] = 0;
        }
        currentStoreProvisions[key] += Number(array2[j + 1])
    }
    //currentStoreProvisions['eggplant'] = 8;
    //console.log(currentStoreProvisions)

    for (const key in currentStoreProvisions) {
        if (Object.hasOwnProperty.call(currentStoreProvisions, key)) {
            const value = currentStoreProvisions[key];
            console.log(`${key} -> ${value}`)
        }
    }
}
storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
)