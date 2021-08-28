//Ejercicios de DOM
  //0)
    //0) En base al siguiente HTML, mostrar por consola el texto de los siguientes elementos:
	//a) El primer span
	//b) El primer span con clase “guayerd”
	//c) El span con id “hola”
	//d) Todos los span
	//e) Todos los elementos  con clase “guayerd”
	//f) Todos los span con clase “guayerd”.
	//g) Todos los span y párrafos.


//a)
/* console.log(document.querySelector("span").innerText);
//b)
console.log(document.querySelector(".guayerd").innerText);
//c)
//console.log(document.querySelector("#hola").innerText); */
//d)
//* document.querySelectorAll("span").forEach(e=>console.log(e)); */
//e)
/* document.querySelectorAll(".guayerd").forEach(e=>console.log(e)); */
//f)
//* document.querySelectorAll("span.guayerd").forEach(e=>console.log(e)); */
//g)
//* document.querySelectorAll("p,span").forEach(e=>console.log(e)); */
    


//1)
//Hacer un HTML nuevo con 1 titulo H1 sin clases ni ids, con 5 párrafos, de los cuales los dos primeros no tendrán ninguna clase ni id, los 2 siguientes tendrán la clase “rojo” , y el último id “Azul”.
//a) Al ID azul cambiarle el texto por “Azul”.
//b) Al primer párrafo cambiarle el texto por “Verde”.
//c) A los párrafos de la clase rojo cambiarles el texto por “Rojo”.
//d) A todos los párrafos agregarles un “!” al final del texto. 
//e) A todos los elementos (párrafos y título) Agregarles un “*” al principio del texto.

//a)
/* console.log(document.getElementById("azul").innerText)
const nuevo_texto_id_azul =document.querySelector("#azul")
nuevo_texto_id_azul.textContent= "Azul";
console.log(nuevo_texto_id_azul); */
//b)
/* console.log(document.querySelector("p").innerText);

const parrafo1 =document.querySelector("p")
parrafo1.textContent="Verde";

console.log(parrafo1);
 */
//c)
/* 
 const clasesRojo =document.querySelectorAll(".rojo").forEach(e=>console.log(e.textContent = 'Rojo'));
 */
//d)
/* document.querySelectorAll("p").forEach(parrafo=>parrafo.innerText=`${parrafo.innerText}!`); */
//e)
/* document.querySelectorAll("p,h1").forEach(elemento=>elemento.innerHTML=`* ${elemento.innerHTML}`); */

//2)Crear una función flecha que en base a 2 datos de temperatura, 
//indique la temperatura media (Es decir, el promedio de ambas). 
//Mostrar el resultado con un mensaje en el HTML. 
//Por ejemplo en un párrafo, que indique: “La temperatura media es ….”. 

/* let tem1=parseInt (prompt("Ingrese una temperatura:"));
let tem2=parseInt(prompt("ingrese la otra temperatura:"));

const promedio = (t1,t2) => ((t1 + t2)/2);
document.querySelector("h5").innerHTML=`Su temperatura promedio es de ${(promedio(tem1,tem2))} grados`  ;



 */

//3)Crear una función flecha que solicite al usuario que elija
// entre las estaciones del año (Invierno, verano, primavera, otoño) y 
//mostrar una imagen que haga referencia a la estación elegida.

 /* const estacion=parseInt(prompt("Que estacion del Año prefiere? elija un numero: \n 1)verano \n 2)Otoño \n 3) Invierno \n 4) Primavera "));

const estaciones = estacion => {
	if (estacion==1) document.querySelector("img").src ="imagenes-estaciones/verano.png";
	if (estacion==2) document.querySelector("img").src ="imagenes-estaciones/otoño.gif";
	if (estacion==3) document.querySelector("img").src ="imagenes-estaciones/invierno.jpg";
	if (estacion==4) document.querySelector("img").src ="imagenes-estaciones/primavera.jpg";
}

estaciones(estacion) 
  */

//4)
//Crear una función flecha que calcule la edad del usuario. 
//Luego mostrar en el html un mensaje personalizado indicando si es mayor o menor de edad.

/* let edadUsuario=parseInt(prompt("Ingrese su edad : "));

const edad = n => n > 18|| n ==18 ? document.querySelector("h5").innerText= `Usted es Mayor de edad` : document.querySelector("h5").innerText =`Usted es Menor de edad `

edad(edadUsuario);

 */

// 5)Crear una función flecha que solicite al usuario su nombre y su animal favorito 
//(Dar 3 o 4 opciones). Mostrar por HTML un mensaje personalizado saludando a la persona y
// mostrando una foto de su animal favorito. 

/* const nombre =prompt(" Como es que Ud se llama ?? ");
const animal=prompt(" ...Y Cual es su animal favorito \n 1)pez \n 2)Perezoso  \n 3)Caballo ??").toLowerCase();

document.querySelector("p").innerText =`Bienvenido , ${nombre}!! No es ${animal}, El mas ♥??`;
 */
 
/* const animalFav =()=>{
	let nombre =prompt("Como se llama ?");
const animal=prompt("cual es su animal favorito?  \n 1)pez \n 2)Perezoso  \n 3)Caballo");
	switch(animal){
		case "pez":
			document.querySelector("img").src= "imagenes/pez.jpg"
			break;
		case "perezoso":
			document.querySelector("img").src= "imagenes/perezoso.jpg"
			break;
		case "caballo":
				document.querySelector("img").src= "imagenes/caballo.jpg"
			break;
		default:
			alert("Opcion invalida")
			break;
    }
	document.querySelector("h3").innerText=`Buenas ${nombre}, este es tu animal favorito `
}
setTimeout(function(){ 

	animalFav();
 }, 1000);

 document.querySelector("p") */


 //6)
 //Crear en el HTML un span con un ángulo del 0 al 360.
 // Luego calcular su opuesto y mostrarlo en otro span.
 // (Para calcular el opuesto se hace 360 - el ángulo. Por ejemplo: El opuesto de 90 es 270.) 
 //El mensaje debería ser:
//Ángulo: 90
//Opuesto: 270

/* let angulo1 = parseInt(prompt("ingrese un angulo"));
const opuesto = a => (360-a);

document.querySelector("span,.uno").innerHTML= ` El Angulo:  ${angulo1}º`;

document.querySelector("span.dos").innerHTML = ` Su angulo opuesto es ${opuesto(angulo1)}`  ;

 */  

//7)Generación de mails empresariales. 
//Le solicitamos al usuario su nombre, su apellido, su empresa y si su empresa es Argentina o no.
//Luego le mostraremos en el HTML un mensaje con su usuario nuevo:
//nombre.apellido@empresa.com(.ar si es argentina).

/* let nombre=prompt(" Su nombre :");
let apellido= prompt("Ingrese su apellido:");
let nacion = prompt('Su empresa es Argentina? \n 1-Si \n 2-No ');

const usuario = (nombre,apellido,nacion) => nacion=="si"? document.querySelector("p").innerHTML=` su nuevo usuario es ${nombre}.${apellido}@guayerd.com.ar`: document.querySelector("p").innerHTML=` su nuevo usuario es ${nombre}.${apellido}@guayerd.com`
console.log(usuario(nombre,apellido,nacion))
usuario(nombre,apellido,nacion);
 */

//8) 
//En un restaurante tienen menú del día según el día de la semana.
//a)  Crearemos una función flecha que reciba qué día de la semana es (Lunes a viernes) y mostraremos por HTML el menú con el nombre del plato y una imagen del mismo.
//b) Ahora además nos piden que coloquemos debajo del menú del día los precios a los platos que se piden a la carta. Realizarlo desde el javascript.

//Milanesas con puré ($300)
//Fideos con salsa ($250)
//Pizza ($400)
//Hamburguesas con papas fritas ($430)
//Pastel de papa  ($280)

//Lunes: Milanesas con puré 
//Martes: Fideos con salsa
//Miércoles: Pizza
//Jueves: Hamburguesas con papas fritas
//Viernes: Pastel de papa
//

/* let dia = prompt("Ingrese el dia de la Semana en el que se encuentra :")

const menu =(date)=> {
	if(date =="lunes"){
		document.querySelector("p").innerHTML=`Su menu del dia es Milanesas con pure`;
		document.querySelector("span").innerText="Su plato a solo $300 "
	    document.querySelector("img").src ="imagen/lunes.jpg";
		


	}
	else if (date =="martes"){
		document.querySelector("p").innerHTML=`Su menu del dia es fideos con Salsa`;
	    document.querySelector("img").src ="imagen/martes.jpg";
		document.querySelector("span").innerText="Su plato a solo $250 "
	}
	else if (date =="miercoles"){
		document.querySelector("p").innerHTML=`Su menu del dia es Pizza`;
	    document.querySelector("img").src ="imagen/miercoles.jpg";
		document.querySelector("span").innerText="Su plato a solo $400 "
	}
	else if (date =="jueves"){
		document.querySelector("p").innerHTML=`Su menu del dia es Hamburguesa con Fritas `;
	    document.querySelector("img").src ="imagen/jueves.jpg";
		document.querySelector("span").innerText="Su plato a solo $430"
	}
	else if (date =="viernes"){
		document.querySelector("p").innerHTML=`Su menu del dia es Pastel de Papas`;
	    document.querySelector("img").src ="imagen/viernes.jpg";
		document.querySelector("span").innerText="Su plato a solo $280 "
	}
}
 menu(dia);  */