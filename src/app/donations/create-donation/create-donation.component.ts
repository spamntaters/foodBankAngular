import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { Donation } from '../donation.model'
import { DonationsService } from '../donations.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-create-donation',
  templateUrl: './create-donation.component.html',
  styleUrls: ['./create-donation.component.scss']
})
export class CreateDonationComponent implements OnInit {

  donationForm: FormGroup;
  donationSub: Subscription;
  constructor(private fb : FormBuilder, private donationsService : DonationsService, private router : Router) { }

  ngOnInit() {
    this.donationForm = this.fb.group({
      donorName: '',
      donorEmail: '',
      donorAddress: '',
      dateReceived: '',
      donationWeight: null,
      itemsDonated: this.fb.array([])
    });

  }

  // ngOnDestroy(){
  //   if(this.donationSub)
  //     this.donationSub.unsubscribe();
  // }

  get itemsDonated() {
    return this.donationForm.get('itemsDonated') as FormArray;
  }

  addItem(){
    const item = this.fb.group({
      name: '',
      description: '',
      itemCount: null
    });

    this.itemsDonated.push(item);
  }

  deleteItem(i: number) {
    this.itemsDonated.removeAt(i);
  }

  submitDonation(){
    let donation = this.donationForm.value as Donation;
    console.log(donation);
    this.donationSub = this.donationsService.addDonation(donation)
    .subscribe(data => {
      this.router.navigateByUrl('/donations');
    });

  }
}
