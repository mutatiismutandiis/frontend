import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { person } from '../model/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  URL = 'https://portfoliocardone.herokuapp.com/person/';
  
  constructor(private http:HttpClient) { }

  public getPerson(): Observable<person>{
    return this.http.get<person>(this.URL+'find/profile');
  }
}
