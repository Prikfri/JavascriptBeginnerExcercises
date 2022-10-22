function solve(names) {
    let pattern = /\b([A-Z][a-z]+\ [A-Z][a-z]+)\b/g;
    let validNames = [];
    while ((validName = pattern.exec(names)) !== null) {
        validNames.push(validName[0]);
    }
    console.log(validNames.join(' '));
}
//solve("Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan	Ivanov")


function phoneNumber(numberString) {
    let pattern = /((^|(?<= ))([+]359)\ 2\ ([0-9]{3})\ ([0-9]{4})\b)|((^|(?<= ))([+]359)-2-([0-9]{3})-([0-9]{4})\b)/g;
    let validNumbers = [];
    while ((validNumber = pattern.exec(numberString)) !== null){
        validNumbers.push(validNumber[0])
    }
    console.log(validNumbers.join(', '));
}
//phoneNumber("+359 2 222 2222, +359 2  222 2222, +359 2 22652 22222, +359 2 222 2222, +359-2-222-2222, +359 2-2222-2222,")



function solve(dates) {
    let pattern = /\b(?<day>\d{2})([-.\/])(?<month>[A-Z][a-z]{2})\2()(?<year>\d{4})\b/g;
    while ((validDate = pattern.exec(dates)) !== null) {
        let day = validDate.groups['day'];
        let month = validDate.groups['month'];
        let year = validDate.groups['year'];
        console.log(`Day: ${day}, Month: ${month}, Year: ${year}`)
    }
}
solve("13/Jul/1928, 10-Nov-1934, 01/Jan-1951, 25.Dec.1937, 23/09/1973, 1/Feb/2016")