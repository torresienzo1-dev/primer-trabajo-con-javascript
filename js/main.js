// Captura de datos
let cantidadNotas = 3;
let suma = 0;

// Bucle para pedir las notas
for (let i = 1; i <= cantidadNotas; i++) {
  let nota = parseFloat(prompt("Ingrese la nota " + i + ":"));
  suma += nota;
}

// Procesamiento
let promedio = suma / cantidadNotas;

// Condicional
if (promedio >= 6) {
  alert("Aprobado con promedio: " + promedio.toFixed(2));
} else {
  alert("Desaprobado con promedio: " + promedio.toFixed(2));
}