import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/products.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  URL_base: string = 'https://dummyjson.com/products';
  constructor(private _HttpClient: HttpClient) {}

  getAllProduct(): Observable<IProduct> {
    return this._HttpClient.get<IProduct>(this.URL_base);
  }

  getById(productId: number | string): Observable<IProduct> {
    const url = `${this.URL_base}/${productId}`;
    return this._HttpClient.get<IProduct>(url);
  }
}
