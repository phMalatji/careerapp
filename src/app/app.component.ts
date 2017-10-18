import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  jobs: Observable<any[]>;
  constructor(db: AngularFirestore) {
    this.jobs = db.collection('jobs').valueChanges();
  }

  title = 'app';


  onSubmit(f: NgForm) {
    console.log(f.value);  // { first: '', last: '' }
    console.log(f.valid);  // false
  }


}
