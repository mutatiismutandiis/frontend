import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { education } from '../model/education.model';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

  URL = 'https://portfoliocardone.herokuapp.com/education/';

  constructor(private http:HttpClient) { }

  public getEducation(): Observable<education>{
    return this.http.get<education>(this.URL+'find/profile/{id}');
  }
}
