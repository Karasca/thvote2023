import { Component, OnInit } from '@angular/core';
import characterList from '../data/votedata.json';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'tvapp';
  characters = characterList;
  hideUpTo = 1000;
  displayedColumns: string[] = ['ranking', 'ranking2022', 'ranking2021', 'name', 'points','nr1votes', 'comments', 'fanworks'];
  
  isGreater(rank:number){
    return rank < this.hideUpTo;
  }

  setSelected(selected:number){
    this.hideUpTo = selected+1;
  }

  ngOnInit() {
    console.log('init');
  }
}
