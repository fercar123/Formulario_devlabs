(function(){
	//Variables
	var parrafo=document.getElementById("lista"),
	inputA=document.getElementById("a_tarea"),
	btnAgregar=document.getElementById("btn-a"),
	label=document.getElementsByClassName('l');


	// Funciones
	var agregarTarea =function(){
		var tarea = inputA.value,
		nuevaTarea=document.createElement("p"),
		enlace0=document.createTextNode(""),
		enlace1=document.createElement("input"),
		enlace2=document.createElement("label"),
		enlace3=document.createElement('a'),
		contenido=document.createTextNode(tarea);
		enlace1.setAttribute("type","checkbox");
		enlace3.setAttribute("href","#");
		enlace3.className="elim";

		if(tarea === ""){
        	inputA.setAttribute("placeholder","Agrega una Tarea Valida");
        	inputA.className="error";
        	return false;

		}

		//Agregamos el contenido al enlace2
		enlace2.appendChild(contenido);
		enlace2.className="l";

		//Agregamos los dos enlaces a nuevaTarea
		nuevaTarea.appendChild(enlace0);
        nuevaTarea.appendChild(enlace1);
		nuevaTarea.appendChild(enlace2);
		nuevaTarea.appendChild(enlace3);

		//Agregamos los atributos Tengo problemas aqui no se como mejor que math.random 
        if(tarea!=""){
        	var j=Math.random();
        enlace1.setAttribute("id",j);
        enlace2.setAttribute("for",j);
        //Agregamos al div[class="lista"] la nueva Tarea
        parrafo.appendChild(nuevaTarea);
        //Para limpiar lo que dice
		inputA.value="";

		for(i=0; i<=label.length-1; i++){
			label[i].addEventListener("click",verificarElim);
		};

		
};



	}
		var comprobarInput=function(){
		inputA.className="";
		inputA.setAttribute("placeholder","Agrega Tarea");

		};

		var verificarElim=function(){
			var enlace=this.parentNode.lastChild,
			cheque=this.parentNode.childNodes[1];

			if(cheque.checked===false){
  			enlace.textContent= "Eliminar Tarea";
			}else{
 			 enlace.textContent='';
			}
			enlace.addEventListener("click",Eliminar);
		};
		var Eliminar=function(){
		this.parentNode.parentNode.removeChild(this.parentNode);}



	//Eventos
		//Agregar Tarea
		btnAgregar.addEventListener("click",agregarTarea);



		inputA.addEventListener("click",comprobarInput);

		for(i=0; i<=label.length-1; i++){
			label[i].addEventListener("click",verificarElim);
		};
}());