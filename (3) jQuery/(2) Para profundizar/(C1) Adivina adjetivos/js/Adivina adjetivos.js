$(document).ready(function() {

	$("span").hover(
		function () { $(this).addClass("hilite"); }, 
		function () { $(this).removeClass("hilite");}
	); 
		
	 $("span").click(function () {
		$(this).fadeOut(1000, function () { //Esta función desvanece el elemento que se ha clickado
			$("div").text("'" + $(this).text() + "' ¡Se ha desvanecido! Haz click en el texto en rojo para mostrar de nuevo los adjetivos adivinados");
			$(this).fadeOut();
		}); //function del fade
	}); //function del click			
	  
	$("div").click(function () { 
		$("p > span").each(function(){ //A la hora de mostrar, solo se subrayan aquellos adjetivos que ya ha adivinado el usuario
			if ($(this).is(":hidden")){
				$(this).fadeIn();
				$(this).css("text-decoration", "underline");
			}					
		});	//function del each				
	}); //function del click
	  
});