import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { DonationsComponent } from './donations/donations.component';
import { CreateDonationComponent } from './donations/create-donation/create-donation.component';



const routes: Routes = [
  {path: 'donations', component: DonationsComponent},
  {path: '', component: InventoryListComponent},
  {path: 'donations/new', component: CreateDonationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
