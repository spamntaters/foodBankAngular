import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { getLocaleTimeFormat } from '@angular/common';

@Component({
  selector: 'app-create-donation',
  templateUrl: './create-donation.component.html',
  styleUrls: ['./create-donation.component.scss']
})
export class CreateDonationComponent implements OnInit {

  donationForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.donationForm = this.fb.group({
      name: '',
      email: '',
      address: '',
      date: '',
      weight: null,
      items: this.fb.array([])
    });

  }

  get items() {
    return this.donationForm.get('items') as FormArray;
  }

  addItem(){
    const item = this.fb.group({
      name: '',
      description: '',
      count: null
    });

    this.items.push(item);
  }

  deleteItem(i: number) {
    this.items.removeAt(i);
  }
}
