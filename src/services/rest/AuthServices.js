'use strict';
import axios from "axios";
import config from "../../config.js"

export default class AuthServices {
	/**
	 * @constructor
	 */
	constructor() {
		this.instance = axios.create({
			baseURL: config.app.api.auth
		});
		this.instance.defaults.timeout = 2500;
		// this.instance.defaults.headers.post['Content-Type'] = 'multipart/form-data';
	}

	/**
	 * @name attemp
	 * @param {number} legajo
	 * @param {string} password
	 * @returns {Promise}
	 */
	async attemp(legajo, password) {
		try {
			const auht = await this.instance.post(`/login`, {
				legajo,
				password,
			});
			return auht;
		} catch (error) {
			return error;
		}
	}

	/**
	 * @name changePassword
	 * @param {number} legajo
	 * @param {string} password
	 * @param {string} repassword
	 * @returns {Promise}
	 */
	async changePassword(legajo, password, repassword) {
		// console.info(legajo, password, repassword);
		try {
			const auht = await this.instance.post('/change-password', {
				legajo,
				password,
				repassword
			});
			return auht;
		} catch (error) {
			return error;
		}
	}
}

