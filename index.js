//Ejercicio de conversión de temperaturas

//Para pedir el input de lxs users
const prompt = require('prompt-sync')();
//se requiere instalar prompt, con npm install prompt-sync

console.log("Convertir temperaturas Celcius a Kelvin y Fahrenheit.\n");
let temperatura;

do {
    temperatura = parseInt(prompt(console.log("Ingresa un número: ")));

    if (!(Number.isFinite(temperatura))){
    console.log("Ese no es un número. Ingresa un número: ");
    }
} while (!Number.isFinite(temperatura)){
    
    //Hacemos las conversiones
    let tempFahrenheit = (temperatura * 1.8) + 32;
    let tempKelvin = temperatura + 273.15

    //Imprimimos los resultados
    console.log("La temperatura que ingresaste es de " + temperatura + "° Celcius");
    console.log("Grados Kelvin: " + tempKelvin);
    console.log("Grados Fahrenheit: " + tempFahrenheit);
    
}
