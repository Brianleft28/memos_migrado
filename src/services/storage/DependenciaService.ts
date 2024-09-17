import type { Dependencia } from '../../types/secretaria';
import BaseRepository from './BaseService';

export class DependenciaService extends BaseRepository<Dependencia> {
  constructor() {
    super('dependencia', 1);
  }
}
