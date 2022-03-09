$(document).ready(function(){  
    console.log("La web y Jquery cargados..");

    /*hay bastantes metodos nuevos de interacciones con jqui
    vamos a ver los q me iwnteresen */

    //Selectable
    $(".listaSel").selectable();
    
    //tooltip
    $('a').tooltip();
    //cuadros de dialogos
    $("#btnl").click(function(){
        $("#cajaPopup").dialog();
    })
    
    //datepicker o calendario...
    $("#iCalend").datepicker();

    $("#divtabs").tabs();







    
});