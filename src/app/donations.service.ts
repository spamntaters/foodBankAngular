import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Donation } from './donation.model';

@Injectable({
  providedIn: 'root'
})
export class DonationsService {

  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }  

  getDonations(): Observable<Donation> {
    return this.http.get<Donation>(this.apiURL + '/donations')
    .pipe(
      retry(1),
      catchError(this.handleError)
    )
  }

  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
