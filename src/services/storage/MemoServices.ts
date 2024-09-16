import type { Memo } from '../../types/memo';
import BaseRepository from './BaseService';

export class MemoService extends BaseRepository<Memo> {
  constructor() {
    super('memo', 1);
  }
  validate(data: Memo): {
    isValid: boolean;
    errors: Record<string, string>;
  } {
    let errors: Record<string, string> = {};

    if (data.detalle.trim() === '' || !data.detalle) {
      errors.detalle = 'El detalle es requerido';
    }

    if (!data.estado_id || data.estado_id.toString().trim() === '') {
      errors.estado = 'Debe seleccionar un estado';
    }

    if (!data.secretaria_id || data.secretaria_id.toString() === '') {
      errors.secretaria = 'Debe seleccionar una secretaría';
    }

    if (data.fecha.trim() === '' || !data.fecha) {
      errors.fecha = 'Debe seleccionar una fecha';
    } else if (isNaN(Date.parse(data.fecha))) {
      errors.fecha = 'La fecha no es válida';
    } else if (new Date(data.fecha) > new Date()) {
      errors.fecha = 'La fecha de inicio no puede ser mayor a la fecha actual';
    }
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
}
