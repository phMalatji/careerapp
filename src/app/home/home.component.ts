import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
searchInput='test';
  constructor(private router: Router) { }

  ngOnInit() {
  }

  searchJob(searchTxt:string){
    console.log(searchTxt);
    this.router.navigate(['jobs', searchTxt]);
  }
}
