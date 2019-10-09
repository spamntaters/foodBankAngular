import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/donations/donations.service';
import { Donation } from 'src/app/models/donation.model';

@Component({
  selector: 'app-donation-detail',
  templateUrl: './donation-detail.component.html',
  styleUrls: ['./donation-detail.component.scss']
})
export class DonationDetailComponent implements OnInit {

  donation: Donation;
  donationId: Number = 1;
  constructor(private donationsService: DonationsService) { }

  ngOnInit() {
    this.donationsService.getDonation(this.donationId)
    .subscribe((data: Donation) => {
      this.donation = data;
    });
  }

}
