import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, IProduct } from '../../models/product.model';
HttpClient;
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseURL = 'https://fakestoreapi.com/products';
  
  constructor(private _HttpClient: HttpClient) {}

  public getAllProducts(): Observable<IProduct[]> {
    return this._HttpClient.get<IProduct[]>(this.baseURL);
  }

  public getProductById(id: number): Observable<IProduct> {
    return this._HttpClient.get<IProduct>(`${this.baseURL}/${id}`);
  }

  public getAllCategories(): Observable<Category[]> {
    return this._HttpClient.get<Category[]>(`${this.baseURL}/categories`);
  }

  public newProduct(product: IProduct): Observable<IProduct> {
    return this._HttpClient.post<IProduct>(`${this.baseURL}`, product);
  }

  public updateProduct(product: IProduct): Observable<IProduct> {
    return this._HttpClient.put<IProduct>(
      `${this.baseURL}/${product.id}`,
      product
    );
  }

  public deleteProduct(id: number): Observable<IProduct> {
    return this._HttpClient.delete<IProduct>(`${this.baseURL}/${id}`);
  }
}
