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



//--tambien tenemos clickover y clicout o clickdb o algo asi
document.getElementById( "try" ).addEventListener( "click" , function ()
{ 
    cont= cont +1;
    console.log(cont);}); 


/* eventos teclado
FOCUS
BLUR
KEYDOWN
KEYUP
*/

var botonform1;
botonform1= document.getElementById( "btnform" );
botonform1.addEventListener( "click" , function ()
{ 
    cont= cont +1;
    console.log(cont);}); 

var inputt1 =document.getElementById( "input1" );

inputt1.addEventListener( "focus" , function ()
{ 
    console.log("[focus]Estas dentro del input");});


inputt1.addEventListener( "blur" , function ()
    { 
        console.log("[blur]Estas fuera del input");});
    
inputt1.addEventListener( "keydown" , function ()
    { 
    console.log("[keydown]Estas escribiendo dentro del input");});   

inputt1.addEventListener( "keypress" , function (event)
    { 
    console.log("[keypress]tecla presionada",String.fromCharCode(event.AT_TARGET));});   

/*
Otro tema que se ve es que podemos poner nuestro script en html al principio
y para que funcione bien, vamos a poner window.addeventlistener("load" function (){tdo el codigo que creamos}
sirve para ejecutar el codigo cuando todo el html este cargado
*/
 //Otro tema es los timers
/*
 var tiempo= setInterval( function(){
    console.log("Set interval ejecutado");
}, 3000);

var botontime= document.getElementById( "btntime" );
botontime.addEventListener( "click", function()
{ 
    console.log("has parado el bucle time");
clearInterval(tiempo);
}); 
*/

/*otro tema es lo del evento submit en los forms
basicamente es un input type""submit"
y sirve para poner una especie de boton que va a 
servir para enviar la info del form

esta en la seccion 19 de los videos
AHORA LO VEMOS UN POCO
*/

var formulario= document.getElementById("form1");
formulario.addEventListener("submit", function(){
    console.log("se ejecuto el submit");
    var nombree= document.getElementById("nombreee").value;
    console.log(nombree);
    return false;

})

