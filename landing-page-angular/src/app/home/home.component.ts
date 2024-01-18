import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { IProductDetails } from '../model/products.model';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  products: IProductDetails[] = [];
  constructor(private _ApiService: ApiService) {}

  ngOnInit(): void {
    this._ApiService.getAllProduct().subscribe((data) => {
      this.products = Object.values(data.products);
    });
  }
}
