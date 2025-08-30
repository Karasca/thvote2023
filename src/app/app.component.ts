import { Component, OnInit } from '@angular/core';
import confetti from 'canvas-confetti';
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

type Entry = {
	ranking: number;
	rankinglast: number;
	rankingbeforelast: number;
	name: string;
	points: number;
	nr1votes: number;
	comments: number;
	fanworks: number;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{	
  title = 'tvapp';
  characters = characterList2025;
  hideUpTo = 1000;
  displayedColumns: string[] = ['ranking', 'rankingdiff', 'rankinglast', 'rankingbeforelast', 'name', 'points','nr1votes', 'comments', 'fanworks'];
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
	  if(selected <= 1){
		this.celebrate();
	  }
    }
    
  }
  
	celebrate(){
		confetti({
			particleCount: 75,
			startVelocity: 80,
			angle: 45,
			spread: 55,
			origin: { x: 0 }
		  });

		confetti({
			particleCount: 75,
			startVelocity: 80,
			angle: 135,
			spread: 55,
			origin: { x: 1 }
		});
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
  
  get_diff(character:Entry){
	return character.rankinglast - character.ranking || 0;
  }
  
  negDiff(diff:number){
	return diff < 0;
  }
  
  posDiff(diff:number){
	return diff > 0;
  }
  
  get_bold(diff:number){
	 let abs_diff:number = Math.abs(0 - diff)
	 
	 switch(true){
	   case abs_diff >= 20:
	     return "bolder";
		 break;
	   case abs_diff >= 10:
	     return "bold";
		 break;
	   default:
	     return ""
	 }
  }
  
  skull(diff:number){
	if(diff <= -40){
	  return "💀"
	}else{
	  return ""
	}
  }
  
  star(diff:number){
	if(diff >= 40){
	  return "⭐"
	}else{
	  return ""
	}
  }

  ngOnInit() {
    console.log('init');
  }
}
