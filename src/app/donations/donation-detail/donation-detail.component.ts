import { Component, OnInit, Input } from '@angular/core';
import { DonationsService } from 'src/app/donations/donations.service';
import { Donation } from 'src/app/models/donation.model';

@Component({
  selector: 'app-donation-detail',
  templateUrl: './donation-detail.component.html',
  styleUrls: ['./donation-detail.component.scss']
})
export class DonationDetailComponent implements OnInit {

  @Input() donation: Donation;
  constructor(private donationsService: DonationsService) { }

  ngOnInit() {
  }

}
