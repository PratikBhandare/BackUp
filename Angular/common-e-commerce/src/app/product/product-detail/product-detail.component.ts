import { Component, Input } from '@angular/core';
import { Product } from '../product.service';

@Component({
  selector: 'app-product-detail',
  standalone: false,
  
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  @Input() product! : Product;

  order(id : number){}
}
