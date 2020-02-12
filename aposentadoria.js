/**
 * Desafio LaunchBase BootCamp
 * Calcular Aposentadoria
 * Lucas M. Messias
 */

const name = "Silvana";
const sex = "F";
const age = 48;
const contribution = 23;

const time = age + contribution;

if (sex == "M") {

    if (time >= 95){
        console.log(`${name}, você pode se aposentar!`);
    }else {
        console.log(`${name}, você ainda não pode se aposentar!`);
    }

} else {

    if (time >= 85){
        console.log(`${name}, você pode se aposentar!`);
    }else {
        console.log(`${name}, você ainda não pode se aposentar!`);
    }

}