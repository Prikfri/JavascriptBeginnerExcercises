function daylyCalorieIntake(arrayOfCharacteristics) {
    let sex = arrayOfCharacteristics[3];
    let height = Number(arrayOfCharacteristics[1]) * 2.54;
    let weight = Number(arrayOfCharacteristics[0]) / 2.2;
    let age = Number(arrayOfCharacteristics[2]);
    let numberOfWorkouts = Number(arrayOfCharacteristics[4]);

    let activeFactor;

    if (numberOfWorkouts < 1) {
        activeFactor = 1.2;
    } else if (numberOfWorkouts >= 1 && numberOfWorkouts <= 3) {
        activeFactor = 1.375;
    } else if (numberOfWorkouts >= 4 && numberOfWorkouts <= 6) {
        activeFactor = 1.55;
    } else if (numberOfWorkouts >= 7 && numberOfWorkouts <= 9) {
        activeFactor = 1.725;
    } else {
        activeFactor = 1.9;
    }

    if (sex === 'm') {
        let basicCalorieIntakeMan = 66.5 + 13.75 * weight + 5.003 * height - 6.755 * age;
        console.log(Math.floor(basicCalorieIntakeMan * activeFactor));
    } else if (sex === 'f') {
        let basicCalorieIntakeWoman = 655 + 9.563 * weight + 1.85 * height - 4.676 * age;
        console.log(Math.floor(basicCalorieIntakeWoman * activeFactor));
    } else {
        console.log("piss off");
    }
}
daylyCalorieIntake([130, 63, 21, 'f', 1.5]);




function daylyCalorieIntake(weight, height, age, sex, numberOfWorkouts) {
    console.log(weight);
    let basicCalorieIntakeMan = 66.5 + 13.75 * weight / 2.2 + 5.003 * height * 2.54 - 6.755 * age;
    let basicCalorieIntakeWoman = 655 + 9.563 * weight / 2.2 + 1.85 * height * 2.54 - 4.676 * age;
    let activeFactor;
    switch (numberOfWorkouts) {
        case 0:
            activeFactor = 1.2;
            break;
        case 1:
        case 2:
        case 3:
            activeFactor = 1.375;
            break;
        case 4:
        case 5:
        case 6:
            activeFactor = 1.55;
            break;
        case 7:
        case 8:
        case 9:
            activeFactor = 1.725;
            break;
        default:
            activeFactor = 1.9;
            break;
    }
    if (sex === 'm') {
        console.log(Math.round(basicCalorieIntakeMan * activeFactor));
    } else if (sex === 'f') {
        console.log(Math.round(basicCalorieIntakeWoman * activeFactor));
    } else
        console.log("begai ot tuka");

}
//Another version of this problem with 5 parameters instead of one array
//daylyCalorieIntake(154 ,70,27 ,'m', 0);*/