import { Router } from '@angular/router';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-questions',
  imports: [CommonModule, FormsModule],
  templateUrl: './add-questions.html',
  styleUrl: './add-questions.css'
})

export class AddQuestions {
  newQuestion = ""
  newMultiQuestion = ""
  private router = inject(Router);

  addNewQuestions() {
    this.router.navigate(['/'], {
      state: { newQuestionData: this.newQuestion, newMultiQuestionData: this.newMultiQuestion }
    });
  }
}
