import axios from 'axios';
import type { AxiosInstance } from 'axios';

export default abstract class BaseService<T> {
  protected api: AxiosInstance;
  protected resource: string;

  constructor(resource: string) {
    this.resource = resource;
    const baseURL = import.meta.env.VITE_API_BASE_URL;
    this.api = axios.create({
      baseURL
    });
  }
  async getAll(): Promise<T[]> {
    const response = await this.api.get<T[]>(`/${this.resource}`);
    return response.data;
  }

  async get(id: number): Promise<T> {
    const response = await this.api.get<T>(`/${this.resource}/${id}`);
    return response.data;
  }

  async create(data: T): Promise<T> {
    const response = await this.api.post<T>(`/${this.resource}`, data);
    return response.data;
  }

  async update(id: number, data: T): Promise<T> {
    const response = await this.api.put<T>(`/${this.resource}/${id}`, data);
    return response.data;
  }

  async delete(id: number): Promise<void> {
    await this.api.delete(`/${this.resource}/${id}`);
  }
}
