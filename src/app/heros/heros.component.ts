import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';

import { Hero } from '../hero';
import { FnParam } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-heroes',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss'],
})
export class HerosComponent implements OnInit {
  heroes: Hero[] = [];

  heroFormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
  });

  constructor(private heroService: HeroService) {}

  // .subscribe({
  //   next: fn,
  //   error: fn,
  //   complete: fn,
  // })

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe({
      next: (hs) => (this.heroes = hs),
      error: (err) => console.log(err),
    });
  }

  onSelectHero(hero: Hero): void {
    this.heroFormGroup.setValue(hero);
  }
}
