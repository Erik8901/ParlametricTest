import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { LoginModal } from "./login-modal/login-modal";
import { Questionnaire } from "./questionnaire/questionnaire"

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, LoginModal, Questionnaire],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App {
  @Output() dataEvent = new EventEmitter<boolean>();

  showLogin = false;
  adminIsLoggedIn = false;

  handleDataFromChild(data: boolean) {
    //  console.log('Data received in parent:', data);
    if (data === true) {
      this.showLogin = false;
      this.adminIsLoggedIn = true
    }
  }

  loginUser() {
    this.showLogin = !this.showLogin
  }


}