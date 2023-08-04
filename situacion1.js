// Situación 1: Registro de temperaturas diarias
const prompt = require('prompt-sync')();
let Ciudad = "Ciudad Ejemplo";
let TemperaturasMaximas = []; // Inicializamos el array vacío, ya que los valores serán ingresados por el usuario
let DiasSemana = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

// Ejemplo de ingreso de usuario (el usuario ingresa las temperaturas máximas)
for (let i = 0; i < DiasSemana.length; i++) {
    const temperatura = parseFloat(prompt(`Ingrese la temperatura máxima para ${DiasSemana[i]}: `));
    TemperaturasMaximas.push(temperatura);
}

// Para mostrar los datos por pantalla, podríamos hacer lo siguiente:
for (let i = 0; i < DiasSemana.length; i++) {
    console.log(`${DiasSemana[i]}: ${TemperaturasMaximas[i]}°C`);
}

