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

var booleann =confirm("quieres poner verdadero o falso?");

if(booleann == true)
    console.log("El usuario elegio poner verdadero");
else 
    console.log("El usuario elegio poner falso");

var nombreUsuario= prompt("ingresa tu nombre");
console.log("el nombre del usuario es "+nombreUsuario);

var numeroIngresado = parseInt(prompt("ingresa un numero"));
console.log(numeroIngresado+2);

//---------------------------modificar cosas de html
//var cajita=document.getElementById("micaja").innerHTML;
var cajita= document.querySelector('#micaja');
console.log(cajita);

document.getElementById('micaja').innerHTML = '<h3>Hola que tal</h3>';

//seguimos con los cambios de html sobre js


