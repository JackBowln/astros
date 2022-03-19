import type { Launch } from '@/types/launch';
import HttpClient from '../http/HttpClient';
// import { User } from './types';

export class SpaceXApi extends HttpClient {
  private static classInstance?: SpaceXApi;

  public constructor() {
    super(import.meta.env.VITE_API_URL);
  }
  public static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new SpaceXApi();
    }

    return this.classInstance;
  }
  public getLaunches = () => this.instance.get<Launch>('/launches');
  
}
