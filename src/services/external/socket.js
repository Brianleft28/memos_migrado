// socket.js
import io from 'socket.io-client';
import config from '../../config.js';

let socket;

const conectarSocket = () => {
	if (!socket) {
		socket = io(config.app.io.uri, {
			path: "/pulse/",
			transports: ["polling"],
			forceNew: true
		}); // Cambia la URL según tu configuración

		socket.on('connect', () => {
			console.log('Conectado al servidor de Socket.IO');
		});

		socket.on('disconnect', () => {
			console.log('Desconectado del servidor de Socket.IO');
		});

		// Escucha otros eventos y maneja según sea necesario
	}
	return socket;
};

export default conectarSocket;
