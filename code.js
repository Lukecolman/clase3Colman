const numeroRandom = parseInt(Math.random () * (999999 - 111111) + 111111)
//Es la mejor forma que encontre de generar un numero aleatorio de 6 cifras

for( let i = 3; i >= 0; i--){
    console.log(i);
    let nombre = prompt("ingrese nombre");
    if(nombre == null || nombre == ""){
    alert("Por favor, ingrese un nombre");
    } else {
        if(i >= 1){ 
            alert("Hola " + nombre + " tu cupon es: " + numeroRandom);
            //break; //Detener el ciclo luego de entregar el cupon
        } else {
            alert('Lo sentimos ' + nombre + " ya no hay cupones disponibles");
            //break; //Detener el ciclo luego de avisar que no hay cupones disponibles
        }
    }
}