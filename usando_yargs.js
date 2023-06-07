const yargs = require('yargs');
// Importación de opciones, funciones y array de usuarios
const {
	opcionesBuscar,
	opcionesActualizar,
	opcionesAgregar,
	opcionesEliminar,
} = require('./opcionesArgumentos.js');
const {
	buscar,
	agregar,
	actualizar,
	eliminar,
} = require('./funcionesYargs.js');
const usuarios = require('./usuariosYargs.js');

const argv = yargs
	.command(
		'mostrarTodo',
		'Permite mostrar todos los usuarios',
		console.log(usuarios)
	)
	.command('buscar', 'Permite buscar usuario por ID', opcionesBuscar, buscar)
	.command('agregar', 'Permite agregar un usuario', opcionesAgregar, agregar)
	.command(
		'actualizar',
		'Permite modificar un usuario existente',
		opcionesActualizar,
		actualizar
	)
	.command(
		'eliminar',
		'Permite eliminar un usuario',
		opcionesEliminar,
		eliminar
	)
	.help().argv;
