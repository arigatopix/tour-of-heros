import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  constructor() {}

  // void -> Observable<Hero[]>
  // <Hero[]> เป็นการ check type แบบใส่ type คล้าย arg function
  getHeroes(): Observable<Hero[]> {
    // หลังจาก get ข้อมูลให้ return
    return of(HEROES);
    // return throwError(() => {
    //   return {
    //     status: 404,
    //     message: 'Not Found',
    //   };
    // });
  }

  // input id
  // hero เป็น mock-data
  getHero(id: number): Observable<Hero> {
    const hero = HEROES.find((hero) => hero.id === id)!;
    // ใส่ ! บอก compli ว่าอนาคตจะมี value มา assign
    return of(hero);
  }
}
