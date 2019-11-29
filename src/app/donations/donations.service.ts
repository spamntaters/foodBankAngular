import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { Donation } from "../models/donation.model";
import { trimTrailingNulls } from "@angular/compiler/src/render3/view/util";

@Injectable({
  providedIn: "root"
})
export class DonationsService {
  selectedDonation = new BehaviorSubject<Donation>(null);
  constructor(private http: HttpClient) {}

  apiURL = "https://jamil-niner-foodpantry-api.herokuapp.com";

  selectDonation(donation: Donation) {
    this.selectedDonation.next(donation);
  }
  getSelectedDonation() {
    return this.selectedDonation.asObservable();
  }

  getAllDonations() {
    return this.http.get(`${this.apiURL}/donations`) as Observable<Donation[]>;
  }

  getDonation(id: Number) {
    return this.http.get(`${this.apiURL}/donations?donationId=${id}`);
  }

  getDonationsByDate(fromDate: String, toDate: String) {
    return this.http.get(
      `${this.apiURL}/donations?fromDate=${fromDate}&toDate=${toDate}`
    );
  }

  getDonationsByWeight(minWeight: Number, maxWeight: Number) {
    return this.http.get(
      `${this.apiURL}/donations?minWeight=${minWeight}&maxWeight=${maxWeight}`
    );
  }

  getDonationsByDonor(donorName: String) {
    return this.http.get(`${this.apiURL}/donations?donorName=${donorName}`);
  }

  addDonation(donation: Donation) {
    return this.http.post(`${this.apiURL}/donations`, donation);
  }

  addTransaction(transaction) {
    const options = {
      headers: new HttpHeaders({
        "Content-Type": "application/json"
      }),
      body: transaction
    };
    return this.http.post(`${this.apiURL}/inventory`, transaction);
  }

}
