import type { Secretaria } from '../../types/secretaria';
import BaseService from './BaseService';

export default class SecretariaService extends BaseService<Secretaria> {
  constructor() {
    super('secretarias');
  }
}
