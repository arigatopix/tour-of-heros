import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
// import { HEROS } from '../mock-heros';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss'],
})
export class HerosComponent implements OnInit {
  hero = 'bas เวลานอน มรณะ';
  // heros = HEROS;

  heroFormControl = new FormControl(this.hero, Validators.required);

  constructor() {}

  ngOnInit(): void {
    this.hero = this.hero + '🤣';
    this.heroFormControl.setValue(this.hero);
  }
}
