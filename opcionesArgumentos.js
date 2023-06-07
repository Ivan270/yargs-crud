// OPCIONES ARGUMENTOS
const opcionesBuscar = {
	// objeto con argumentos que recibirá el comando 'buscar'
	id: {
		describe: 'Argumento recibe el ID del usuario a buscar',
		demand: true,
		alias: 'i',
	},
};
const opcionesAgregar = {
	nombre: {
		describe: 'Argumento que recibe el nombre del usuario',
		demand: true,
		alias: 'n',
	},
	apellido: {
		describe: 'Argumento que recibe el apellido del usuario',
		demand: true,
		alias: 'a',
	},
	edad: {
		describe: 'Argumento que recibe la edad del usuario',
		demand: true,
		alias: 'e',
		type: 'number',
	},
};
const opcionesActualizar = {
	id: {
		describe: 'Argumento que recibe la ID del usuario a modificar',
		demand: true,
	},
	nombre: {
		describe: 'Argumento que recibe el nombre del usuario a modificar',
		demand: false,
		alias: 'n',
	},
	apellido: {
		describe: 'Argumento que recibe el apellido del usuario a modificar',
		demand: false,
		alias: 'a',
	},
	edad: {
		describe: 'Argumento que recibe la edad del usuario a modificar',
		demand: false,
		alias: 'e',
		type: 'number',
	},
};
const opcionesEliminar = {
	id: {
		describe: 'Argumento que recibe la ID del usuario a modificar',
		demand: true,
	},
};

module.exports = {
	opcionesBuscar,
	opcionesActualizar,
	opcionesAgregar,
	opcionesEliminar,
};
