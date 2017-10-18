import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, ParamMap ,Params} from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { Subscription } from 'rxjs/Subscription';

interface Job {
    jobTitle:string;
    jobSector:string;
    jobLocation:string;
    jobPosted:Date;
    jobSkills:string[];
    jobBrief:string;
  }
  

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})



export class JobsComponent implements OnInit {
  private sub: Subscription;
  jobParam='lol';
  jobs: Observable<any[]>;

  constructor(
    db: AngularFirestore,
    private route: ActivatedRoute,
    private router: Router
    
  ) {
    this.jobs = db.collection('jobs').valueChanges();

   
      this.jobParam = this.route.snapshot.params['searchTxt'];
      
  
      console.log(this.jobParam);
    };
    
  
  ngOnInit() {
  
  }

}
