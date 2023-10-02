function mostrarMensaje(){
    var mensaje = document.getElementById("textoInput").value;
    //alert(mensaje);
    if (mensaje>10 || mensaje < 0) {
        alert("El numero debe de estar entre 0 y 10");
    }
    else
        {
            console.clear();
            for (let index = 1; index <= 10; index++) {
                
                console.log(mensaje+" * "+index+" = "+mensaje*index);
                console.log();
            }
        }
   
}