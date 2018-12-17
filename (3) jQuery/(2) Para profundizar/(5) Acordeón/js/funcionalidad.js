$(document).ready(function () {
	$( ".accordion" ).accordion({
		active: false,
		collapsible: true
	});

	$("#btn1").on("click", function () {
		$( ".accordion" ).accordion("option", "active", 0 );
	});
	$("#btn2").on("click", function () {
		$( ".accordion" ).accordion("option", "active", false );
	});
	
	//Se ha logrado el objetivo del enunciado porque creamos varios acordeones por separado
	//Por tanto, solo podemos seleccionar la opción 0 de cada uno
	//Dejo comentado el código para probar a añadir algún elemento a alguno de los acordeones y cambiarle la clase por "accordion1"
	//De esta forma, probamos que en este caso si que se seleccionan las opciones 0,1...

	/*$(".accordion1" ).accordion({
		active: false,
		collapsible: true
	});
	
	$( ".accordion1" ).click(function(){
		// Getter
		var active = $( ".accordion1" ).accordion("option", "active" );
	
		alert(active);
	})*/
});
