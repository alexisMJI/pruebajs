'use strict'
/*
Esto es un comentario
*/


document.write("esto esta escrito desde JS");
console.log("asdas aparece en la consola");

//let permite declarar variables limitando su alxance a el bloque donde se usa
//el var se utiliza de manera mas global

var prueba="estos son caracteres";
var ancho=88;
var pais ="España";
var año =1999;

console.log(pais,año);

console.log(prueba,ancho);

if(true){
    let prueba="en LET"
    let ancho=2323;
    console.log(prueba,ancho);
}

console.log(prueba,ancho);


año= 2021;
console.log(año);
alert("El año presente al momento de tipear esto es "+ año);
//---------------------------------------------
//variables y operadores
var numeroFalso= "44";
console.log(numeroFalso);
console.log(Number(numeroFalso)+10);
console.log(parseInt(numeroFalso)+10);
console.log(parseFloat(numeroFalso)+10.01);

console.log(typeof numeroFalso);

for (let i = 0; i <= 20; i++){ 
    console.log(i);
    //debugger;
}
//--------------------------kmjhkjh
//alertas y ventanas para ingreso de datos
alert("Hola mundo con JavaScriptt");
/*
var booleann =confirm("quieres poner verdadero o falso?");

if(booleann == true)
    console.log("El usuario elegio poner verdadero");
else 
    console.log("El usuario elegio poner falso");

var nombreUsuario= prompt("ingresa tu nombre");
console.log("el nombre del usuario es "+nombreUsuario);

var numeroIngresado = parseInt(prompt("ingresa un numero"));
console.log(numeroIngresado+2);
*/

function cambiaColor(color){
    cajita.innerHTML = '<h3>Hola que tal</h3>';
    cajita.style.background= "color";
}

/*DOM document object model
modificar cosas de html
Aca vemos como seleccionar un elemetno de html en js el primero es con su id*/
var cajita=document.getElementById("micaja");
//var cajita= document.querySelector('#micaja');
console.log(cajita);
//aca al div de html le vamos a poner que imprima algo
cajita.innerHTML = '<h3>Hola que tal</h3>';
cajita.style.background= "blue";

//BOM browser object model
console.log(screen.width);
console.log(window.location);

//window.open("https://www.google.com");

// ahora vemos como capturar eventos


var cont =0;
function contadorr(){
    
    cont= cont +1;
    console.log(cont);
}

function vercontador(){
    console.log=cont;
}

/*var botoncito2 = document.getElementById(button2);
botoncito2.addEventListener("click",function contadorrr(){
    
    cont= cont +1;
    console.log(cont);
});*/

//--
document.getElementById( "try" ).addEventListener( "click" , function ()
{ 
    cont= cont +1;
    console.log(cont);}); 