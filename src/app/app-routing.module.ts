import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { DonationsComponent } from './donations/donations.component';



const routes: Routes = [
  {path: 'donations', component: DonationsComponent},
  {path: '', component: InventoryListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
