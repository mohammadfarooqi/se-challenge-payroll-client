import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-employees-report',
  templateUrl: './employees-report.component.html',
  styleUrls: ['./employees-report.component.css']
})
export class EmployeesReportComponent implements OnInit {
  // /employeesReport

  private api = environment.apiurl;

  data: any = [];
  error: Boolean = false;
  error_message: String = '';

  constructor(private http: Http) { }

  ngOnInit() {
    this.data = this.getAllData();
  }

  getAllData() {
    this.error = false;
    this.error_message = '';

    this.http.get(this.api + '/api/employeesReport').subscribe(
      (data: Response) => {
        // console.log(data);

        const _data = data.json().data;
        console.log(_data);

        this.data = _data;
      },
      (err: Response) => {
        const _err = err.json();
        console.log(_err.message);

        this.error = true;
        this.error_message = _err.message;
      }
    );
  }
}
