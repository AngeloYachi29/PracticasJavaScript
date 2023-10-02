let x = prompt("Ingresar la posicion del fibonacci que deseas buscar");
let a=1,b=1,fibo=0;

if (x==1 || x==2) {
    if (x==1) {
        console.log("Fibo[1] = "+ 1);
    }
    else {
        console.log("Fibo[1] = "+ 1);
        console.log("Fibo[2] = "+ 1);
    }
}
else
    if (x>2){   
        console.log("Fibo[1] = "+ 1);
        console.log("Fibo[2] = "+ 1);
        for (let index = 3; index <= x; index++){
            fibo = a + b;
            a = b;
            b = fibo;
            console.log("Fibo["+index+"] = " + fibo);
        }
    }
        
           