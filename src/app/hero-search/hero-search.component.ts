import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroService } from '../hero.service';

import { Hero } from '../hero';
import { Observable, switchMap } from 'rxjs';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit {
  termFormControl = new FormControl();

  heroes: Hero[] = [];

  heroes$!: Observable<Hero[]>;

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    // this.termFormControl.valueChanges.subscribe((value) => {
    //   // รับค่า input change
    //   this.heroService // ส่งไป get api
    //     .searchHero(value)
    //     .subscribe((heroes) => (this.heroes = heroes));
    // });
    // 2) refactor callback hell
    // this.termFormControl.valueChanges
    //   .pipe(switchMap((value) => this.heroService.searchHero(value)))
    //   .subscribe((heroes) => (this.heroes = heroes));

    // use async pipe
    this.heroes$ = this.termFormControl.valueChanges.pipe(
      switchMap((value) => this.heroService.searchHero(value))
    );
  }
}
