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
/*
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
*/
/*
Otro tema que se ve es que podemos poner nuestro script en html al principio
y para que funcione bien, vamos a poner window.addeventlistener("load" function ()
{tdo el codigo que creamos}
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

var formulario= document.getElementById("form2");

formulario.addEventListener("submit", enviarDatos,false);

function enviarDatos(e)
{
    var apellido = document.getElementById("inputApe");
    if(apellido.value=="")
    {alert("los campos estan vacios");
     e.preventDefault();
     return false;
     }else {alert(apellido.value);    
            e.preventDefault();
            //return true;
            }

}
//************************************************ */
//ahora vamos a ver una peticion fetch
var div_usuarios = document.getElementById("dUsuarios");
var usuarios = [];
var div_janet = document.getElementById("dJanet");


function getUsuarios(){
    return fetch('https://reqres.in/api/users');
}


function getJanet(){
  return fetch('https://reqres.in/api/users/2');
}

function listadoUsuarios (usuarios){
  usuarios.map((users, i) =>{//El método map() crea un nuevo vector (array, o matriz unidimensional) ejecutando una función en cada uno de los elementos del vector. Al mismo tiempo no ejecuta la función en elementos sin valor y no cambia el vector original
      let nombre = document.createElement('h3');

      nombre.innerHTML = i + '. ' + users.first_name + " " + users.last_name;

      div_usuarios.appendChild(nombre);

    });}

    function mostrarJanet (user){
      
          let nombre = document.createElement('h4');
          let avatar = document.createElement('img');

          nombre.innerHTML =  user.first_name + " " + user.last_name;
          avatar.src = user.avatar;
          avatar.width= '100';
  
          div_janet.appendChild(nombre);
          div_janet.appendChild(avatar);
      }





//ahora vamos a ver una peticion fetch para ejecutarlo 


getUsuarios()
  .then(data => data.json())//cuando tenga los resultados de la peticion ajax
  .then(users => {//capturamelo y listame los usuarios
        listadoUsuarios(users.data);

        return getJanet();//luego devuelveme el usuario espexifico
  })
  .then(data => data.json())
  .then(user =>{//lo metes dentro de la variable user
    mostrarJanet(user.data);// y me lo mostras conesta funcion
  });



//**************************************************************
function primerPromesa(){
    return new Promise(function(resolve, reject){
            let estudiaste = true;
            if(estudiaste == true)
                resolve("Aprobaste la materia");
            else{
                reject("Error");
            }    
    })

}         

//llamada para que se ejecute
primerPromesa().then(function(acierto){
    console.log(acierto);
}).catch(function(error){
    console.log(error);})
/*-----------------------------------------------*/
function segundaPromesa(){
    return new Promise((resolve, reject) =>{
            let estudiaste = true;
            if(estudiaste == true)
                resolve("Aprobaste la materia");
            else{
                reject("Error");
            }    
    })

}  
//************** 
/*
try {
 let lunaladra = "ggggrrr";
 alert(lunaladr);

}catch

99e9*/


