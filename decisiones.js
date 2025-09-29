// decisiones.js

// 1. Evaluar si un número es par o impar
function esParOImpar(numero) {
  if (numero % 2 === 0) {
    return numero + " es par";
  } else {
    return numero + " es impar";
  }
}

// 2. Evaluar si un número es positivo, negativo o cero
function evaluarNumero(numero) {
  if (numero > 0) {
    return numero + " es positivo";
  } else if (numero < 0) {
    return numero + " es negativo";
  } else {
    return "El número es cero";
  }
}

// 3. Determinar el día de la semana según un número (0 al 6)
function obtenerDiaSemana(dia) {
  let nombreDia;
  switch (dia) {
    case 0:
      nombreDia = "Domingo";
      break;
    case 1:
      nombreDia = "Lunes";
      break;
    case 2:
      nombreDia = "Martes";
      break;
    case 3:
      nombreDia = "Miércoles";
      break;
    case 4:
      nombreDia = "Jueves";
      break;
    case 5:
      nombreDia = "Viernes";
      break;
    case 6:
      nombreDia = "Sábado";
      break;
    default:
      nombreDia = "Número inválido (debe ser 0 a 6)";
  }
  return "El día es: " + nombreDia;
}

// -----------------------
// Pruebas en consola
// -----------------------

console.log("=== Prueba esParOImpar ===");
console.log(esParOImpar(10)); // par
console.log(esParOImpar(7));  // impar

console.log("\n=== Prueba evaluarNumero ===");
console.log(evaluarNumero(5));   // positivo
console.log(evaluarNumero(-3));  // negativo
console.log(evaluarNumero(0));   // cero

console.log("\n=== Prueba obtenerDiaSemana ===");
console.log(obtenerDiaSemana(0)); // Domingo
console.log(obtenerDiaSemana(3)); // Miércoles
console.log(obtenerDiaSemana(6)); // Sábado
console.log(obtenerDiaSemana(9)); // Número inválido
