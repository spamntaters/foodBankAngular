import { Component, OnInit } from '@angular/core';
import { Donation } from '../../models/donation.model'
import { DonationsService } from '../donations.service';
import { Observable, Subscription } from 'rxjs';
import { FormBuilder, Validators, FormGroup, FormControl } from "@angular/forms";
// import styles from 'donation-list.scss';

@Component({
  selector: 'app-donation-list',
  templateUrl: './donation-list.component.html',
  styleUrls: ['./donation-list.component.scss']
})
export class DonationListComponent implements OnInit {
  donations: Observable<Donation[]>;
  selectorSub: Subscription;
  filters: boolean = false;
  numCol: Number = 2;
  queryForm: FormGroup;

  constructor(private donationsService: DonationsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.donations = this.donationsService.getAllDonations();

    this.queryForm = this.fb.group({
      queryType: null,
      fromDate: null,
      toDate: null,
      donorName: '',
      minWeight: null,
      maxWeight: null
    });


  }

  ngOnDestroy() {
    if(this.selectorSub){
      this.selectorSub.unsubscribe();
    }
  }

  onSelected(id: Number){
    this.selectorSub = this.donationsService.getDonation(id)
    .subscribe((data: Donation) => {
      this.donationsService.selectDonation(data);
    });
  }

  toggleFilters(){
    console.log(this.queryForm.get("queryType").value)
    this.filters = !this.filters;
  }

  processQuery(){
    let queryType: String = this.queryForm.get('queryType').value;
    let res: Observable<Donation[]>;
    switch(queryType){
      case 'date':
        res = this.donationsService.getDonationsByDate(this.queryForm.get('fromDate').value, this.queryForm.get('toDate').value) as Observable<Donation[]>;
        break;
      case 'weight':
        res = this.donationsService.getDonationsByWeight(this.queryForm.get('minWeight').value, this.queryForm.get('maxWeight').value) as Observable<Donation[]>;
        break;
      case 'donor':
        res = this.donationsService.getDonationsByDonor(this.queryForm.get('donorName').value) as Observable<Donation[]>;
        break;
    }
    this.donations = res;
  }

}
