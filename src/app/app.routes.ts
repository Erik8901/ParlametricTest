import { Routes } from '@angular/router';
import { LoginModal } from './login-modal/login-modal';
import { Questionnaire } from './questionnaire/questionnaire';
import { AddQuestions } from './add-questions/add-questions';

export const routes: Routes = [
    {
        path: '',
        component: Questionnaire,
    },
    {
        path: 'login',
        component: LoginModal,
    },
    {
        path: 'add-questions',
        component: AddQuestions

    }


];
