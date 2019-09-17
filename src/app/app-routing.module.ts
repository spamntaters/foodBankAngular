import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonationListComponent } from './donation-list/donation-list.component';


const routes: Routes = [
  {path: 'donations', component: DonationListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
