import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Dog } from '../shared/models/dog';

@Injectable({
  providedIn: 'root'
})
export class DogService {

  constructor(private http: HttpClient) { }

  getDogs(): Observable<Dog[]> {
    return this.http.get<Dog[]>('/api/dogs');
  }

  getDogById(id: string): Observable<Dog> {
    return this.http.get<Dog>(`/api/dogs/${ id }`);
  }

  addDog(dog: Dog): Observable<Dog> {
    return this.http.post<Dog>('/api/dogs', dog);
  }
}
