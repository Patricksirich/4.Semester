import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgRedux } from '@angular-redux/store';
import { AppState } from '../store';
import { Quiz, Option } from '../entities/quiz';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Question } from '../entities/admin';
import { Gender } from '../entities/user';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.sass']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private route: ActivatedRoute, private ngRedux: NgRedux<AppState>,
    private fb: FormBuilder) { }

  public quizzes: Quiz[];
  public quizForm: FormGroup;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.ngRedux.select(state => state.quizzes).subscribe(result => {
      this.quizzes = result.quizzes;
      let quiz = this.quizzes.find(quiz => quiz._id === id);

      this.quizForm = this.fb.group({
        title: [quiz.title],
        questions: this.fb.array(quiz.questions),
        //options: this.fb.array()

      })
    })
  }

  updateQuiz() {
    // save a user who created this quiz.
    // hardcode a user until we have a proper login.
    let quiz = this.quizForm.value as Quiz;

    quiz.user = { _id: '1',
    username: 'Strunge',
    email: 'Chr@Chr.org',
    gender: Gender.MALE,
    birthDate: undefined
   };
  }


}
