import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HEROS } from '../mock-heros';
import { Hero } from '../hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss'],
})
export class HerosComponent implements OnInit {
  heros = HEROS;

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
