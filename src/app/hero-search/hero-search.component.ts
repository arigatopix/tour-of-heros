import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroService } from '../hero.service';

import { Hero } from '../hero';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit {
  termFormControl = new FormControl();

  heroes: Hero[] = [];

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    // this.termFormControl.valueChanges.subscribe((value) => {
    //   // รับค่า input change
    //   this.heroService // ส่งไป get api
    //     .searchHero(value)
    //     .subscribe((heroes) => (this.heroes = heroes));
    // });

    // refactor callback hell
    this.termFormControl.valueChanges
      .pipe(switchMap((value) => this.heroService.searchHero(value)))
      .subscribe((heroes) => (this.heroes = heroes));
  }
}
