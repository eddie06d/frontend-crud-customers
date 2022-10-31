import { Customer } from '../../interfaces/customer';
import { CustomerService } from '../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-customers',
  templateUrl: './list-customers.component.html',
  styleUrls: ['./list-customers.component.css']
})
export class ListCustomersComponent implements OnInit {
  customers: Customer[] = [];
  customers_filtered: Customer[] = [];

  placeholder_filter: string = "Ningún filtro seleccionado";
  filter_type: string = '';

  constructor(
    private customerSvc: CustomerService,
  ) { }

  ngOnInit(): void {
    this.loadCustomers();
  }

  private loadCustomers(): void {
    this.customerSvc.getAll().subscribe({
      next: (customers: Customer[]) => {
        this.customers = customers;
        this.customers_filtered = customers;
      },
      error: (err) => console.log(err)
    });
  }

  save(data: Customer): void {
    this.customerSvc.save(data).subscribe({
      next: (res: Customer) => {
        Swal.fire({
          title: 'Operación exitosa',
          text: `El cliente ${res.company_name} ha sido creado`,
          icon: 'success'
        }).then(() => {
          this.loadCustomers();
        });
      },
      error: (err) => console.log(err)
    });
  }

  delete(data: Customer): void {
    Swal.fire({
      title: `¿Estás seguro de eliminar al cliente ${data.company_name}?`,
      text: "",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminar'
    }).then((res) => {
      if(res.isConfirmed) {
        this.customerSvc.delete(data.customer_id!)
          .subscribe({
            next: () => {
              this.loadCustomers();
              Swal.fire({
                title: 'Operación exitosa',
                text: 'El cliente ha sido eliminado',
                icon: 'success'
              })
            },
            error: (err: any) => console.log(err)
          });
      }
    });
  }

  onChangeFilter(e: any): void {
    this.filter_type = e.target.value;
    if(!this.filter_type) this.placeholder_filter = "Ningún filtro seleccionado";
    else if(this.filter_type == 'company_name') this.placeholder_filter = "Buscar por nombre de empresa";
    else if(this.filter_type == 'contact_name') this.placeholder_filter = "Buscar por nombre de contacto";
    else if(this.filter_type == 'country') this.placeholder_filter = "Buscar por país";
    else if(this.filter_type == 'city') this.placeholder_filter = "Buscar por ciudad";
  }

  onInputFilter(e: any): void {
    const value = e.target.value;
    if(!this.filter_type) this.customers_filtered = this.customers;
    else if(this.filter_type == 'company_name') this.customers_filtered = this.customers.filter(customer => customer.company_name.toLowerCase().startsWith(value.toLowerCase()));
    else if(this.filter_type == 'contact_name') this.customers_filtered = this.customers.filter(customer => customer.contact_name.toLowerCase().startsWith(value.toLowerCase()));
    else if(this.filter_type == 'country') this.customers_filtered = this.customers.filter(customer => customer.country.toLowerCase().startsWith(value.toLowerCase()));
    else if(this.filter_type == 'city') this.customers_filtered = this.customers.filter(customer => customer.city.toLowerCase().startsWith(value.toLowerCase()));
  }

}
