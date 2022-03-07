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
    var cajita= $('#cajita1');
    var caja2= $('#cajita2');

    btnMostrar.hide();

    btnOcultar.click(function(){
        cajita.hide('normal');
        btnOcultar.hide();
        btnMostrar.show();
    })

    btnMostrar.click(function(){
        cajita.fadeIn('normal');
        btnMostrar.hide();
        btnOcultar.show();
    })

    //ahora vamos  a hacer lo mismo pero sion la necidad de dos botones
    btnTodoenUno= $('#AiO');

    btnTodoenUno.click(function(){
        caja2.toggle();
    })

    
    //PETICIONES AJAZ CON JQUERY
    //Metodo Load -> Carga los datos de un servidor y pone los datos devueltos en el elemento seleccionado
    var datos = $('#cajaDatos');
    //datos.load("https://swapi.dev/api/");
    
    //GET
    //Carga los datos de un servidor a través de un HTTP AJAX GET solicitud
    $.get("https://swapi.dev/api/planets/1/",function(response){
        console.log(response);
        datos.append("<p>"+"El nombre del planeta es: "+response.name+" su clima es: "+response.climate+"</p>");
    });
    
    $.get("https://reqres.in/api/users",{page: 1}, function(r){
        
            r.data.forEach((element, index) => {
                datos.append("<p>"+element.first_name+" "+element.last_name+"</p>");
            });
            
        
    });
    /*
    //POST
    //Carga los datos de un servidor mediante una solicitud POST HTTP AJAX
    //harcodeando el alta de un user
    var usuario1 = {
        "name": "Liliana",
        "job": "Cajera"
    }
    $.post("https://reqres.in/api/users", usuario1, function(r){
        console.log(r);
    });
    //probamos con un form para q sea + dinamico
    var formcarga =  $('#cargaUsers');
    
    
    formcarga.submit(function(event){
        event.preventDefault(); //por alguna razon al hacer post te redirige a otra pag, para evitar eso usamos este metodo o r false
        var usuario = {
            name: $('input[name="name"]').val(),
            job: $('input[name="job"]').val()
        }
        $.post(, usuario, function(response){
            console.log(response);
        }).done(f=>{
            alert("usuario creado")
        })
        return false; 
    });
    */
    //AJAX
    var formcarga =  $('#cargaUsers');
    formcarga.submit(function(event){
        event.preventDefault(); //por alguna razon al hacer post te redirige a otra pag, para evitar eso usamos este metodo o r false
        var usuario = {
            name: $('input[name="name"]').val(),
            job: $('input[name="job"]').val()
        }
        $.ajax({
            type: 'POST',
            url: "https://reqres.in/api/users",
            data: usuario,
            beforeSend: function(){
            console.log("Enviando usaurio..");
            },
            success: function(response){
            console.log(response);
            },
            error: function(){
            console.log("A ocurrido un error");
            },
            timeout: 2000
        });
    });


})