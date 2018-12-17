$(document).ready(function(){
	function aparecer(){			
		//Cada div aparece tras el segundo de cada animación y 800 milisegundos extra de retardo
		$("div").each(function(i){
			$(this).delay(1000*i);
			$(this).fadeIn(800);			
		});			
	}		
	
	aparecer(); //Se hace una llamada al abrir la página y luego tantas como veces se haga click
	
	$("div").click(function(){
		//La función finish es la clave del buen funcionamiento de la animación
		//Cuando hay que reinicializar una animación es necesario finalizar la anterior para que no se solape
		$("div").finish();
		$("div").hide(1000);
		aparecer();
	});
	  
});