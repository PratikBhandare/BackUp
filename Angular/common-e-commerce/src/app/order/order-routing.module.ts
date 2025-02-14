import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { OrderListComponent } from "./order-list/order-list.component";
import { OrderDetailComponent } from "./order-detail/order-detail.component";
import { ManagerGuard } from "../auth/manager.guard";

let routes : Routes = [
    {path: 'list', canActivate: [ManagerGuard] ,component: OrderListComponent},
    {path: 'detail', component: OrderDetailComponent},
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrderRouting{}