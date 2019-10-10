import { Component, OnInit } from '@angular/core';
import { DonationsService } from './donations.service';
import { Donation } from '../models/donation.model';

@Component({
  selector: 'app-donations',
  templateUrl: './donations.component.html',
  styleUrls: ['./donations.component.scss']
})
export class DonationsComponent implements OnInit {
  selectedDonation: Donation;
  constructor(private donationsService: DonationsService) { }

  ngOnInit() {
    this.donationsService.getSelectedDonation()
    .subscribe((donation: Donation) =>{
      this.selectedDonation = donation;
    });
  }

}
