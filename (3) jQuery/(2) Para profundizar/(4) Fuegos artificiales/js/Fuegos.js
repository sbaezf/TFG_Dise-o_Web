$(document).ready(function() {
	//Contador de imagen
	var contador = 1;
	
	//Contador ejecuciones			
	var textoEstandar = "Voy a aprobar DIW"
	
	//N�mero de segundos inicial
	var segundos = 0;

	//Funci�n que permite generar la posici�n horizontal
	function calcularAncho(){
		//Hay que tener en cuenta el ancho de las im�genes y 
		//del componente que genera los fuegos artificiales			
		var anchoImagen = $(".fuego").width();			
		
		var ancho = window.innerWidth - anchoImagen;
		
		var left = Math.trunc(Math.random()*ancho)+1;
		
		return left;
	}
	
	//Funci�n que permite generar la posici�n vertical
	function calcularAlto(){
		//Hay que tener en cuenta el alto de las im�genes
		var altoImagen = $(".fuego").height();
		var altoDetonador = $("#bloque1").height();				
		var alto = window.innerHeight - altoImagen - altoDetonador;
		
		var top = Math.trunc(Math.random()*alto)+1;
		
		return top;				
	}			

	$("#bloque1").click(function(){
		var left = calcularAncho();
		var top = calcularAlto();
	
		//Si ya se han mostrado las cinco im�genes, ocultarlas y volver a generar otra					
		if (contador > 5){
			$(".fuego").fadeOut(segundos);
			contador = 1;
		}				
		
		$("#fuego" + contador).css("left", left + "px");
		$("#fuego" + contador).css("top", top + "px");
		$("#fuego" + contador).css("z-index", contador);
		
		//Funci�n callback para que se muestre el detonador cuando hayamos terminado
		$("#fuego" + contador).fadeIn(segundos);
		
		contador++;
	});
	
	//Aumenta tiempo de ejecuci�n de animaciones y tama�o de cabecera
	$("#aumentar").click(function(){
		segundos += 1000;
		$("#textoCabecera").animate({fontSize: "+=1px"}, segundos);				
	});
	
	//Disminuye tiempo de ejecuci�n de animaciones y tama�o de cabecera
	$("#disminuir").click(function(){
		if (segundos > 0){
			segundos -= 1000;
		}				
		$("#textoCabecera").animate({fontSize: "-=1px"}, segundos);				
	});
});