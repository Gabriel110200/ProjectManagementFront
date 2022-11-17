import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  
  private readonly API = `${environment.API}/login`
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  Login(user:string)
  {

    return this.http.post(this.API,user).pipe();

  }

}
