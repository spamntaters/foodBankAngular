import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { Donation } from '../models/donation.model';


@Injectable({
  providedIn: 'root'
})
export class DonationsService {

  selectedDonation = new BehaviorSubject<Donation>(null);
  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:8080';

  selectDonation(donation: Donation){
    this.selectedDonation.next(donation);
  }
  getSelectedDonation(){
    return this.selectedDonation.asObservable();
  }

  getAllDonations() {
    return this.http.get(`${this.apiURL}/donations`) as Observable<Donation[]>;
  }
  
  getDonation(id: Number){
    return this.http.get(`${this.apiURL}/donations?donationId=${id}`);
  }
}
