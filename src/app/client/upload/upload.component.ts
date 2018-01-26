import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  private api = environment.apiurl;

  file: any = null;
  error: Boolean = false;
  error_message: String = '';

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form) {
    if (this.file != undefined && this.file != null) {
      this.error = false;
      this.error_message = '';
      // console.log('there is a file');

      const _formData = new FormData();
      _formData.append('file', this.file, this.file.name);

      // console.log(_formData);

      this.http.post(this.api + '/api/upload', _formData).subscribe(
        (data: Response) => {
          const _data = data.json();
          const message = _data.message;
          // const csvJSON = _data.csvJSON;

          console.log('post successful message: ' + message);
          // console.log('csvJSON', csvJSON);

          // forward to /report
          this.router.navigateByUrl('/report');
        },
        (err: Response) => {
          const _err = err.json();
          console.log(_err.message);
          this.error = true;
          this.error_message = _err.message;
        }
      );
    } else {
      this.error = true;
      this.error_message = 'Please select a .csv file.';
    }
  }

  setFile(file) {
    // console.log(file.target.files[0]);
    this.file = file.target.files[0];
    console.log('File set: ', this.file);
  }

}
