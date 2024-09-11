// ts-check
import { writable } from 'svelte/store';

/**
 * @constant
 */
export const user = writable(getStorageUser());

/**
 * @name setStorageUser
 * @description Almacena los datos del usuario en el localStorage bajo la clave 'user'.
 * @returns {void}
 */
export function setStorageUser(user) {
  localStorage.setItem('user', JSON.stringify(user));
}

/**
 * @name getStorageUser
 * @description Obtiene los datos almacenados en la clave 'user' del localStorage, si existe.
 * @returns {Object|boolean} Devuelve el objeto JSON parseado almacenado en la clave 'user' del localStorage, o false si la clave no existe o los datos no son JSON válidos.
 */
export function getStorageUser() {
  return localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : false;
}

/**
 * @constant
 */
export const mode = writable(getStorageMode());

/**
 * @name setStorageUser
 * @description Almacena los datos del usuario en el localStorage bajo la clave 'user'.
 * @returns {void}
 */
export function setStorageMode(mode) {
  localStorage.setItem('mode', JSON.stringify(mode));
}

/**
 * @name getStorageMode
 * @description Obtiene los datos almacenados en la clave 'user' del localStorage, si existe.
 * @returns {Object|boolean} Devuelve el objeto JSON parseado almacenado en la clave 'mode' del localStorage, o false si la clave no existe o los datos no son JSON válidos.
 */
export function getStorageMode() {
  return localStorage.getItem('mode')
    ? JSON.parse(localStorage.getItem('mode'))
    : false;
}

/**
 * @constant
 */
export const contribuyenteStorage = writable(getStorageContribuyente());

/**
 * @name setStorageContribuyente
 * @param {string} contribuyente
 * @returns {void}
 */
export function setStorageContribuyente(contribuyente) {
  localStorage.setItem('contribuyente', JSON.stringify(contribuyente));
}

/**
 * @name getStorageContribuyente
 * @description Obtiene los datos almacenados en la clave 'contribuyente' del localStorage, si existe.
 * @returns {Object|boolean} Devuelve el objeto JSON parseado almacenado en la clave 'contribuyente' del localStorage, o false si la clave no existe o los datos no son JSON válidos.
 */
export function getStorageContribuyente() {
  return localStorage.getItem('contribuyente')
    ? JSON.parse(localStorage.getItem('contribuyente'))
    : null;
}

/////////////////

/**
 * @constant
 */
export const censoStorage = writable(getStorageCenso());

/**
 * @name setStorageCenso
 * @param {string} censo
 * @returns {void}
 */
export function setStorageCenso(censo) {
  localStorage.setItem('censo', JSON.stringify(censo));
}

/**
 * @name getStorageCenso
 * @description Obtiene los datos almacenados en la clave 'censo' del localStorage, si existe.
 * @returns {Object|boolean} Devuelve el objeto JSON parseado almacenado en la clave 'censo' del localStorage, o false si la clave no existe o los datos no son JSON válidos.
 */
export function getStorageCenso() {
  const censoData = localStorage.getItem('censo');

  if (censoData) {
    try {
      return JSON.parse(censoData);
    } catch (error) {
      console.error('Error parsing JSON from localStorage:', error);
      return [];
    }
  }
  return [];
}
