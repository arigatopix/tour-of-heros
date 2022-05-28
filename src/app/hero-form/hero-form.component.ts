import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.scss'],
})
export class HeroFormComponent implements OnInit {
  heroFormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });

  constructor() {}

  ngOnInit(): void {}
}
