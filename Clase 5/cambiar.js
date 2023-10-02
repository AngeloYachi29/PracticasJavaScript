function Cambiar() {
    let tipoTemp = prompt("Elegir tipo :Celsius (C)- Fahremheit (F)");
    let num1 = parseInt(prompt("Ingresar la temperatura:"));
    
    if ("F"==tipoTemp) {
        let c = Math.round((num1-32)/(9.0/5.0));
        console.log(num1+" ºF son "+c+" ºC");
    }
    else
    {
        let f = Math.round(num1*9.0)/5.0+32;
        console.log(num1+" ºC son "+f+" ºF");
    }
    
}