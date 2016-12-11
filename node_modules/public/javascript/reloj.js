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

		var semana=['DOMINGO','LUNES','MARTES','MIÉRCOLES','JUEVES','VIERNES','SÁBADO'];
		pDia_semana.textContent= semana[dia_nombre];
		pDia.textContent=dia;

		var meses=['ENE','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
		pMes.textContent=meses[mes];
		pYear.textContent=year;

	};
	act_hora();
	var intervalo=setInterval(act_hora,1000);

}())