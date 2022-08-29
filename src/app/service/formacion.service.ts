import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formacion } from '../model/formacion.model';

@Injectable({
  providedIn: 'root'
})
export class FormacionService {

  URL = 'https://backargpro.herokuapp.com/form/';

constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Formacion[]>{
    return this.httpClient.get<Formacion[]>(this.URL + 'lista');
  }
  
  public detail(id: number): Observable<Formacion>{
    return this.httpClient.get<Formacion>(this.URL + `detail/${id}`);
  } 
  
  public save(formacion: Formacion): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', formacion);
  }
  
  public update(id: number, formacion: Formacion): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, formacion);
  }
  
  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

}
