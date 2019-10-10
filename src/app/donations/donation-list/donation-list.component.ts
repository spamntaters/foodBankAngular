import { Component, OnInit } from '@angular/core';
import { Donation } from '../../models/donation.model'
import { DonationsService } from '../donations.service';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.scss']
})
export class DonationListComponent implements OnInit {
  donations: Donation[];
  filters: boolean = false;

  constructor(private donationsService: DonationsService) { }

  ngOnInit() {
     this.donationsService.getAllDonations()
    .subscribe((data: Donation[]) =>{
      this.donations = data;
    });
    console.log(`Donations: ${this.donations}`);
  }

  onSelected(id: Number){
    this.donationsService.getDonation(id)
    .subscribe((data: Donation) => {
      this.donationsService.selectDonation(data);
    });
  }

  toggleFilters(){
    this.filters = !this.filters;
  }

}
