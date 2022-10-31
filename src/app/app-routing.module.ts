import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';
import { DetailCustomerComponent } from './pages/detail-customer/detail-customer.component';
import { ListCustomersComponent } from './pages/list-customers/list-customers.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './layout/base/base.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'list-customers' },
  { path: 'list-customers', component: BaseComponent, children: [
    { path: '', component: ListCustomersComponent },
    { path: 'details/:id', component: DetailCustomerComponent },
    { path: 'update/:id', component: UpdateCustomerComponent },
  ] },
  { path: '**', redirectTo: 'list-customers' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
