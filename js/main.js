let nombre = prompt ("Ingrese su nombre");
let telefono = parseInt(prompt ("Ingrese su teléfono"));
let edad = parseInt(prompt ("Ingrese su edad"));
let saldo = parseFloat(prompt("Ingrese su saldo inicial:"));
let deposito = parseFloat(prompt("Ingrese el monto a depositar:"));

let nuevoSaldo = saldo + deposito;
let mensaje = "Hola " + nombre + " tu nuevo saldo es $" + nuevoSaldo;

console.log (mensaje);
alert (mensaje);
