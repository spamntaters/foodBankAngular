import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { DonationsService } from "../donations/donations.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-transaction-form",
  templateUrl: "./transaction-form.component.html",
  styleUrls: ["./transaction-form.component.scss"]
})
export class TransactionFormComponent implements OnInit {
  transactionForm: FormGroup;
  username: string;
  password: string;

  constructor(
    private fb: FormBuilder,
    private donationsService: DonationsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.transactionForm = this.fb.group({
      inventoryItemList: this.fb.array([])
    });
    this.addItem();
  }

  get inventoryItemList() {
    return this.transactionForm.get("inventoryItemList") as FormArray;
  }
  addItem() {
    const item: FormGroup = this.fb.group({
      foodItemName: "",
      foodItemQuantity: null
    });
    this.inventoryItemList.push(item);
  }

  deleteItem(i: number) {
    this.inventoryItemList.removeAt(i);
  }

  submitTransaction() {
    let creds64 : string = btoa(`${this.username}:${this.password}`)
    let transaction = this.transactionForm.value;
    console.log("Transaction:");
    console.log(transaction);
    this.donationsService.addTransaction(transaction, creds64).subscribe((data) => {
      console.log("rerouting");
      this.router.navigateByUrl("/");
    });
  }
}
