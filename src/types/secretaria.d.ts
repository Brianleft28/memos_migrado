type TipoDependencia =
  | 'Dirección'
  | 'Subsecretaría'
  | 'Coordinación'
  | 'Departamento';

export interface Dependencia {
  secretaria_id: number;
  tipo: TipoDependencia;
  nombre: string;
  correo: string;
  telefono: number;
}

// Interfaz base para la secretaria
export interface BaseSecretaria {
  id?: number;
  nombre: string;
  correo: string;
  telefono: number;
}

// Secretaria sin dependencias
export interface Secretaria extends BaseSecretaria {}

// Secretaria con dependencias
export interface SecretariaWithDependencias extends BaseSecretaria {
  dependencias: Dependencia[];
}
