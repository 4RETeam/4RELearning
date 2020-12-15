import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

 
constructor(private http:HttpClient) { }

getData(){
  let url='https://jsonplaceholder.typicode.com/users';

  return this.http.get(url);
}

}
