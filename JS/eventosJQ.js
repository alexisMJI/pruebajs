$(document).ready(function(){  
    console.log("La web y Jquery cargados..");

    // MouseOver y MouseOut

    var caja = $("#caja");
    var nombre = $("#nombre");
    /*
    caja.mouseover(function(){
        $(this).css('background','yellow');

    });

    caja.mouseout(function(){
        $(this).css('background','red');
    });
    */

    /* Hover es una funcion aparentemente.. de jq que hace
    lo que hicimos arriba pero mas practico
    */
    function cambiaAmarrillo(){
        $(this).css('background','yellow');

    }

    function cambiaRojo(){
        $(this).css('background','red');
    }

    caja.hover(cambiaAmarrillo, cambiaRojo);

    // Click, Doble Click
    caja.click(function(){
        $(this).css('background','blue');

    });

    caja.dblclick(function(){
        $(this).css({
            'background': 'pink',
            'color': 'white'
            });
    });

    //focus y blur
    nombre.focus(function(){
        console.log("has hecho focus en el input");
    });

    nombre.blur(function(){
        console.log("blur,la info q ingresaste:"+ $(this).val());
        caja.text("has hecho blur");
    });

    //mousedown y mouseup
    //nada intereseante la verdad...

    //Trabajando con DOM y textos

    function manejolinks(){
        $('a').each(function(index){
            var that= $(this);
            var enlace= that.attr("href");

            that.attr('target','_blank');//agregamos el atributo blank q hace q al abrir link abra una pestana nueva
            that.text(enlace);

        })
    };

    manejolinks();
    
    $('#addButton').click(function(){
        $('#menu').prepend('<li><a href="'+$('#addLink').val()+'"></a></li>');
        manejolinks();
    })
    //vamos a ver Efectos
    btnOcultar= $('#ocultar');
    btnMostrar= $('#mostrar');
    var cajita= $('#cajita');

    btnOcultar.click(function(){
        cajita.hide();
    })

    btnMostrar.click(function(){
        cajita.show();
    })


})