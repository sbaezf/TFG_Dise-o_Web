$(document).ready(function() {
	//Contador de imagen
	var contador = 1;
	
	//Número de segundos inicial
	var segundos = 0;

	//Función que permite generar la posición horizontal
	function calcularAncho(){
		//Hay que tener en cuenta el ancho de las imágenes y 
		//del componente que genera los fuegos artificiales			
		var anchoImagen = $(".fuego").width();			
		
		var ancho = window.innerWidth - anchoImagen;
		
		var left = Math.trunc(Math.random()*ancho)+1;
		
		return left;
	}
	
	//Función que permite generar la posición vertical
	function calcularAlto(){
		//Hay que tener en cuenta el alto de las imágenes
		var altoImagen = $(".fuego").height();
		var altoDetonador = $("#bloque1").height();				
		var alto = window.innerHeight - altoImagen - altoDetonador;
		
		var top = Math.trunc(Math.random()*alto)+1;
		
		return top;				
	}			

	$("#bloque1").click(function(){
		var left = calcularAncho();
		var top = calcularAlto();
	
		//Si ya se han mostrado las cinco imágenes, ocultarlas y volver a generar otra					
		if (contador > 5){
			$(".fuego").fadeOut(segundos);
			contador = 1;
		}				
		
		$("#fuego" + contador).css("left", left + "px");
		$("#fuego" + contador).css("top", top + "px");
		$("#fuego" + contador).css("z-index", contador);
		
		//Función callback para que se muestre la imagen correspondiente cuando se haya posicionado
		$("#fuego" + contador).fadeIn(segundos);
		
		contador++;
	});
	
	//Aumenta tiempo de ejecución de animaciones y tamaño de cabecera
	$("#aumentar").click(function(){
		segundos += 1000;
		$("#textoCabecera").animate({fontSize: "+=1px"}, segundos);				
	});
	
	//Disminuye tiempo de ejecución de animaciones y tamaño de cabecera
	$("#disminuir").click(function(){
		if (segundos > 0){
			segundos -= 1000;
		}				
		$("#textoCabecera").animate({fontSize: "-=1px"}, segundos);				
	});
});