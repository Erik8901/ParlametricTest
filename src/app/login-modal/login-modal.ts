import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  imports: [FormsModule],
  templateUrl: './login-modal.html',
  styleUrl: './login-modal.css'
})

export class LoginModal {
  userName = ""
  userPassword = ""
  loggedInAsAdmin = false;

  onSubmit() {
    if (this.userName === "admin" && this.userPassword === "password") {
      this.loggedInAsAdmin = !this.loggedInAsAdmin
      window.location.href = 'add-questions';
    } else {
      this.loggedInAsAdmin = false;
    }
  }
}