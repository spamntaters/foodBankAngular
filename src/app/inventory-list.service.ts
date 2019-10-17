import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryListService {

  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:8080'

  getAllInventorys() {
    return this.http.get(`${this.apiURL}/inventory`);
  }

  getItemId(id: Number) {
    return this.http.get(`${this.apiURL}/inventory?itemId`)
  }  
  

}
