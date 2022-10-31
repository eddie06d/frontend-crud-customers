import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-form-customer',
  templateUrl: './form-customer.component.html',
  styleUrls: ['./form-customer.component.css']
})
export class FormCustomerComponent implements OnInit {
  form!: FormGroup;
  @Input() customer!: any;
  @Output() sendData: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      company_name: ['', Validators.required],
      contact_name: ['', Validators.required],
      contact_title: [''],
      address: ['', Validators.required],
      city: ['', Validators.required],
      region: ['', Validators.required],
      postal_code: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      fax: ['']
    });
    if(this.customer) this.form.patchValue(this.customer);
  }

  get f() {
    return this.form.controls;
  }

  onSubmit() {
    this.sendData.emit(this.form.value);
    this.form.reset();
  }

}
