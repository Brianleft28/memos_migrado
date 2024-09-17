import axios from 'axios';
import type { AxiosInstance } from 'axios';

export default abstract class BaseService<T> {
  protected api: AxiosInstance;
  protected resource: string;

  constructor(resource: string) {
    this.resource = resource;
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    console.log('Base URL:', baseURL); // Verificar si la URL base se carga correctamente
    this.api = axios.create({
      baseURL
    });
  }
  async getAll(): Promise<T[]> {
    const response = await this.api.get<T[]>(`/${this.resource}`);
    return response.data;
  }
}
