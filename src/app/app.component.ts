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
  warned = false;
  isGreater(rank:number){
    return rank < this.hideUpTo;
  }

  setSelected(selected:number){
    if(this.hideUpTo > 50 && selected <= 20 && !this.warned){
      this.warned = true;
      alert(`You are about to reveal all the way up to #${selected} are you sure this is what you want???, if so click again. This warning will not appear again.`);
    }else{
      this.hideUpTo = selected;
    }
    
  }

  ngOnInit() {
    console.log('init');
  }
}
