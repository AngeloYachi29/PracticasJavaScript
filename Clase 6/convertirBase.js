function cambioDeBase(num1, base) {
    let cadena = "";
    let caracteresHexadecimales = "0123456789ABCDEF";

    while (num1 > 0) {
        let residuo = num1 % base;
        cadena = caracteresHexadecimales[residuo] + cadena;
        num1 = Math.floor(num1 / base);
    }

    return cadena
}

function CambiarBase() {
    let num1 = parseInt(prompt("Ingresar un numero en base 10:"));
    if (num1 > 0) {
        console.log(num1 + " en hexadecimal es: " + cambioDeBase(num1, 16));
        console.log(num1 + " en octal es: " + cambioDeBase(num1, 8));
        console.log(num1 + " en binario es: " + cambioDeBase(num1, 2));
    } else {
        console.log("El numero debe de ser mayor a cero")
    }




}