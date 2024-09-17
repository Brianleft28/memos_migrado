export interface Dependencia {
  secretaria_id: number;
  nombre: string;
  correo: string;
  telefono: number;
}

export interface Secretaria {
  nombre: string;
  correo: string;
  telefono: number;
  dependencias: Dependencias[];
}
