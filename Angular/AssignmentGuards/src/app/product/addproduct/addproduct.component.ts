import { Component } from '@angular/core';
import { ProductService } from '../product.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addproduct',
  standalone: false,
  
  templateUrl: './addproduct.component.html',
  styleUrl: './addproduct.component.css'
})
export class AddproductComponent {
  constructor(private productService:ProductService , private router:Router){

  }

  addProductForm=new FormGroup({
    pname:new FormControl(''),
    price:new FormControl(''),
    img:new FormControl(''),

  })

  addProduct(){
    this.productService.addProduct(this.addProductForm.value);
    alert("Product added Succesfully !!")
    this.router.navigate(["product/productlist"])
  }

}
