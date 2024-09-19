import type { Secretaria } from '../../types/secretaria';
import BaseRepository from './BaseService';

export default class SecretariaService extends BaseRepository<Secretaria> {
  constructor() {
    super('secretarias', 1000);
  }

  validate(data: Secretaria): {
    isValid: boolean;
    errors: Record<string, string>;
  } {
    const errors: Record<string, string> = {};
    if (!data.nombre) {
      errors.nombre = 'El nombre es obligatorio';
    }
    if (!data.correo) {
      errors.correo = 'El correo es obligatorio';
    }
    if (!data.telefono) {
      errors.telefono = 'El teléfono es obligatorio';
    }
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
}
