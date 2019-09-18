import { Component, OnInit } from '@angular/core';
import { Donation } from '../models/donation.model'
import { DonationsService } from '../donations.service';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.scss']
})
export class DonationListComponent implements OnInit {
  donations: Donation[];

  constructor(private donationsService: DonationsService) { }

  ngOnInit() {
     this.donationsService.getAllDonations()
    .subscribe((data: Donation[]) =>{
      this.donations = data;
    });
    console.log(`Donations: ${this.donations}`);
  }

}
