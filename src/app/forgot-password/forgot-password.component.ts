import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {

  constructor(private http: HttpClient) {}

  sendResetLink() {
    this.http.post('http://localhost:3000/forgot-password', {}).subscribe(
      (response) => {
        console.log(response);
        // Handle the response, maybe show a success message
      },
      (error) => {
        console.error(error);
        // Handle errors, show an error message
      }
    );
  }

}
