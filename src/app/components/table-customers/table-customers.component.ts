import { Customer } from './../../interfaces/customer';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table-customers',
  templateUrl: './table-customers.component.html',
  styleUrls: ['./table-customers.component.css']
})
export class TableCustomersComponent implements OnInit {
  @Input() customers!: Customer[];
  @Input() sizePage: number = 5;
  @Output() deleteCustomer: EventEmitter<Customer> = new EventEmitter();
  pages!: number;
  currentPage: number = 1;

  constructor() {
  }

  ngOnInit(): void {
    this.pages = Math.ceil(this.customers.length / this.sizePage);
  }

  onDelete(customer: Customer) {
    this.deleteCustomer.emit(customer);
  }

  nextPage() {
    this.currentPage++;
  }

  prevPage() {
    this.currentPage--;
  }

}
