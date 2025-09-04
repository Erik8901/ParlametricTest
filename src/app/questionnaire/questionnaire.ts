import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-questionnaire',
  imports: [CommonModule, FormsModule],
  templateUrl: './questionnaire.html',
  styleUrl: './questionnaire.css'
})
export class Questionnaire {
  userAnwsers = []
  userMultiAnwsers = [];

  receivedNewQuestion: any;
  receivedNewMultiQuestion: any;

  questions: Array<any> = [
    { question: 'How did you find out about Parlametric?' },
    { question: 'Would you use Parlametric in the future?' },
  ];
  multiChoiceQuestions: Array<any> = [
    { question: 'How would you rate Paralmetric?' },
    { question: 'How would you rate Parlametric customer service?' },
  ]

  ngOnInit() {
    //AddNewQuestions
    const newQuestionData = history.state['newQuestionData'];
    const stored = JSON.parse(localStorage.getItem('questions') || '[]');
    let checkForDoubles = stored.some((e: { question: any; }) => e.question === newQuestionData)

    if (newQuestionData && checkForDoubles === false) {
      stored.push({ question: newQuestionData });
      localStorage.setItem('questions', JSON.stringify(stored));
      this.questions = this.questions.concat(stored);
    } else {
      this.questions = this.questions.concat(stored);
    }

    //AddNewMultiQuestions
    const newQuestionMultiData = history.state['newMultiQuestionData'];
    const storedMulti = JSON.parse(localStorage.getItem('multiChoiceQuestions') || '[]');
    let checkForDoublesMulti = storedMulti.some((e: { question: any; }) => e.question === newQuestionMultiData)

    if (newQuestionMultiData && checkForDoublesMulti === false) {
      storedMulti.push({ question: newQuestionMultiData });
      localStorage.setItem('multiChoiceQuestions', JSON.stringify(storedMulti));
      this.multiChoiceQuestions = this.multiChoiceQuestions.concat(storedMulti);
    } else {
      this.multiChoiceQuestions = this.multiChoiceQuestions.concat(storedMulti);
    }
  }

  onSubmitQuestions() {
    console.log(this.userAnwsers)
    console.log(this.userMultiAnwsers)
    this.userAnwsers = []
    this.userMultiAnwsers = []
  }
}