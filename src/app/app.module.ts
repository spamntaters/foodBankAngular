import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DonationListComponent } from './donations/donation-list/donation-list.component';
import { DonationsService } from './donations.service';
import { DonationsComponent } from './donations/donations.component';
import { DonationDetailComponent } from './donations/donation-detail/donation-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    DonationListComponent,
    DonationsComponent,
    DonationDetailComponent
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
