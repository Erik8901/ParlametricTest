import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  imports: [FormsModule],
  templateUrl: './login-modal.html',
  styleUrl: './login-modal.css'
})
export class LoginModal {
  @Output() dataEvent = new EventEmitter<boolean>();

  userName = ""
  userPassword = ""
  loggedInAsAdmin = false;

  onSubmit() {
    // if (this.userName === "admin" && this.userPassword === "password") {
    //   this.loggedInAsAdmin = !this.loggedInAsAdmin
    //   this.dataEvent.emit(this.loggedInAsAdmin);
    // } else {
    //   this.loggedInAsAdmin = false;
    // }
    this.loggedInAsAdmin = !this.loggedInAsAdmin
    this.dataEvent.emit(this.loggedInAsAdmin);
  }

}