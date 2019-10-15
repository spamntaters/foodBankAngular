import { Component, OnInit } from '@angular/core';
import { Donation } from '../../models/donation.model'
import { DonationsService } from '../donations.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.scss']
})
export class DonationListComponent implements OnInit {
  donations: Observable<Donation[]>;
  selectorSub: Subscription;
  filters: boolean = false;
  numCol: Number = 3;

  constructor(private donationsService: DonationsService) { }

  ngOnInit() {
    this.donations = this.donationsService.getAllDonations();
  }

  ngOnDestroy() {
    this.selectorSub.unsubscribe();
  }

  onSelected(id: Number){
    this.selectorSub = this.donationsService.getDonation(id)
    .subscribe((data: Donation) => {
      this.donationsService.selectDonation(data);
    });
  }

  toggleFilters(){
    this.filters = !this.filters;
  }

}
