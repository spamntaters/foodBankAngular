import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DonationsComponent } from './donations/donations.component';


const routes: Routes = [
  {path: 'donations', component: DonationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
