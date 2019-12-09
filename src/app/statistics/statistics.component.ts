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
  rootUrl = "http://jamil-niner-foodpantry-api.herokuapp.com"
  constructor(private fb: FormBuilder, private http: HttpClient) {}

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
      let fromDate = this.formValue.fromDate
      let toDate = this.formValue.toDate
      this.statsObj$ =  this.http.get(`${this.rootUrl}/statistics?fromDate=${fromDate}&toDate=${toDate}`);
  }



}
