import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {

  private _productsArray  : Product[]= [];
  constructor(){
    this._productsArray.push({id:1, name:'Dell Inspiron',category: 'Laptop',price:40000, rating : 7, url : 'dell.jpg'});
    this._productsArray.push({id:2, name:'Logitech Keyboard',category: 'Appliances',price:20000, rating : 6, url : 'keyboard.jpg'});
    this._productsArray.push({id:3, name:'Mouse',category: 'Appliances',price:2000, rating : 4, url : 'mouse.jpg'});
    this._productsArray.push({id:4, name:'Samsung S23 FE',category: 'Mobile',price:40000, rating : 8, url : 'samsung.jpg'});
  }

  get productArray() : Product[] {
    return this._productsArray;
  }
  addProduct(product : Product){
    this._productsArray.push({...product, id : this._productsArray.length+1});
    return true;
  }
}

export interface Product{
  id:number;
  name:string;
  category: string;
  price:number;
  rating: number;
  url: string
}