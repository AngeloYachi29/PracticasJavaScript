function calcular() {
    let hora = parseInt(prompt("Ingresar horas:"));
    let minuto = parseInt(prompt("Ingresar minutos:"));
    let segundo = parseInt(prompt("Ingresar segundos:"));
    // Datos de la llamada
    const establecimientoLlamadaCentimos = 10; // Costo del establecimiento de llamada en centimos
    const costoPorMinuto = 5; // Costo por segundo en centimos
   
    // Paso 1: Convertir el tiempo de la llamada a segundos
    let totalSegundos = hora * 3600 + minuto * 60 + segundo;

    // Paso 2: Calcular el costo del tiempo en centimos
    const costoTiempoCentimos = totalSegundos / 60 * costoPorMinuto;
    console.log("costo por minuto: "+costoTiempoCentimos+" centimos");
    // Paso 3: Sumar el costo del establecimiento de llamada y el costo del tiempo
    const costoTotalCentimos = establecimientoLlamadaCentimos + costoTiempoCentimos;

    // Paso 4: Convertir el costo total a euros y centimos
    const euros = Math.floor(costoTotalCentimos / 100); // Parte entera en euros
    const centimos = costoTotalCentimos % 100; // Parte decimal en centimos

    // Imprimir el resultado en formato "x€ e yC"
    console.log(`${euros}€ ${centimos}C`);
}