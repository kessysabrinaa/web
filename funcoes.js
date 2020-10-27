var data = new Date();

var mes = document.getElementById("mes");
mes.textContent = data.toLocaleDateString(navigator.language, {month:"long"});

var diaSemana = document.getElementById("diaSemana");
diaSemana.textContent = data.toLocaleDateString(navigator.language, {weekday: "long"});

var diaMes = document.getElementById("diaMes");
diaMes.textContent = data.getDate();

var ano = document.getElementById("ano");
ano.textContent = data.getFullYear();


function mostrarHora() {
    var timer = new Date();
    var hour = timer.getHours();
    hour -= 1;
    var minute = timer.getMinutes();
    var second = timer.getSeconds();
    if(hour<10)   hour  ="0"+hour;
    if(minute<10) minute="0"+minute;
    if(second<10) second="0"+second;
    var frase = hour+":"+minute+":"+second;
    document.getElementById("horario").innerHTML = frase; 
   }
   function fazfuncionar() {
    setInterval(mostrarHora,1000);
   }





