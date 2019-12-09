import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InventoryListComponent } from "./inventory-list/inventory-list.component";
import { DonationsComponent } from "./donations/donations.component";
import { CreateDonationComponent } from "./donations/create-donation/create-donation.component";
import { TransactionFormComponent } from "./transaction-form/transaction-form.component";
import { StatisticsComponent } from './statistics/statistics.component';

const routes: Routes = [
  { path: "donations", component: DonationsComponent },
  { path: "", component: InventoryListComponent },
  { path: "donations/new", component: CreateDonationComponent },
  { path: "transactions/new", component: TransactionFormComponent },
  {path: "statistics", component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
