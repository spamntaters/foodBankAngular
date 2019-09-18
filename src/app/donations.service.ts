import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DonationsService {

  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:8080';


  getAllDonations() {
    return this.http.get(`${this.apiURL}/donations`);
  }
  
  getDonation(id: Number){
    return this.http.get(`${this.apiURL}/donation/${id}`);
  }
}
