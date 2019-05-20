//Arreglo de Objetos Curso "cursos"
const cursos = [
	{
		id: 1,
		nombre: 'NodeJS',
		duracion: '36',
		valor: 0
	},
	{
		id: 2,
		nombre: 'Java',
		duracion: '60',
		valor: 1820000
	},
	{
		id: 3,
		nombre: 'Scala',
		duracion: '24',
		valor: 2450000
	}
];

//Función para ver la información de los Cursos
let verInfoCursos = () => {
	console.log('*** Cursos ***');
	for (var i = 0; i < cursos.length; i++) {
		let curso = cursos[i];
		let segundos = 2*(i+1);
		verInfoCurso(curso, segundos);
	}
};

//Función para ver la Inforación de un Curso en X Segundos
let verInfoCurso = (curso, segundos) =>{
	setTimeout(function(){
		let mensaje = '> El curso de ' + curso.nombre +' con Id ' + curso.id +
						'; Tiene una Duración de ' + curso.duracion +
						' horas y un valor de $' + curso.valor + '.';
		console.log(mensaje);
	}, segundos*1000); 
}

//Función para buscar Curso por Id 
let buscarCurso = (idCurso) => {
	return cursos.find(curso => curso.id == idCurso);
};

//Función para inscribirse en el curso 
let inscribir = (idCurso, nombre, cedula) => {
	let mensaje = '';
	let cursoEncontrado = buscarCurso(idCurso);
	if(cursoEncontrado){
		mensaje = ' '+ nombre + ' con cédula ' + cedula +'\n'+ 
					' Fue inscrit@ en el curso de ' + cursoEncontrado.nombre + ' con Id ' + cursoEncontrado.id +'\n'+ 
					' Con una duración de ' + cursoEncontrado.duracion + ' horas y un costo de $' + cursoEncontrado.valor;
		escribirEnArchivo(mensaje);
		console.log(mensaje);
	}else{
		mensaje = '*** No se encontro el curso con Id ' + idCurso + ' ***';
		console.log(mensaje);
		verInfoCursos();
	}
};

// constante "fs" para manejo de archivos
const fs = require('fs');

//Función para escribir en el archivo 
let escribirEnArchivo = (texto) => {
	fs.writeFile('inscripciones.txt', texto, (err) => {
		if(err) throw(err);
	});
};

// Opciones para Inscripción
const opciones = {
	id:{
		demand : true,
		alias: 'i'
	},
	cedula:{
		demand : true,
		alias: 'c'
	},
	nombre:{
		demand : true,
		alias: 'n'
	}
};

const argv = require('yargs')
	.command('inscribir','*** Proceso de Inscripción ***', opciones)
	.argv;

module.exports = {
	verInfoCursos,
	inscribir,
	argv
};