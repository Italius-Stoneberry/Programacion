
var nombre = document.getElementById('Nombres');
var email = document.getElementById('Email');
var mens = document.getElementById('Mensaje');
var error = document.getElementById('error');
error.style.color ="red"
function enviarformulario(){
	console.log('Enviar formulario...');
	
	var mensajeError = [];
	
	if(nombre.value === null || nombre.value === ''){
		mensajeError.push('Ingrese Su Nombre');
	}
	if(email.value  === null || email.value === ''){
		mensajeError.push('Ingrese su Email');
	}
	error.innerHTML = mensajeError.join(', ');
	return false;
}

//in progress