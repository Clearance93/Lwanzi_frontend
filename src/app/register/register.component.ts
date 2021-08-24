import { Workers } from './../model/workers';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  employees: Workers = new Workers();

  constructor(private _router: Router, private _htppClient: HttpClient) { }

  ngOnInit(): void {
  }

  Submit(){
    this._htppClient.post(`http://localhost:3000/workers`, this.employees).subscribe(data => {
      console.log(data)
    alert('Employee added successfully');
    this._router.navigate(['/home'])
    })
  }

}
