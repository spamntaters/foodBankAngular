import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DonationsService {

  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:3000';


  getAllDonations() {
    return this.http.get(this.apiURL + '/donations');
  } 
}
