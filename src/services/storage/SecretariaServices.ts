import type { Secretaria } from '../../types/secretaria';
import BaseRepository from './BaseService';

export default class SecretariaService extends BaseRepository<Secretaria> {
  constructor() {
    super('secretaria', 1);
  }
}
