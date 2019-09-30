import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonationListComponent } from './donation-list/donation-list.component';
import { DonationsService } from './donations.service';
import { InventoryListComponent } from './inventory-list/inventory-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DonationListComponent,
    InventoryListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DonationsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
