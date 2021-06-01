let p1 = document.getElementById('datos');
let p2 = document.getElementById('resultado');
let calculadora = document.getElementById('calculadora');

function agregar(num){
	p1.innerHTML+=num
	calcular();
}
function calcular(){
	p2.innerHTML=eval(p1.innerHTML);
}
function borrar(){
	p1.innerHTML="";
	p2.innerHTML="";
}
function resultado(){
	p1.innerHTML=p2.innerHTML;
	p2.innerHTML="";
}
function claro() {
	alert('dia');
	calculadora.style.backgroundColor = '#f7f7f7';
	document.getElementById('dia').style.backgroundColor = '#e5e5e5';
	document.getElementById('dia').src = "img/sun-dia.png";
	document.getElementById('noche').style.backgroundColor = '#e5e5e5';
	document.getElementById('noche').src = "img/moon.png";
	document.getElementById('datos').style.backgroundColor = '#f7f7f7';
	document.getElementById('datos').style.color = 'black';
	document.getElementById('resultado').style.backgroundColor = '#f7f7f7';
	document.getElementById('teclado').style.backgroundColor = '#e5e5e5';
	document.getElementById('botonC').style.backgroundColor = '#e5e5e5'
	let boton=document.querySelectorAll('#botonEX');
	let t=boton.length;
	for (i = t-1; i >= 0; i--) {
		boton[i].style.color = 'black';
		boton[i].style.backgroundColor = '#e5e5e5';
	}
	boton=document.querySelectorAll('#botonV');
	t=boton.length;
	for (i = t-1; i >= 0; i--) {
		boton[i].style.color = 'black';
		boton[i].style.backgroundColor = '#e5e5e5';
	}
	boton=document.querySelectorAll('#boton');
	t=boton.length;
	for (i = t-1; i >= 0; i--) {
		boton[i].style.color = 'black';
		boton[i].style.backgroundColor = '#c4c4c4';
	}
}
function oscuro() {
	alert('noche');
	calculadora.style.backgroundColor = '#1f243d';
	document.getElementById('dia').style.backgroundColor = '#343a59';
	document.getElementById('dia').src = "img/sun.png";
	document.getElementById('noche').style.backgroundColor = '#343a59';
	document.getElementById('noche').src = "img/moon-noche.png";
	document.getElementById('datos').style.backgroundColor = '#1f243d';
	document.getElementById('datos').style.color = 'white';
	document.getElementById('resultado').style.backgroundColor = '#1f243d';
	document.getElementById('teclado').style.backgroundColor = '#343a59';
	document.getElementById('botonC').style.backgroundColor = '#343a59'
	let boton=document.querySelectorAll('#botonEX');
	let t=boton.length;
	for (i = t-1; i >= 0; i--) {
		boton[i].style.color = 'white';
		boton[i].style.backgroundColor = '#343a59';
	}
	boton=document.querySelectorAll('#botonV');
	t=boton.length;
	for (i = t-1; i >= 0; i--) {
		boton[i].style.color = 'black';
		boton[i].style.backgroundColor = '#343a59';
	}
	boton=document.querySelectorAll('#boton');
	t=boton.length;
	for (i = t-1; i >= 0; i--) {
		boton[i].style.color = '#78eeeb';
		boton[i].style.backgroundColor = '#4c4f61';
	}
}