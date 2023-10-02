function CalcularFecha() {
    let num1 = parseInt(prompt("Ingresar el año:"));
    let num2 = parseInt(prompt("Ingresar el mes"));
    let num3 = parseInt(prompt("Ingresar el dia"));
    let fecha = new Date();
    fecha.setFullYear(num1); // Establece el año
    fecha.setMonth(num2-1);// Establece el mes (0-11, donde 0 es enero)
    fecha.setDate(num3); // Establece el día del mes
    // consultar si estan bien los valores ingresados
    // console.log(fecha.getFullYear()); 
    // console.log(fecha.getMonth()); 
    // console.log(fecha.getDate());
    if (num1 == fecha.getFullYear() && num2 == fecha.getMonth()+1 && num3 == fecha.getDate()) {
        console.log("Es valida la fecha que ingresaste");
    }
    else {
        console.log("No es valida la fecha que ingresaste");
    }  
}