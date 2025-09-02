import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questionnaire',
  imports: [CommonModule, FormsModule],
  templateUrl: './questionnaire.html',
  styleUrl: './questionnaire.css'
})
export class Questionnaire {
  @Input() isAdmin: boolean = false;

  newQuestion = ""
  newMultiQuestion = ""
  userAnwser = ""
  userAnwsers = []



  questions: Array<any> = [
    { question: 'How did you find out about Parlametric?' },
    { question: 'Would you use Parlametric in the future?' },
  ];
  multiChoiceQuestions: Array<any> = [
    { question: 'How would you rate Paralmetric?' },
    { question: 'How would you rate Parlametric customer service?' },
  ]


  // ngOnInit(): void {
  //   console.log(this.isAdmin)
  // }

  onSubmitQuestions() {
    console.log(this.userAnwser)

  }

  addNewQuestions() {
    this.questions.push({ question: this.newQuestion })
    this.multiChoiceQuestions.push({ question: this.newMultiQuestion })
  }
}
