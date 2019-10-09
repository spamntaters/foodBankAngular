import { Component, OnInit } from '@angular/core';
import { DonationsService } from 'src/app/donations/donations.service';

@Component({
  selector: 'app-donation-detail',
  templateUrl: './donation-detail.component.html',
  styleUrls: ['./donation-detail.component.scss']
})
export class DonationDetailComponent implements OnInit {

  constructor(private donationsService: DonationsService) { }

  ngOnInit() {
  }

}
