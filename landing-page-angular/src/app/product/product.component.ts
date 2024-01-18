import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { productsList } from './products.mock';
import { CurrencyPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink, NgFor, CurrencyPipe],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  productsList = productsList;
}
