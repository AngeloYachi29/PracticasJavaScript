function Convertir() {
    let num1 = parseInt(prompt("Ingresar el año:"));
    let años = Math.floor(num1 / 365);
    let meses = Math.floor((num1 % 365)/31);
    let dias = Math.floor((num1 % 365) % 31 );

    console.log(num1+" dias son: "+años+" años, "+meses+" meses, "+dias+" dias.");
    
    
}