import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InventoryListService {

  constructor(private http: HttpClient) { }

  apiURL = 'https://jamil-niner-foodpantry-api.herokuapp.com'

  getAllInventorys() {
    return this.http.get(`${this.apiURL}/inventory`);
  }

  getInventoryByName = (name: String) => {
    return this.http.get(`${this.apiURL}/inventory?itemName=${name}`)
  }

}
