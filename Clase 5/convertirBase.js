function CambiarBase() {
    let num1 = parseInt(prompt("Ingresar un numero en base 10:"));
    
    let hexa = num1;
    let octa = num1;
    let binar = num1;
    let hexadecimal = "";
    let octadecimal = "";
    let binario = "";
    let caracteresHexadecimales = "0123456789ABCDEF";

    while (hexa > 0) {
        let residuo = hexa % 16;
        hexadecimal = caracteresHexadecimales[residuo] + hexadecimal;
        hexa = Math.floor(hexa / 16);
    }

    while (octa > 0) {
        let residuo = octa % 8;
        octadecimal = residuo + octadecimal;
        octa = Math.floor(octa / 8);
    }

    while (binar > 0) {
        let residuo = binar % 2;
        binario = residuo + binario;
        binar = Math.floor(binar / 2);
    }

    
    // Muestra el resultado
    console.log(num1+" en hexadecimal es: " + hexadecimal);
    console.log(num1+" en octal es: " + octadecimal);
    console.log(num1+" en binario es: " + binario);

    
    
    
}