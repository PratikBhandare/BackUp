import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from "../app.module";
import { NavbarComponent } from '../navbar/navbar.component';

import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AdminGUard } from '../auth/admin.guard';
import { ManagerGuard } from '../auth/manager.guard';

const routes:Routes=[
  {path:"addproduct",component:AddproductComponent,canActivate:[AdminGUard]},
  // {path:"product/productlist",component:ProductlistComponent, canActivate:[LogInGuard]},
  // {path:"product/productlist",component:ProductlistComponent},
  {path:"product/productlist/productdetails",component:ProductdetailsComponent,canActivate:[ManagerGuard]},
  {path:"product/productlist",component:ProductlistComponent},
];

@NgModule({
  declarations: [
    

  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports:[
    RouterModule,

  ]
})
export class ProductRoutingModule { }
