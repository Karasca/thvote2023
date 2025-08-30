import { Component, OnInit } from '@angular/core';
import characterList2023 from '../data/votedata.json';
import characterList2022 from '../data/votedata2022.json';
import characterList2024 from '../data/votedata2024.json';
import characterList2025 from '../data/votedata2025.json';

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
  characters = characterList2025;
  hideUpTo = 1000;
  displayedColumns: string[] = ['ranking', 'rankinglast', 'rankingbeforelast', 'name', 'points','nr1votes', 'comments', 'fanworks'];
  warned = false;
  selected = 2025;
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
    if(this.characters === characterList2025){
      this.characters = characterList2024;
      this.selected = 2024;
    }else{
      this.characters = characterList2025;
      this.selected = 2025;
    }
  }

  ngOnInit() {
    console.log('init');
  }
}
