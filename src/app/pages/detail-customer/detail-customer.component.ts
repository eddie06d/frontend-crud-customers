import { Customer } from './../../interfaces/customer';
import { CustomerService } from './../../services/customer.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail-customer',
  templateUrl: './detail-customer.component.html',
  styleUrls: ['./detail-customer.component.css']
})
export class DetailCustomerComponent implements OnInit {
  customer!: Customer | null;

  constructor(
    private customerSvc: CustomerService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const id = parseInt(this.activatedRoute.snapshot.paramMap.get('id')!);
    this.loadCustomer(id);
  }

  private loadCustomer(id: number): void {
    this.customerSvc.getById(id).subscribe({
      next: (customer: Customer) => this.customer = customer,
      error: (err) => console.log(err)
    });
  }

}
