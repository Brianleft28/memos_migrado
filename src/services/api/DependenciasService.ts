import type { Dependencia } from '../../types/secretaria';
import BaseService from './BaseService';

export default class SecretariaService extends BaseService<Dependencia> {
  constructor() {
    super('dependencias');
  }
}
