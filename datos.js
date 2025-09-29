// Variables primitivas
let nombre = "Pedro";    // string
let edad = 25;           // number
let estudiante = true;   // boolean

// Concatenación
let mensaje = "Hola, mi nombre es " + nombre + " y tengo " + edad + " años.";
console.log(mensaje);

// Coerción implícita (number + string)
let resultado1 = edad + " años";
console.log("Coerción implícita:", resultado1);

// Coerción explícita (boolean a string)
let resultado2 = String(estudiante);
console.log("Coerción explícita:", resultado2);

// Operaciones aritméticas con number
let dobleEdad = edad * 2;
console.log("El doble de mi edad es:", dobleEdad);
