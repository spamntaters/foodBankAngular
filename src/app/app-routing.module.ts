import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonationListComponent } from './donation-list/donation-list.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';


const routes: Routes = [
  {path: 'donations', component: DonationListComponent},
  {path: 'inventory', component: InventoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
