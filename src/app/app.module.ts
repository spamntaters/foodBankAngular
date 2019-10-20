import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryListComponent } from './inventory-list/inventory-list.component';
import { InventoryListService } from './inventory-list.service';
import { DonationListComponent } from './donations/donation-list/donation-list.component';
import { DonationsService } from './donations/donations.service';
import { DonationsComponent } from './donations/donations.component';
import { DonationDetailComponent } from './donations/donation-detail/donation-detail.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { CreateDonationComponent } from './donations/create-donation/create-donation.component';

@NgModule({
  declarations: [
    AppComponent,
    DonationListComponent,
    InventoryListComponent,
    DonationsComponent,
    DonationDetailComponent,
    CreateDonationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [DonationsService, InventoryListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
