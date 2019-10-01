import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { InventoryItem } from '../models/inventory-item.model';
import { InventoryListService } from '../inventory-list.service';
=======
>>>>>>> d7e69e944f9230069c27a6114df7923da66e3402

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss']
})
export class InventoryListComponent implements OnInit {
<<<<<<< HEAD
  inventorys: InventoryItem[];

  constructor(private inventoryService: InventoryListService) { }

  ngOnInit(){
    this.inventoryService.getAllInventorys()
    .subscribe((data: InventoryItem[]) =>{
      this.inventorys = data;
    });
    console.log(`Inventorys: ${this.inventorys}`);
  }
=======

  constructor() { }

  ngOnInit() {
  }

>>>>>>> d7e69e944f9230069c27a6114df7923da66e3402
}
