import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/products.model';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _HttpClient: HttpClient) {}

  getAllProduct(): Observable<IProduct[]> {
    return this._HttpClient.get<IProduct[]>('https://dummyjson.com/products');
  }
}
