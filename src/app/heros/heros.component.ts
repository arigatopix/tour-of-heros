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
  hero = {
    id: 1,
    name: 'bas',
  };

  heroFormControl = new FormControl(this.hero, Validators.required);

  heroFormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {
    this.heroFormControl.setValue(this.hero.name);
    this.heroFormGroup.setValue(this.hero);
  }
}
