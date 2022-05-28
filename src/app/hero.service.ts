import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  basedUrl: string = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  getHeroes(): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.basedUrl}/heroes`);
  }

  getHero(id: number): Observable<Hero> {
    return this.httpClient.get<Hero>(`${this.basedUrl}/heroes/${id}`);
  }
}
