import { Component, OnInit } from '@angular/core';
import { InventoryItem } from '../models/inventory-item.model';
import { InventoryListService } from '../inventory-list.service';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
  inventorys: InventoryItem[];
  nameQueryTerm: String;

  constructor(private inventoryService: InventoryListService) { }

  ngOnInit(){
    this.inventoryService.getAllInventorys()
    .subscribe((data: InventoryItem[]) =>{
      this.inventorys = data;
    });
    console.log(`Inventorys: ${this.inventorys}`);
  }

  queryByName = ($event) => {
    $event.preventDefault();
    if (this.nameQueryTerm == '') {
      this.inventoryService.getAllInventorys()
        .subscribe((data: InventoryItem[]) =>{
        this.inventorys = data;
      });
      return
    }
    
    let list = [];
    this.inventoryService.getInventoryByName(this.nameQueryTerm)
      .subscribe((data: InventoryItem[]) => {
        list.push(data);
        this.inventorys = list;
      });

  }
}
