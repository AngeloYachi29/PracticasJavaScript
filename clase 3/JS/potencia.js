let num1 = prompt("Ingresar un mumero:");
let num2 = prompt("Ingresar el exponente:");
console.time("Potencia");
let result = Math.pow(num1,num2);
console.timeEnd("Potencia");
console.log(result);

console.log("");
let result2 = 1;
console.time("Potencia")
for (let index = 1; index <= num2; index++) 
    result2 = result2 * num1;   
console.timeEnd("Potencia");
console.log(result2);