 $(document).ready(function() {

     $(".lateral").each(function(index) { //función que va a recorrer las diferentes fotos de la clase lateral (los puzzles)

         var nombreFoto = $(this).attr("id"); //las fotos laterales se llaman animalFoto, sólo los interesa recoger la parte del animal.
         var nombreAnimal = nombreFoto.replace("Foto", ""); //quitamos la parte de Foto

         var fotoLateralAlea = function() { //se va a encargar de recibir el animal en el cuál se ha hecho click
             $("#textoCabecera").text("Has seleccionado el " + nombreAnimal);
             $("#textoCabecera").css({ "color": "blue", "font-weight": "bolder" });

             $(".listas:not(#" + nombreAnimal + ")").each(function(index) { //con esto le decimos que todos los elementos NO seleccionados 
                //se oculten para que no se nos apilen las imagenes
                 $(this).hide();
             });

             $("#" + nombreAnimal).show(); //mostramos el puzzle seleccionado
             $("#textoCabecera").animate({ letterSpacing: "8px" }, 2000, function() { //creamos funcion y su callback para que la animación 
                //empiece cada vez que accedemos a una imagen
                 $("#textoCabecera").animate({ letterSpacing: "1px" }, 1000);
             });
         };

         $(this).click(fotoLateralAlea.bind(this)); //crea una nueva función, que cuando es llamada, asigna a this el valor entregado

         $("#revolver").click(function() { //función click que va a colocar al azar los elementos li para poder realizar el puzzle
             var $ul = $('#' + nombreAnimal);
             var $li = $('#' + nombreAnimal + 'li');
             $('li', $ul).sort(function() {
                 return (Math.round(Math.random()) - 0.5)
             }).appendTo($ul);
         });

         $(function() { //funcion sortable que va a permitir poder mover los elementos.
             $("#" + nombreAnimal).sortable();
         });

     });

/*Distintas funciones para ordenar los puzzles según el animal. No se pueden parametrizar (reunir) ya que mezcla todos*/

     /*perro*/
     $("#ordenar").click(function() {

         $(function() {
             $("#perro li").sort(sort_li).appendTo("#perro");

             function sort_li(a, b) {
                 return ($(b).data('position')) < ($(a).data('position')) ? 1 : -1;
             }
         });
     })

     /*aguila*/
     $("#ordenar").click(function() {
         $(function() {
             $("#aguila li").sort(sort_li).appendTo('#aguila');

             function sort_li(a, b) {
                 return ($(b).data('position')) < ($(a).data('position')) ? 1 : -1;
             }
         });
     })



     /*escarabajo*/
     $("#ordenar").click(function() {
         $(function() {
             $("#escarabajo li").sort(sort_li).appendTo('#escarabajo');

             function sort_li(a, b) {
                 return ($(b).data('position')) < ($(a).data('position')) ? 1 : -1;
             }
         });
     })

 });