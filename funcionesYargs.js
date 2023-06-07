const { v4: uuid } = require('uuid');
const usuarios = require('./usuariosYargs.js');

// FUNCIONES
const buscar = (argumentos) => {
	// callback con el objeto de 'argumentos'
	let id = argumentos.id;
	let usuarioBuscar = usuarios.find((usuario) => usuario.id == id);
	usuarioBuscar
		? console.log(usuarioBuscar)
		: console.log('Usuario no encontrado');
};
const agregar = (argumentos) => {
	let nuevoUsuario = {
		id: uuid().slice(0, 6),
		nombre: argumentos.nombre,
		apellido: argumentos.apellido,
		edad: argumentos.edad,
	};
	usuarios.push(nuevoUsuario);
	console.log('Lista de usuarios actualizada');
	console.table(usuarios);
};
const actualizar = (argumentos) => {
	let idActualizar = argumentos.id;
	let indexActualizar = usuarios.findIndex(
		(usuario) => usuario.id == idActualizar
	);
	let usuarioEncontrado = usuarios[indexActualizar];
	if (argumentos.nombre) {
		usuarioEncontrado.nombre = argumentos.nombre;
	}
	if (argumentos.apellido) {
		usuarioEncontrado.apellido = argumentos.apellido;
	}
	if (argumentos.edad) {
		usuarioEncontrado.edad = Number(argumentos.edad);
	}
	console.log('Usuario actualizado');
	console.table(usuarios);
};
const eliminar = (argumentos) => {
	let idEliminar = argumentos.id;
	let index = usuarios.findIndex((usuario) => usuario.id == idEliminar);
	usuarios.splice(index, 1);
	console.log('Usuario eliminado');
	console.table(usuarios);
};

module.exports = { buscar, agregar, actualizar, eliminar };
