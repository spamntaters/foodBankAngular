import { Component, OnInit } from "@angular/core";
import { Donation } from "../../models/donation.model";
import { DonationsService } from "../donations.service";
import { Observable, Subscription } from "rxjs";
import {
  FormBuilder,
  Validators,
  FormGroup,
  FormControl
} from "@angular/forms";
// import styles from 'donation-list.scss';
import { saveAs } from "file-saver";

@Component({
  selector: "app-donation-list",
  templateUrl: "./donation-list.component.html",
  styleUrls: ["./donation-list.component.scss"]
})
export class DonationListComponent implements OnInit {
  donations: Observable<Donation[]>;
  selectorSub: Subscription;
  filters: boolean = false;
  queryForm: FormGroup;

  constructor(
    private donationsService: DonationsService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.donations = this.donationsService.getAllDonations();
    const dateQuery = this.fb.group({
      fromDate: new FormControl(null, Validators.required),
      toDate: new FormControl(null, Validators.required)
    });
    const weightQuery = this.fb.group({
      minWeight: new FormControl(null, Validators.required),
      maxWeight: new FormControl(null, Validators.required)
    });
    const donorQuery = this.fb.group({
      donorName: new FormControl("", Validators.required)
    });
    const donationID = this.fb.group({
      donationID: new FormControl(null, Validators.required)
    });

    this.queryForm = this.fb.group({
      queryType: null,
      date: dateQuery,
      donor: donorQuery,
      weight: weightQuery,
      id: donationID
    });
  }

  ngOnDestroy() {
    if (this.selectorSub) {
      this.selectorSub.unsubscribe();
    }
  }

  onSelected(id: Number) {
    this.selectorSub = this.donationsService
      .getDonation(id)
      .subscribe((data: Donation[]) => {
        this.donationsService.selectDonation(data[0]);
      });
  }

  toggleFilters() {
    console.log(this.queryForm.get("queryType").value);
    this.filters = !this.filters;
  }

  processQuery() {
    let queryType: String = this.queryForm.get("queryType").value;
    let res: Observable<Donation[]>;
    switch (queryType) {
      case "date":
        if (this.queryForm.get("date").invalid) {
          return;
        }
        res = this.donationsService.getDonationsByDate(
          this.queryForm.get("date").get("fromDate").value,
          this.queryForm.get("date").get("toDate").value
        ) as Observable<Donation[]>;
        break;
      case "weight":
        if (this.queryForm.get("weight").invalid) {
          return;
        }
        res = this.donationsService.getDonationsByWeight(
          this.queryForm.get("weight").get("minWeight").value,
          this.queryForm.get("weight").get("maxWeight").value
        ) as Observable<Donation[]>;
        break;
      case "donor":
        if (this.queryForm.get("donor").invalid) {
          return;
        }
        res = this.donationsService.getDonationsByDonor(
          this.queryForm.get("donor").get("donorName").value
        ) as Observable<Donation[]>;
        break;
      case "date+donor":
        if (
          this.queryForm.get("date").invalid ||
          this.queryForm.get("donor").invalid
        ) {
          return;
        }
        res = this.donationsService.getDonationsByDateAndDonor(
          this.queryForm.get("donor").get("donorName").value,
          this.queryForm.get("date").get("fromDate").value,
          this.queryForm.get("date").get("toDate").value
        ) as Observable<Donation[]>;
        break;
      case "id":
        if (this.queryForm.get("id").invalid) {
          return;
        }
        res = this.donationsService.getDonation(
          this.queryForm.get("id").get("donationID").value
        ) as Observable<Donation[]>;
    }
    this.donations = res;
    console.log(this.donations);
  }

  exportDataAsCsv = () => {
    let fullItemList = [];
    this.donations.subscribe((donations: Donation[]) => {
      donations.forEach(donation => {
        donation.itemsDonated.forEach(item => fullItemList.push(item));
        delete donation.itemsDonated;
      });

      this.writeCSV(donations, "donations");
      this.writeCSV(fullItemList, "items");
    });
  };

  writeCSV = (data: Object[], fileName: string) => {
    const replacer = (key, value) => (value === null ? "" : value); // specify how you want to handle null values here
    const header = Object.keys(data[0]);
    let csv = data.map(row =>
      header
        .map(fieldName => JSON.stringify(row[fieldName], replacer))
        .join(",")
    );
    csv.unshift(header.join(","));
    let csvArray = csv.join("\r\n");

    var blob = new Blob([csvArray], { type: "text/csv" });
    saveAs(blob, `${fileName}.csv`);
  };
}
