import { writable } from 'svelte/store';

// Función para obtener el valor de localStorage o un valor predeterminado
function getIsDarkTheme() {
	const storedValue = localStorage.getItem('isDarkTheme');
	return storedValue !== null ? JSON.parse(storedValue) : false;
}

// Crea un almacén escribible (writable) para el tema
export const isDarkTheme = writable(getIsDarkTheme());

// Suscripción al almacén de tema para guardar en localStorage y establecer el atributo en el body
isDarkTheme.subscribe(value => {
	localStorage.setItem('isDarkTheme', JSON.stringify(value));
	const theme = value ? "dark" : "light";
	document.querySelector("body").setAttribute("data-bs-theme", theme);
});

// Al cargar la página, establecer el tema según lo que esté almacenado en localStorage
if (localStorage.getItem('isDarkTheme') === null) {
	// Si el tema no está almacenado en localStorage, establecerlo según el sistema del usuario
	const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
	isDarkTheme.set(prefersDarkScheme);
} else {
	// Si el tema está almacenado en localStorage, usar ese valor
	const storedIsDarkTheme = JSON.parse(localStorage.getItem('isDarkTheme'));
	isDarkTheme.set(storedIsDarkTheme);
}

// Función para cambiar el tema
export function toggleTheme() {
	isDarkTheme.update(current => !current);
}


