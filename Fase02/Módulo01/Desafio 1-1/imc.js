/**
 * Desafio LaunchBase BootCamp
 * Calcular IMC
 * Lucas M. Messias
 */

 const name = "Carlos";
 const weight = 84;
 const height = 1.88;

 const imc = weight / (height * height);

 if (imc >= 30) {
    console.log(`${name} você está acima do peso.`);
 } else if (imc < 29.9) {
    console.log(`${name} você não está acima do peso.`);
 }