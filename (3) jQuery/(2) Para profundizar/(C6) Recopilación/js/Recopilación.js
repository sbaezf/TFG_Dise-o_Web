$(document).ready(function() {
	//Variable que contiene el id del elemento seleccionado actualmente
	var actual = "cuadrado1";

	//Función callback de cada uno de los efectos
	function comprobar(){
		alert("Se ha actualizado correctamente");
	}
	
	//El evento mouseenter permite seleccionar el cuadrado sobre el cual queremos aplicar un efecto
	$("div").mouseenter(function() {
		$("#" + actual).text("");
		actual = $(this).attr("id");			
		$("#" + actual).text("Actual");
	});			
	
	//Transforma una cadena númerica en un objeto de tipo Number
	//Puede servir de ayuda para recibir el parámetro del input con la cantidad de segundos
	function convertirNumero(cadena){
		return eval(cadena);
	}

	//Este método aplica los efectos, según la elección del usuario
	$("#desvanecer").click(function(){
		var tiempo = $("#tiempo").val();			
		
		if ($("#" + actual).is(":hidden")){
			alert("El elemento seleccionado está oculto");
		} else {
			$("#" + actual).fadeOut(convertirNumero(tiempo)*1000, comprobar);
		}	
	});
	
	//Permite que aparezcan aquellos componentes que se han ocultado previamente			
	$("#aparecer").click(function(){
		var cont = $("#div").length;
		var tiempo = $("#tiempo").val();
	
		for (i=1; i<=3; i++){								
			$("#cuadrado" + i).fadeIn(convertirNumero(tiempo)*1000);
		}
	});
	
});