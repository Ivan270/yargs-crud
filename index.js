const { v4: uuid } = require('uuid');
// process.argv muestra los argumentos incluidos en la CLI
//'node ./index.js COMANDO'
process.argv.splice(0, 2);
let argumentos = process.argv;

let comando = argumentos[0];

let usuarios = [
	{ id: 1, nombre: 'Carlos', apellido: 'Soto', edad: 35 },
	{ id: 2, nombre: 'Mauricio', apellido: 'Castillo', edad: 40 },
	{ id: 3, nombre: 'Javier', apellido: 'Hormazabal', edad: 22 },
];

switch (comando) {
	case 'buscar':
		let id = argumentos[1];
		let usuarioBuscar = usuarios.find((usuario) => usuario.id == id);
		usuarioBuscar
			? console.log(usuarioBuscar)
			: console.log('Usuario no encontrado');
		break;
	case 'todos':
		console.table(usuarios);
		break;
	case 'agregar':
		let nuevoUsuario = {
			id: uuid().slice(0, 6),
			nombre: argumentos[1],
			apellido: argumentos[2],
			edad: Number(argumentos[3]),
		};
		usuarios.push(nuevoUsuario);
		console.log('Lista de usuarios actualizada');
		console.table(usuarios);
		break;
	case 'eliminar':
		let idEliminar = argumentos[1];
		let index = usuarios.findIndex((usuario) => usuario.id == idEliminar);
		usuarios.splice(index, 1);
		console.log('Usuario eliminado');
		console.table(usuarios);
		break;
	case 'actualizar':
		let idActualizar = argumentos[1];
		let indexActualizar = usuarios.findIndex(
			(usuario) => usuario.id == idActualizar
		);

		let usuarioEncontrado = usuarios[indexActualizar];
		usuarioEncontrado.nombre = argumentos[2];
		usuarioEncontrado.apellido = argumentos[3];
		usuarioEncontrado.edad = Number(argumentos[4]);
		console.log('Usuario actualizado');
		console.table(usuarios);

		break;
	default:
		console.log('Comando no válido');
		break;
}
