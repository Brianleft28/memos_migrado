'use strict';
import axios from 'axios';
import config from '../../config.js';

export default class BaseService {
  /**
   * @constructor
   */
  constructor() {
    this.instance = axios.create({
      baseURL: config.app.api.uri
    });
    this.instance.defaults.timeout = 2500;
    this.instance.defaults.headers.post['Content-Type'] = 'multipart/form-data';
  }

  resourse(param) {
    this.resourse = param || 'recurso';
  }

  /**
   * @name find
   * @returns {Promise}
   */
  async find() {
    try {
      const result = await this.instance.get(`/${this.resourse}`);
      return result;
    } catch (error) {
      return error;
    }
  }

  /**
   * @name findOne
   * @param {number} id
   * @returns {Promise}
   */
  async findOne(id) {
    try {
      const result = await this.instance.get(`/${this.resourse}/${id}`);
      return result;
    } catch (error) {
      return error;
    }
  }

  /**
   * @name create
   * @param {object} datos
   * @returns {Promise}
   */
  async create(datos) {
    console.log(datos);
    try {
      const { data } = await this.instance.post(`/${this.resourse}`, datos, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      return data;
    } catch (error) {
      return error;
    }
  }

  /**
   * @name update
   * @param {number} id
   * @param {object} datos
   * @returns {Promise}
   */
  async update(id, datos) {
    try {
      const result = await this.instance.patch(
        `/${this.resourse}/${id}`,
        datos
      );
      return result;
    } catch (error) {
      return error;
    }
  }

  /**
   * @name remove
   * @param {number} id
   * @returns {Promise}
   */
  async remove(id) {
    try {
      const result = await this.instance.delete(`/${this.resourse}/${id}`);
      return result;
    } catch (error) {
      return error;
    }
  }
}
