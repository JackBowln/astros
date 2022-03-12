import HttpClient from '../http/HttpClient';
// import { User } from './types';

class MainApi extends HttpClient {
  public constructor() {
    super('https://api.awesome-site.com');
  }

  public getUsers = () => this.instance.get<any[]>('/users');
  
  public getUser = (id: string) => this.instance.get<any>(`/users/${id}`);
}
