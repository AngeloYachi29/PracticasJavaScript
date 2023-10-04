// Función para convertir un componente de color a formato hexadecimal
function cambiarAHex(valor) {
    let hex = valor.toString(16).toUpperCase();
    return hex.length == 1 ? `0${hex}` : hex;
}  
function convertir() {
    // Solicitar al usuario los valores de r, g y b
    const r = parseInt(prompt("Introduce el valor de r (0-255):"));
    const g = parseInt(prompt("Introduce el valor de g (0-255):"));
    const b = parseInt(prompt("Introduce el valor de b (0-255):"));
    let colorHex = ``;

    // Verificar si los valores son válidos (entre 0 y 255)
    if (isNaN(r) || isNaN(g) || isNaN(b) || r < 0 || r > 255 || g < 0 || g > 255 || b < 0 || b > 255) {
        console.log("Valores de color inválidos. Asegúrate de ingresar números entre 0 y 255.");
    } else {
        // Convertir los valores de r, g y b a formato hexadecimal
         colorHex = `#${cambiarAHex(r)}${cambiarAHex(g)}${cambiarAHex(b)}`;
    }
    // Mostrar el color en formato hexadecimal
    console.log(`El color en formato hexadecimal es: ${colorHex}`);
}