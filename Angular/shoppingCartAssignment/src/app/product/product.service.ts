import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:any[]=[
    {name:"P1",price:10000,id:1,img:"https://th.bing.com/th/id/OIP.y1b8GoVTsvQtUlhM0Y9XFQHaEf?rs=1&pid=ImgDetMain"},
    {name:"P2",price:10000,id:2,img:"https://th.bing.com/th/id/OIP.y1b8GoVTsvQtUlhM0Y9XFQHaEf?rs=1&pid=ImgDetMain"},
    {name:"P3",price:10000,id:3,img:"https://th.bing.com/th/id/OIP.y1b8GoVTsvQtUlhM0Y9XFQHaEf?rs=1&pid=ImgDetMain"},
  ]

  constructor() { }
}
