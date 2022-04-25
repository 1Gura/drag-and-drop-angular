import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {
  public file: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  getFile(event: any) {
    this.file = event.target.files[0];
    console.log(this.file);
  }

  uploadFile() {
    let formData = new FormData();
    formData.set("file", this.file);
    this.http.post('url', formData).subscribe(
      response => {}
    );
  }
}
