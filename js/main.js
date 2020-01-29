$( document ).ready(function() {

$("#nav-toggle").click(

function(e){
    e.preventDefault();

if($(this).hasClass("active")){
 $(".menu_cel").slideToggle()
}else{

    $(".menu_cel").slideToggle()
    }
    $(this).toggleClass("active")
}
)


  $("#slider-home, #slider-home_cel").owlCarousel({

      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      autoPlay: true


      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });


    //galerias

     $("#slide_q50, #slide_qx60, #slide_q70, #slide_qx60p , #slide_qx70 , #slide_qx80 ").owlCarousel({

      navigation : false, // Show next and prev buttons
         pagination:true,
      slideSpeed : 300,
      paginationSpeed : 400,
         items:2,
         lazyLoad: true,
         autoPlay: true,
         itemsDesktop:[1360,2],
         itemsDesktopSmall :   [979,1]

      // "singleItem:true" is a shortcut for:
      // items : 1,
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false

  });

/* prueba cerrar */
    //q50
    $("#q50Prueba .cerrar").click(function(e){
        e.preventDefault();
        $("#q50Prueba ").slideToggle();
         $("#uno").css('z-index', '800')
    })

       $("#q50Prueba .irgaleria").click(function(e){
        e.preventDefault();
        $("#q50_gal ").slideToggle();
          $("#q50Prueba ").slideToggle();
           $("#uno").css('z-index', '3000')
    })

     $("#q50Fuera .pruebame").click(function(e){
        e.preventDefault();
          $("#uno").css('z-index', '3000')
        $("#q50Prueba ").slideToggle();
    })

     //qx60
    $("#qx60Prueba .cerrar").click(function(e){
        e.preventDefault();
        $("#qx60Prueba ").slideToggle();
        $("#dos").css('z-index', '800')
    })

        $("#qx60Prueba .irgaleria").click(function(e){
        e.preventDefault();
        $("#qx60_gal ").slideToggle();
          $("#qx60Prueba ").slideToggle();
            $("#dos").css('z-index', '3000')
    })
     $("#qx60Fuera .pruebame").click(function(e){

        e.preventDefault();
        $("#qx60Prueba ").slideToggle();
         $("#dos").css('z-index', '3000')
    })

        //qx70
    $("#q70Prueba .cerrar").click(function(e){
        e.preventDefault();
        $("#q70Prueba ").slideToggle();
        $("#tres").css('z-index', '800')
    })

       $("#q70Prueba .irgaleria").click(function(e){
        e.preventDefault();
        $("#q70_gal ").slideToggle();
          $("#q70Prueba ").slideToggle();
           $("#tres").css('z-index', '3000')
    })

     $("#q70Fuera .pruebame").click(function(e){

        e.preventDefault();
        $("#q70Prueba ").slideToggle();
         $("#tres").css('z-index', '3000')
    })


         //qx60p
    $("#qx60pPrueba .cerrar").click(function(e){
        e.preventDefault();
        $("#qx60pPrueba ").slideToggle();
        $("#cuatro").css('z-index', '800')
    })

        $("#qx60pPrueba .irgaleria").click(function(e){
        e.preventDefault();
        $("#qx60p_gal ").slideToggle();
          $("#qx60pPrueba ").slideToggle();
            $("#cuatro").css('z-index', '3000')
    })

     $("#qx60pFuera .pruebame").click(function(e){

        e.preventDefault();
        $("#qx60pPrueba ").slideToggle();
         $("#cuatro").css('z-index', '3000')
    })


           //qx70
    $("#qx70Prueba .cerrar").click(function(e){
        e.preventDefault();
        $("#qx70Prueba ").slideToggle();
        $("#cuatro").css('z-index', '800')
    })

        $("#qx70Prueba .irgaleria").click(function(e){
        e.preventDefault();
        $("#qx70_gal ").slideToggle();
          $("#qx70Prueba ").slideToggle();
            $("#cuatro").css('z-index', '3000')
    })

     $("#qx70Fuera .pruebame").click(function(e){

        e.preventDefault();
        $("#qx70Prueba ").slideToggle();
         $("#cuatro").css('z-index', '3000')
    })


           //qx80
    $("#qx80Prueba .cerrar").click(function(e){
        e.preventDefault();
        $("#qx80Prueba ").slideToggle();
        $("#cuatro").css('z-index', '800')
    })

        $("#qx80Prueba .irgaleria").click(function(e){
        e.preventDefault();
        $("#qx80_gal ").slideToggle();
          $("#qx80Prueba ").slideToggle();
            $("#cuatro").css('z-index', '3000')
    })

     $("#qx80Fuera .pruebame").click(function(e){

        e.preventDefault();
        $("#qx80Prueba ").slideToggle();
         $("#cuatro").css('z-index', '3000')
    })

     /////////////////////// GALERIA CERRAR

     //q50_gal

     $("#q50_gal .cerrar").click(function(e){
        e.preventDefault();
        $("#q50_gal ").slideToggle();
          $("#uno").css('z-index', '800')
    })

      $("#q50_gal .irprueba").click(function(e){
        e.preventDefault();
        $("#q50_gal ").slideToggle();
          $("#q50Prueba ").slideToggle();
          $("#uno").css('z-index', '3000')
    })

     $("#q50Fuera .btngal").click(function(e){
        e.preventDefault();
          $("#uno").css('z-index', '3000')
        $("#q50_gal ").slideToggle();
    })


         //qx60_gal

     $("#qx60_gal .cerrar").click(function(e){
        e.preventDefault();
        $("#qx60_gal ").slideToggle();
         $("#dos").css('z-index', '800')
    })

      $("#qx60_gal .irprueba").click(function(e){
        e.preventDefault();
        $("#qx60_gal").slideToggle();
          $("#qx60Prueba ").slideToggle();
          $("#dos").css('z-index', '3000')
    })

     $("#qx60Fuera .btngal").click(function(e){
        e.preventDefault();
          $("#dos").css('z-index', '3000')
        $("#qx60_gal ").slideToggle();
         $("#uno").css('z-index', '3000')
    })

            //q70_gal

     $("#q70_gal .cerrar").click(function(e){
        e.preventDefault();
        $("#q70_gal ").slideToggle();
         $("#tres").css('z-index', '800')
    })

      $("#q70_gal .irprueba").click(function(e){
        e.preventDefault();
        $("#q70_gal").slideToggle();
          $("#q70Prueba ").slideToggle();
          $("#tres").css('z-index', '3000')
    })

     $("#q70Fuera .btngal").click(function(e){
        e.preventDefault();
          $("#tres").css('z-index', '3000')
        $("#q70_gal ").slideToggle();
         $("#uno").css('z-index', '3000')
    })


           //qx60p_gal

     $("#qx60p_gal .cerrar").click(function(e){
        e.preventDefault();
        $("#qx60p_gal ").slideToggle();
         $("#cuatro").css('z-index', '800')
    })

      $("#qx60p_gal .irprueba").click(function(e){
        e.preventDefault();
        $("#qx60p_gal").slideToggle();
          $("#qx60pPrueba ").slideToggle();
          $("#cuatro").css('z-index', '3000')
    })

     $("#qx60pFuera .btngal").click(function(e){
        e.preventDefault();
          $("#cuatro").css('z-index', '3000')
        $("#qx60p_gal ").slideToggle();
         $("#uno").css('z-index', '3000')
    })


           //qx70_gal

     $("#qx70_gal .cerrar").click(function(e){
        e.preventDefault();
        $("#qx70_gal ").slideToggle();
         $("#cuatro").css('z-index', '800')
    })

      $("#qx70_gal .irprueba").click(function(e){
        e.preventDefault();
        $("#qx70_gal").slideToggle();
          $("#qx70Prueba ").slideToggle();
          $("#cuatro").css('z-index', '3000')
    })

     $("#qx70Fuera .btngal").click(function(e){
        e.preventDefault();
          $("#cuatro").css('z-index', '3000')
        $("#qx70_gal ").slideToggle();
         $("#uno").css('z-index', '3000')
    })


            //qx80_gal

     $("#qx80_gal .cerrar").click(function(e){
        e.preventDefault();
        $("#qx80_gal ").slideToggle();
         $("#cuatro").css('z-index', '800')
    })

      $("#qx80_gal .irprueba").click(function(e){
        e.preventDefault();
        $("#qx80_gal").slideToggle();
          $("#qx80Prueba ").slideToggle();
          $("#cuatro").css('z-index', '3000')
    })

     $("#qx80Fuera .btngal").click(function(e){
        e.preventDefault();
          $("#cuatro").css('z-index', '3000')
        $("#qx80_gal ").slideToggle();
         $("#uno").css('z-index', '3000')
    })



 function  enviar(cual) {

var modelo = $( cual+" .modelo").val();
var fecha = $(cual+" .fecha").val();
var nombre = $(cual+" .nombre").val();
var correo = $(cual+" .correo").val();
//var tel = $(cual+" .tel").val();
//var noticias = $(cual+" .noticias").val();

     /*
console.log($(cual+" .avisos"));
     if ($(cual+" .avisos").prop('checked'))
{
  var avisos = "terminos aceptados";
  alert(avisos);
}
*/
$(cual+" .returnmessage").empty(); // To empty previous error/success message.
// Checking for blank fields.
if (modelo == '' || fecha == '' || nombre == '' || correo == ''|| tel == ''  ) {
alert("Por favor llene los campos obligatorios y marque la casilla de avisos de privacidad");
} else {
// Returns successful data submission message when the entered information is stored in database.
$.post("contacto.php", {modelo1: modelo, fecha1: fecha, nombre1: nombre, correo1: correo, tel1: tel}, function(data) {

$(cual+" .returnmessage").append(data); // Append returned message to message paragraph.
if (data == "Sus datos fueron enviados.") {
$(cual)[0].reset(); // To reset form fields on success.
}
});
}
    e.preventDefault();
};


    /*
    $.post("contacto.php", {nombre1: nombre, email1: email, tel1: tel, mensaje1: mensaje}, function(data) {
$("#returnmessage").append(data); // Append returned message to message paragraph.
if (data == "Sus datos fueron enviados.") {
$("#formu")[0].reset(); // To reset form fields on success.
}
});
}
    e.preventDefault();
});
    */

    $("#f_1 .submit").click(function(e){
e.preventDefault();
        var cual="#f_1";
        enviar(cual);

    })

    $("#f_2 .submit").click(function(e){
e.preventDefault();
        var cual="#f_2";
        enviar(cual);

    })

     $("#f_3 .submit").click(function(e){
e.preventDefault();
         var cual="#f_3";
        enviar(cual);

    })

      $("#f_4 .submit").click(function(e){
e.preventDefault();
          var cual="#f_4";
        enviar(cual);

    })

        $("#f_5 .submit").click(function(e){
e.preventDefault();
          var cual="#f_5";
        enviar(cual);

    })

          $("#f_6 .submit").click(function(e){
e.preventDefault();
          var cual="#f_6";
        enviar(cual);

    })

       $("#f_pie .submit").click(function(e){
e.preventDefault();
           var cual="#f_pie";
        enviar(cual);

    })


///////////////////////////formu

//autos extras

       $("#qx70").click(function(e){
               e.preventDefault();
           $("#opa1").addClass("opa");
           $("#opa2").removeClass("opa");

           $("#qx80_extra").fadeOut(function(){
               $("#qx70_extra").slideToggle();
               var destino = "#qx70_extra"
    ira(destino)
           });



       })

        $("#qx80").click(function(e){
           e.preventDefault();
           $("#opa2").addClass("opa");
           $("#opa1").removeClass("opa");
            $("#qx70_extra").fadeOut(function(){
               $("#qx80_extra").slideToggle();
               var destino = "#qx80_extra"
              ira(destino)
           });



       })


    function ira(eldiv){
 $('html,body').animate({scrollTop: $( eldiv ).offset().top+20});
    }

    new WOW().init()

    //formu

     setTimeout(function() {
        $("#formu").animate({
            right: '-377px'
        }, 600, function(){$("#abrir_formu").fadeIn()});

    }, 1000);

    $("#cerrar_formu").click(function(){

         $("#formu").animate({
            right: '-377px'
        }, 600, function(){$("#abrir_formu").fadeIn()}  );
    })

     $("#abrir_formu").click(function(){

         $("#formu").animate({
            right: '0'
        }, 600, function(){$("#abrir_formu").fadeOut()} );
    })

      var sehizo= false;
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 300 && !sehizo) { // if scroll is greater/equal then 100 and sehizois set to false.
             $("#formu").animate({
            right: '-377px'
        }, 600, function(){$("#abrir_formu").fadeIn()}  );

            sehizo= true;
        }
    });



//fin ready
});
