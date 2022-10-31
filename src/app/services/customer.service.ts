import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  API_URL: string = 'http://localhost:8080/api/customers';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.API_URL);
  }

  getById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${this.API_URL}/${id}`);
  }

  save(customer: any): Observable<Customer> {
    return this.http.post<Customer>(this.API_URL, customer);
  }

  update(customer: any, id: number): Observable<Customer> {
    return this.http.put<Customer>(`${this.API_URL}/${id}`, customer);
  }

  delete(id: number) {
    return this.http.delete(`${this.API_URL}/${id}`);
  }

}
