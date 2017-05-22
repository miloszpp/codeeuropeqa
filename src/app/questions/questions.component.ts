import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from "angularfire2/database";
import { Question } from "common/model";
import { Http } from '@angular/http';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit {
  public questions: FirebaseListObservable<Question[]>;

  constructor(public http: Http, public angularFire: AngularFireDatabase) { 
    this.questions = angularFire.list("questions");
  }

  public addQuestion(content: string) {
    this.questions.push(<Question> { content: content, timestamp: Date.now() });
    // this.http.post("https://wt-miloszpp-gmail-com-0.run.webtask.io/add-question-bundle", { content })
    //   .subscribe(console.log, alert);
  }

  ngOnInit() {
  }

}
