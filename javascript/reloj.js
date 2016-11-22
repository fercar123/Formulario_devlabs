(function(){
	var act_hora=function(){
		var fecha=new Date(),
		dia=fecha.getDate(),
		mes=fecha.getMonth(),
		year=fecha.getFullYear(),
		dia_nombre=fecha.getDay();

		var pDia=document.getElementById("dia"),
		pYear=document.getElementById("year"),
		pMes=document.getElementById("mes")
		pDia_semana=document.getElementById('name_dia_1');

		var semana=['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
		pDia_semana.textContent= semana[dia_nombre];
		pDia.textContent=dia;

		var meses=['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
		pMes.textContent=meses[mes];
		pYear.textContent=year;

	};
	act_hora();
	var intervalo=setInterval(act_hora,1000);

}())