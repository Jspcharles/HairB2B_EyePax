import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup, NgForm} from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  username;
  password;
  newTaskForm: FormGroup;
  constructor(private http: HttpClient) {
    this.http.get<login>('/api/login/getLoginInfo').subscribe(
      data => {
        this.username = data.username;
        console.log(this.username);
        this.password = data.password;
        console.log(this.password);
      }
    );
  }

  createNewTask(){
    console.log(this.newTaskForm.value);
  }

  ngOnInit() {
  }
}

interface login {
  username: string;
  password: string;
 }
