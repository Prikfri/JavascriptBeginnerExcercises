function wordReader(arrayOfWords) {
    for (let index = 0; index < arrayOfWords.length; index++) {
        const element = arrayOfWords[index];
        if (element == "Stop") {
            break;
        }
        console.log(arrayOfWords[index]);

    }
}
//wordReader(["Nakov","SoftUni","Sofia","Bulgaria","SomeText","Stop","AfterStop","Europe","HelloWorld"])


function password(arrayOfNameAndPass) {
    let username = arrayOfNameAndPass[0];
    let password = arrayOfNameAndPass[1];
    for (let index = 2; index < arrayOfNameAndPass.length; index++) {
        const element = arrayOfNameAndPass[index];
        if (element == password) {
            console.log(`Welcome ${username}!`)
            break;


        }
    }
}
//password(["Nakov","1234","Pass","1324","12434"])


function sumOfNumbers(arrayOfNumbers) {
    let firstNumber = arrayOfNumbers[0];
    let sum = 0;

    for (let index = 1; index < arrayOfNumbers.length; index++) {
        const element = Number(arrayOfNumbers[index]);
        sum += element;
        if (sum >= firstNumber) {
            console.log(sum)
            break;
        }
    }
}
//sumOfNumbers(["100","10","20","30","45","30","40"])


function sequense2Kplus1(array) {
    let a = 1;
    let n = Number(array[0]);
    let nextNumber = 1;
    // console.log(a);
    while (nextNumber <= n) {
       console.log(nextNumber);
       nextNumber = (a * 2 + 1);
       a = nextNumber;
    }

}
//sequense2Kplus1(["7"]);


