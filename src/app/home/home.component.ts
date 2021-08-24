import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employees: any;

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get(`http://localhost:3000/workers`).subscribe(data => {
      this.employees = data;
    })
  }

  login(){
    
  }

}
