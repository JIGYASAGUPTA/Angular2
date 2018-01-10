import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class ServiceService {
//private http : HttpClient;----> why not here
  constructor(private http : HttpClient) { } // dependency injection



getData(){
       return this.http.get('https://jsonplaceholder.typicode.com/posts');
    }
}
