import { Component, OnInit } from '@angular/core';
import characterList2023 from '../data/votedata.json';
import characterList2022 from '../data/votedata2022.json';

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
  characters = characterList2023;
  hideUpTo = 1000;
  displayedColumns: string[] = ['ranking', 'rankinglast', 'rankingbeforelast', 'name', 'points','nr1votes', 'comments', 'fanworks'];
  warned = false;
  selected = 2023;
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

  swapYear(){
    if(this.characters === characterList2023){
      this.characters = characterList2022;
      this.selected = 2022;
    }else{
      this.characters = characterList2023;
      this.selected = 2023;
    }
  }

  ngOnInit() {
    console.log('init');
  }
}
