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
      fromDate: null,
      toDate: null
    });
    const weightQuery = this.fb.group({
      minWeight: null,
      maxWeight: null
    });
    const donorQuery = this.fb.group({
      donorName: ""
    });

    this.queryForm = this.fb.group({
      queryType: null,
      date: dateQuery,
      donor: donorQuery,
      weight: weightQuery
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
      .subscribe((data: Donation) => {
        this.donationsService.selectDonation(data);
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
        res = this.donationsService.getDonationsByDate(
          this.queryForm.get("date").get("fromDate").value,
          this.queryForm.get("date").get("toDate").value
        ) as Observable<Donation[]>;
        break;
      case "weight":
        res = this.donationsService.getDonationsByWeight(
          this.queryForm.get("weight").get("minWeight").value,
          this.queryForm.get("weight").get("maxWeight").value
        ) as Observable<Donation[]>;
        break;
      case "donor":
        res = this.donationsService.getDonationsByDonor(
          this.queryForm.get("donor").get("donorName").value
        ) as Observable<Donation[]>;
        break;
      case "date+donor":
        res = this.donationsService.getDonationsByDateAndDonor(
          this.queryForm.get("donor").get("donorName").value,
          this.queryForm.get("date").get("fromDate").value,
          this.queryForm.get("date").get("toDate").value
        ) as Observable<Donation[]>;
    }
    this.donations = res;
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
