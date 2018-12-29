	var anterior = -1; 
	
	function seleccionar(n){
      var siguiente;
	  var longitud = $(".caja img").length;
	  var intervalo = 4000;
	        
      $("nav a").removeClass("on off");//Eliminamos todas las clases on y off
            
	  //Si no es la primera vez, cada vez que entramos en esta funci�n hay que acabar la animaci�n anterior y ocultar la imagen		
	  if (anterior != -1){
		$("#foto" + anterior).stop(true, true);
		$("#foto" + anterior).hide(0);		
	  }
	  
	  //ENLACE DE INTER�S
      //https://api.jquery.com/addclass/                        -> M�todo addClass
      //https://learn.jquery.com/using-jquery-core/iterating/   -> M�todos con y sin iteraci�n
      //addClass lleva impl�cita una iteraci�n sobre todos los elementos que cumpla el selector que devuelve el �ndice
      //Podemos decir que a�adimos una clase o que ejecutamos una funci�n que se ejecutar� sobre cada uno de los elementos que coincidan con el selector
      //Esta funci�n devuelve el n�mero de iteraci�n en el primer par�metro y si lo quisieramos la clase a la que pertenece en el segundo
      //En este caso s�lo recogemos el n�mero de iteraci�n y si esta coincide con la seleccionada le a�adimos on...en caso contrario off	  
	  $("nav a").addClass(function(j){
                    return(j===(n-1))?"on":"off";
                    });
   
   	  anterior = n;
	  
	  siguiente = ((n+1) % (longitud+1));//Marcamos el siguiente
	  siguiente = (siguiente!=0)?siguiente:1; //Como no hay elemento 0, partimos de 1
	  
	  $("#foto" + n).show(0);
	  $("#foto" + n).delay(intervalo).hide(0, function(){
		  $("#foto" + siguiente).show(0); 
		  seleccionar(siguiente)});
      	  
    }//Seleccionar
    
	function cargarImagenesInicio(){
	  var longitud = $(".caja img").length;
      
	  for (i=1; i<=longitud; i++){
		$("#foto" + i).css("display", "none");
	  }
	}
	
    function generar_selector(galeria){ // regenera la botonera
      var selector = $("#selector");	  
	  var longitud = $(".caja img").length;
	  var i;
	  
      selector.html("");
      for (i=1;i<=longitud;i++){
        selector.append("<li><a onClick='seleccionar("+i+");'></a></li>"); //Si pulsan el bot�n seleccionamos la imagen correspondiente
        }//for
    }//generar selector
	
	