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
//convertToJSON('George', 'Jones', 'Brown')



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

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        let catData = array[index].split(' ');
        let name, age;
        [name, age] = [catData[0], catData[1]];
        let currentCat = new Cat(name, age);
        cats.push(currentCat);
        currentCat.meow();
    }
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

    for (const song of songsArray) {

        if (array[array.length - 1] === "all") {
            console.log(song.name);
        }
        else if (array[array.length - 1] === song.typeList) {
            console.log(song.name)
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
        //
        currentStoreProvisions[key] = Number(array1[index + 1])
    }

    for (let j = 0; j < array2.length; j += 2) {
        const key = array2[j];
        if (!(key in currentStoreProvisions)) {
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
//storeProvision(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
//['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'])



function movies(array) {
    class MovieInfo {
        constructor(nameParam) {
            this.name = nameParam;
        }
    }

    movieInfoArray = [];
    let currentMovie;

    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        if (element.includes("addMovie")) {
            let movieTitle = element.split("addMovie ").pop();
            currentMovie = new MovieInfo(movieTitle);
            movieInfoArray.push(currentMovie)

        } else if (element.includes("directedBy")) {
            let movieNameAndDirector = element.split(" directedBy ");
            let movieInfo = movieInfoArray.find(mi => mi.name === movieNameAndDirector[0]);
            if (movieInfo) {
                movieInfo.director = movieNameAndDirector[1];
            }
        } else if (element.includes("onDate")) {
            let movieNameAndDate = element.split(" onDate ");

            let movieInfo = movieInfoArray.find(mi => mi.name === movieNameAndDate[0]);
            if (movieInfo) {
                movieInfo.date = movieNameAndDate[1];
            }
        }
    }


    for (const movie of movieInfoArray) {
        if (movie.name && movie.date && movie.director) {
            let asd = JSON.stringify(movie)
            console.log(asd)
        }
    }
}

//movies(["addMovie The Avengers","addMovie Superman","The Avengers directedBy Anthony Russo",
//"The Avengers onDate 30.07.2010","Captain America onDate 30.07.2010","Captain America directedBy Joe Russo"])



function inventory(array) {

    heroesArray = [];
    class Hero {
        constructor(heroName, heroLevel, heroItems) {
            this.name = heroName;
            this.level = heroLevel;
            this.items = heroItems;
        }
    }
    for (let index = 0; index < array.length; index++) {
        const element = array[index].split(" / ");
        let heroName = element[0];
        let heroLevel = Number(element[1]);
        let heroItems = element[2];
        let currentHero = new Hero(heroName, heroLevel, heroItems);
        heroesArray.push(currentHero);
    }
    function compare_herolevel(a, b) {
        if (a.level < b.level) {
            return -1;
        }
        if (a.level > b.level) {
            return 1;
        }
        return 0;
    }
    heroesArray = heroesArray.sort(compare_herolevel)

    for (const hero of heroesArray) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}

//inventory(['Batman / 2 / Banana, Gun','Superman / 1 / Sword','Poppy / 28 / Sentinel, Antara'])



function dictionary(arrayOfJSONStrings) {
    let wordAndDefinition = {};
    let wordsAndDefinitionsInMerged = {};
    let dictionaryArray = []
    for (let index = 0; index < arrayOfJSONStrings.length; index++) {
        const element = arrayOfJSONStrings[index];
        wordAndDefinition = JSON.parse(element);
        dictionaryArray.push(wordAndDefinition);

        for (const key in wordAndDefinition) {
            if (Object.hasOwnProperty.call(wordAndDefinition, key)) {
                const value = wordAndDefinition[key];
                wordsAndDefinitionsInMerged[key] = value;
            }
        }
    }
    const sorted = Object.keys(wordsAndDefinitionsInMerged)
        .sort()
        .reduce((accumulator, key) => {
            accumulator[key] = wordsAndDefinitionsInMerged[key];
            return accumulator;
        }, {});
    for (const key in sorted) {
        if (Object.hasOwnProperty.call(sorted, key)) {
            const value = sorted[key];
            console.log(`Term: ${key} => Definition: ${value}`);
        }
    }
}
//dictionary(['{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
//])


function classVehicle(params) {
    class Vehicle {
        constructor(type, model, parts, fuel,) {
            this.type = type;
            this.model = model;
            this.parts = parts;
            parts.quality = parts.engine * parts.power;
            this.fuel = fuel;
            this.vehicle
        }
        drive(fuelLoss) {
            this.fuel -= fuelLoss;
        }
    }
    let parts = { engine: 6, power: 100 };
    let vehicle = new Vehicle('a', 'b', parts, 200);
    vehicle.drive(100);
    console.log(vehicle.fuel);
    console.log(vehicle.parts.quality);
}
//classVehicle()

function classStorage() {
    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = 0;
            this.quantity = 0;
        }

        addProduct(currentProduct) {
            this.storage.push(currentProduct);
            this.capacity -= currentProduct.quantity;
            this.totalCost += currentProduct.price * currentProduct.quantity;

        }

        getProducts() {
            let productJSON = "";
            for (let index = 0; index < this.storage.length; index++) {
                const element = this.storage[index];
                productJSON += JSON.stringify(element)
                if (index < this.storage.length - 1) {
                    productJSON += "\n";
                }
            }
            return productJSON;
        }
    }

    let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
    let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
    let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    console.log(storage.getProducts());
    console.log(storage.capacity);
    console.log(storage.totalCost);
}
//classStorage();



function catalogue(arrayOfCatalogueProducts) {
    arrayOfCatalogueProducts.sort();
    let currentFirstLetter = "";
    for (let index = 0; index < arrayOfCatalogueProducts.length; index++) {
        const product = arrayOfCatalogueProducts[index];
        if (product[0] !== currentFirstLetter) {
            console.log(product[0]);
        }
        currentFirstLetter = product[0];

        console.log("  " + product.replace(' :', ':'));
    }

}
/*catalogue([
    'Appricot : 20.4',
    'A1ppricot : 20.4',

    'Zppricot : 20.4',
    'Wpricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)*/

function catalogueWithObjects(arrayOfCatalogueProducts) {


    arrayOfCatalogueProducts.sort(function (a, b) {
        return a.toLowerCase().localeCompare(b.toLowerCase());
    });
    
    class Catalogue {

    }
    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }

    let catalogue = new Catalogue();

    for (let index = 0; index < arrayOfCatalogueProducts.length; index++) {
        const element = arrayOfCatalogueProducts[index];
        let arrayProduct = element.split(' : ');
        let currentProduct = new Product(arrayProduct[0], Number(arrayProduct[1]));
        let headingLetter = currentProduct.name[0];
        if (!(headingLetter in catalogue)) {
            catalogue[headingLetter] = [];
        }
        catalogue[headingLetter].push(currentProduct);

    }

    for (const key in catalogue) {
        if (Object.hasOwnProperty.call(catalogue, key)) {
            const arrayOfProducts = catalogue[key];
            console.log(key);
            for (const product of arrayOfProducts) {
                console.log(`  ${product.name}: ${product.price}`)
            }
        }
    }
}
catalogueWithObjects([
    'Appricot : 20.4',
    'ApPrIcOt : 20.4',
    'A1ppricot : 20.4',
    'Zppricot : 20.4',
    'Wpricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'boiler : 300',
    'apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)