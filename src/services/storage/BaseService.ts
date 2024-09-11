export default abstract class BaseRepository<T> {
  private storageName: string;
  private maxItems?: number;

  constructor(storageName: string, maxItems: number = 1) {
    this.storageName = storageName;
    this.maxItems = maxItems;
  }

  getAll(): T[] {
    const data = localStorage.getItem(this.storageName);
    return data ? JSON.parse(data) : [];
  }

  save(items: T[]): void {
    try {
      localStorage.setItem(this.storageName, JSON.stringify(items));
      console.log(`Guardado en el local storage ${this.storageName}`);
    } catch (error) {
      console.error('Error al guardar en el local storage', error);
    }
  }

  add(item: T): void {
    if (this.maxItems && this.maxItems === this.getAll().length) {
      throw new Error('No se pueden agregar de un item al local storage');
    }
    const items = this.getAll();
    items.push(item);
    this.save(items);
  }

  clear(): void {
    localStorage.removeItem(this.storageName);
  }

  protected isValidEmail(email: string): boolean {
    return email.includes('@') && email.includes('.');
  }
}
