import type { Launch } from '@/types/launch';
import HttpClient from '../http/HttpClient';
import type { Countries } from '@/types';

export class MainApi extends HttpClient {
  private static classInstance?: MainApi;

  private constructor() {
    super(import.meta.env.VITE_API_URL);
  }

  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new MainApi();
    }

    return this.classInstance;
  }


  public getCountries = () => this.instance.get<Countries.RootObject[]>('/all');
  
  public getCountry = (name: string) => this.instance.get<Countries.RootObject>(`/name/${name}`);
}
