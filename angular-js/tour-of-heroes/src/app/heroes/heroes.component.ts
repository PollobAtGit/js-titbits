import { Component, OnInit } from '@angular/core';
import { Hero } from "./../hero";
import { heroes } from "./../mock-heroes";

@Component({
  selector: 'heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  allHeroes: Hero[];

  constructor() {
    this.allHeroes = heroes;
  }

  onHeroSelected(hero: Hero) {
    this.selectedHero = hero;
  }

  ngOnInit() {
  }

}
