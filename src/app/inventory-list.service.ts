import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http';
=======
>>>>>>> d7e69e944f9230069c27a6114df7923da66e3402

@Injectable({
  providedIn: 'root'
})
export class InventoryListService {

<<<<<<< HEAD
  constructor(private http: HttpClient) { }

  apiURL = 'http://localhost:8080'

  getAllInventorys() {
    return this.http.get(`${this.apiURL}/inventory`);
  }
  
  

=======
  constructor() { }
>>>>>>> d7e69e944f9230069c27a6114df7923da66e3402
}
