function commonNumbers(firstArray,secondArray,thirdArray) {
    let uniqueNumbersArray = new Array;
    let commonNumbersArray = new Array;
    for (let index = 0; index < firstArray.length; index++) {
        if (secondArray.includes(firstArray[index]) && thirdArray.includes(firstArray[index])) {
            commonNumbersArray.push(firstArray[index]);
        } else {
            uniqueNumbersArray.push(firstArray[index])
        }
    } 
    for (let index = 0; index < secondArray.length; index++) {
        if (!firstArray.includes(secondArray[index]) || !thirdArray.includes(secondArray[index])) {
            uniqueNumbersArray.push(secondArray[index]);
        }
    } 
    for (let index = 0; index < thirdArray.length; index++) {
        if (!firstArray.includes(thirdArray[index]) || !secondArray.includes(thirdArray[index])) {
           uniqueNumbersArray.push(thirdArray[index]);
        }
    }

    let averageOfUniqueNumbers=0;

    for (let index = 0; index < uniqueNumbersArray.length; index++) {
           averageOfUniqueNumbers+= uniqueNumbersArray[index];
    }
    

    console.log("Array of unique numbers: " + uniqueNumbersArray.sort(function(a, b) { return a > b ? 1 : -1}));
    console.log("Average of unique numbers:" , averageOfUniqueNumbers/uniqueNumbersArray.length);
    console.log("Array of common numbers: " + commonNumbersArray.sort(function(a, b) { return a > b ? 1 : -1}));
    let median = 0;
    let middle = 0;
    if (uniqueNumbersArray.length%2===0) {
        middle = uniqueNumbersArray.length/2;
        median = (uniqueNumbersArray[middle]+uniqueNumbersArray[middle-1])  /2; 
    }else{
        middle = Math.floor(uniqueNumbersArray.length/2);
        median = uniqueNumbersArray[middle]
    }

    console.log("Median = " + median);

}
commonNumbers([5, 6, 50, 10, 1, 2], [5, 4, 8, 50, 2, 10], [5, 2, 50])
//commonNumbers([1,2,3], [1,2,3,4,5,6], [1,2,3,7,8])