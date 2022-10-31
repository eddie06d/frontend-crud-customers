import { Customer } from './../../interfaces/customer';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  id!: number;
  data: any;

  constructor(
    private customerSvc: CustomerService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    delete history.state.customer_id;
    this.data = history.state;
  }

  update(data: any): void {
    this.customerSvc.update(data, this.id).subscribe({
      next: (res: Customer) => {
        Swal.fire({
          title: 'Operación exitosa',
          text: `El cliente ${res.company_name} ha sido actualizado`,
          icon: 'success'
        }).then(() => {
          this.router.navigateByUrl('/list-customers');
        });
      },
      error: (err) => console.log(err)
    });
  }

}
