import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HeroService } from '../hero.service';

import { Hero } from '../hero';
import {
  Observable,
  switchMap,
  Subject,
  takeUntil,
  debounceTime,
  distinctUntilChanged,
} from 'rxjs';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss'],
})
export class HeroSearchComponent implements OnInit, OnDestroy {
  termFormControl = new FormControl();

  heroes: Hero[] = [];

  heroes$!: Observable<Hero[]>;

  // ควรจะ unsubscribe ป้องกัน memory leak
  _destroy$ = new Subject<void>();

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
      // การใช้ pipe
      takeUntil(this._destroy$),
      debounceTime(300), // ป้องกันยิง api รัวๆ ทุกครั้งที่พิมพ์
      distinctUntilChanged(), // การกด delete แล้วไม่ยิง api ซ้ำ
      switchMap((value) => this.heroService.searchHero(value))
    );
  }

  ngOnDestroy(): void {
    this._destroy$.next();
  }
}
