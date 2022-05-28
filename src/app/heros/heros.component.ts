import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss'],
})
export class HerosComponent implements OnInit {
  heros = HEROES;

  heroFormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}

  onSelectHero(hero: Hero): void {
    this.heroFormGroup.setValue(hero);
  }
}
