import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListCustomersComponent } from './pages/list-customers/list-customers.component';
import { DetailCustomerComponent } from './pages/detail-customer/detail-customer.component';
import { UpdateCustomerComponent } from './pages/update-customer/update-customer.component';
import { BaseComponent } from './layout/base/base.component';
import { TableCustomersComponent } from './components/table-customers/table-customers.component';
import { FormCustomerComponent } from './components/form-customer/form-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListCustomersComponent,
    DetailCustomerComponent,
    UpdateCustomerComponent,
    BaseComponent,
    TableCustomersComponent,
    FormCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
