var today = new Date();
var hourNow = today.getHours();
var saludo;

console.log(today);
console.log(hourNow);

if(hourNow >= 18)
{
    saludo = "Buenas Noches"
}
else if (hourNow<18 && hourNow>=12)
{
    saludo = "Buenas tardes"
}
else
{
    saludo = "Buenos d&iacute;as"
}

function saludar(nombre)
{
    document.write('<h3>'+saludo+' '+nombre+'</h3>');
}

saludar('Mateo');

