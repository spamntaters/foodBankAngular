import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {
  dateForm: FormGroup;
  statsObj$: Observable<Object>;
  constructor(private fb: FormBuilder, http: HttpClient) {}

  ngOnInit() {
    this.dateForm = this.fb.group({
      fromDate: '',
      toDate: ''
    });
  }
  get formValue() {
    return this.dateForm.value;
  }
  fetchStats(){
      //Make Call to backend passing formValue;
      // this.statsObj$ =  this.http.get("");
  }



}
