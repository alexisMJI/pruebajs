//usando fechas
var fecha = new Date();
var year = fecha.getFullYear();
var textoHora = "La hora es "+ year;

console.log(textoHora);

//usando math y random

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}

console.log(random(1,10));


/*Lo primero que hay que hacer para usar jquery es fijarnos que el documento este listo
para eso hacemos esto
*/

$(document).ready(function(){  
    console.log("La web y Jquery cargados..");

/*El dolar $ y Jquery es lo mismo 
() es el selector en este caso seleccionamos document qyue es toda la pagina
despues ready es un evento y tiene una funcion de callback y dentro de ella ejecutamos lo que queremos
*/

//Selectores de ID
    $("#rojo").css("background","red");
   
    let green = $('#green');
    green.css({
    'background': 'green',
    'color': 'white'
    });
    
//Selectores de clases
    var classzebra = $('.zebra');
    //console.log(classzebra);

    classzebra.click(() => {
        console.log("has hecho un clik en un objeto con clase zebra");   
      });

    $('.medio').click(function(){
        console.log("has hecho un clik en un objeto con clase medio");
        $(this).addClass("zebra");
        //console.log(this);
      });
     

// Selectores de etiqueta
var parrafos = $('p');

 /*
    parrafos.click(function(){
    var este = $(this);

    if(!este.hasClass("grande"))
        este.addClass("grande");
    else 
        este.removeClass("grande");
})
*/

 /*Hay una manera más rápida y eficaz para meter o quitar una clase, 
 con el método "toggleClass" consigues que si no esta la clase la introduzca,
  y si lo está, la quita.*/

 var parrafos = $("p");
 parrafos.click(function() {
    $(this).toggleClass("zebra"); 
 });


 //selectores de atributo
 $('[title=Google]').css('background','orange');

 //se vio otras cosas para seleccionar cosas del dom 


      
 });


