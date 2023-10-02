function Calcular() {
    let num1 = parseInt(prompt("Ingresar el primer numero:"));
    let num2 = parseInt(prompt("Ingresar el segundo numero:"));
    console.log("El numero que esta mas cerca es: " )
    if (Math.abs(num1-100) <= Math.abs(num2-100)) {
        console.log(num1);
    } else {
        console.log(num2);
    }
    
}