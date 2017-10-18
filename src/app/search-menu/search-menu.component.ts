import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-menu',
  templateUrl: './search-menu.component.html',
  styleUrls: ['./search-menu.component.css']
})
export class SearchMenuComponent implements OnInit {
selectedSector='lol';
  constructor() { }

  ngOnInit() {
  }

  updateSector(sec){
    this.selectedSector=sec;
    console.log(sec)
  }

}
