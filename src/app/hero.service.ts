import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Hero } from './hero';

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

  updateHero(hero: Hero): Observable<Hero> {
    return this.httpClient.put<Hero>(
      `${this.basedUrl}/heroes/${hero.id}`,
      hero
    );
  }

  addNewHero(hero: Hero): Observable<Hero> {
    return this.httpClient.post<Hero>(`${this.basedUrl}/heroes`, hero);
  }

  deleteHero(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.basedUrl}/heroes/${id}`);
  }

  searchHero(term: string): Observable<Hero[]> {
    return this.httpClient.get<Hero[]>(`${this.basedUrl}/heroes?q=${term}`);
  }
}
