function CalcularTiempo() {
    let num1 = parseInt(prompt("Ingresar la hora:"));
    let num2 = parseInt(prompt("Ingresar el minuto"));
    let num3 = parseInt(prompt("Ingresar el segundo"));
    let fecha = new Date();
    fecha.setHours(num1);
    fecha.setMinutes(num2);
    fecha.setSeconds(num3+1);
    console.log(fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds());
       
}