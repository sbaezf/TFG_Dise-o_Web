$(document).ready(function() {
	//Función que permite comprobar si el cuadrado se encuentra dentro de las coordenadas del cuadrado central
	var comprobar = function (){
		var x1 = $(".block").offset().left;
		var y1 = $(".block").offset().top;	
		var x2 = $(".cuadrado").offset().left;
		var y2 = $(".cuadrado").offset().top;
		
		//Devuelve las coordenadas finales del cuadrado central ("outer" devuelve el ancho, incluyendo padding, borde y margen)
		var ancho = $(".block").outerWidth();
		var alto = $(".block").outerHeight();
		
		//Las coordenadas límite serán: las del cuadrado más su ancho o altos
		var limiteX = x2 + $(".cuadrado").outerWidth();
		var limiteY = y2 + $(".cuadrado").outerHeight();
		
		if ((x1 >= x2) && (y1 >= y2) && ((x1 + ancho) <= limiteX) && ((y1 + alto) <= limiteY)){				
			$("#texto").hide();
			$(".block").css("background-color", "red");
		} else {
			$("#texto").show();
			$(".block").css("background-color", "greenyellow");
		}	
	};	

	$("#right").click(function(){ //Animación del botón derecho.			
		$(".block").animate({"left": "+=" + $("#mov").val() + "px"}, "slow", comprobar);						
	});
	$("#left").click(function(){//Animación del botón izquierdo.
		$(".block").animate({"left": "-=" + $("#mov").val() + "px"}, "slow", comprobar);
	});
	$("#top").click(function(){ //Animación del botón derecho.
		$(".block").animate({"top": "-=" + $("#mov").val() + "px"}, "slow", comprobar);
	});
	$("#bottom").click(function(){//Animación del botón izquierdo.
		$(".block").animate({"top": "+=" + $("#mov").val() + "px"}, "slow", comprobar);
	});
	$("div").click(function(){ //al hacer click en div, cambia de tamaño
	  $("div").animate({
		width: "70%",
		opacity: 0.5,
		marginLeft: "0.6in",
		fontSize: "3em",
		borderWidth: "10px"
	  }, 1500 );
	}); 
	
	//Deshabilita el evento click
	$("div").off("click");
	
	$(".block").draggable({
		stop: function( event, ui ) {
			comprobar();
		}
	})
	
	//Otra opción es comprobar si el elemento está dentro con droppable,
	//pero no se hace bien del todo ya que en cuanto toca un borde se considera que está en el contenedor
	
	/*$(".block").draggable();
	
	$(".cuadrado").droppable({
	  drop: function( event, ui ) {
		$(".block").css("background-color", "red");
		$("#texto").hide();
	  },
	  out: function( event, ui ) {
		$(".block").css("background-color", "greenyellow");
		$("#texto").show();
	  }
	})*/
});
