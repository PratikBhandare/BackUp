import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
// import { AdminComponent } from './admin/admin.component';
// import { RoleGuard } from './Guards/role.guard';


const routes: Routes = [
  {path:"",component:ProductlistComponent},
  
  // {path:"admin",component:AdminComponent, canActivate:[LogInGuard,RoleGuard]}
  {path:"user",loadChildren:()=>import("./user/user.module").then(m=>m.UserModule)},
  {path:"order",loadChildren:()=>import("./order/order.module").then(m=>m.OrderModule)},
  {path:"product",loadChildren:()=>import("./product/product.module").then(m=>m.ProductModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
