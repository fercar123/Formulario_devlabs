(function(){
	//Variables
	var parrafo=document.getElementById("lista"),
	inputA=document.getElementById("a_tarea"),
	btnAgregar=document.getElementById("btn-a");

	// Funciones
	var agregarTarea =function(){
		var tarea = inputA.value,
		nuevaTarea=document.createElement("p"),
		enlace1=document.createElement("input"),
		enlace2=document.createElement("label"),
		contenido=document.createTextNode(tarea);
		enlace1.setAttribute("type","checkbox");
		

        if(tarea === ""){
        	inputA.setAttribute("placeholder","Agrega una Tarea Valida");
        	inputA.className="error";
        	return false;

        }
        //Agregamos el contenido al enlace2
        enlace2.appendChild(contenido);
        //Agregamos los dos enlaces a nuevaTarea
        nuevaTarea.appendChild(enlace1);
        nuevaTarea.appendChild(enlace2);
        //Agregamos los atributos Tengo problemas aqui no se como mejor que math.random 
        if(tarea!=""){
        	var j=Math.random();
        enlace1.setAttribute("id",j);
        enlace2.setAttribute("for",j);
        
    };
        //Agregamos al div[class="lista"] la nueva Tarea
        parrafo.appendChild(nuevaTarea);
        //Para limpiar lo que dice
        inputA.value="";
        for(var i=0; i<=parrafo.children.length-1; i++){
     	parrafo.children[i].addEventListener("click",function(){
     		
        if(this.parentNode!=null){
     		var conf=confirm("¿Quieres borrar?");}
     		if(conf==true){
     		this.parentNode.removeChild(this);
     	    }
     		else{
                return false;
     		}
     	});
	};
}
	var comprobarInput=function(){
		inputA.className="";
		inputA.setAttribute("placeholder","Agrega Tarea");

	};
	var eliminarTarea=function(){
		
		var conf=confirm("¿Quieres borrar?");
		if(conf==true){
		this.parentNode.removeChild(this);}
		else{
           return false;
		}
		
	};
	//Eventos
	//Agregar Tarea
	btnAgregar.addEventListener("click",agregarTarea);
	
	
	//Comprobar Input
     inputA.addEventListener("click",comprobarInput);
    //Borrando elementos de los parrafos
   
     for(var i=0; i<=parrafo.children.length-1; i++){
     	parrafo.children[i].addEventListener("click",eliminarTarea);}
     

}());