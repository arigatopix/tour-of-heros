import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HeroService } from '../hero.service';
import { Hero } from '../hero';
@Component({
  selector: 'app-heroes',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss'],
})
export class HerosComponent implements OnInit {
  heroes: Hero[] = [];

  message: string = '';

  constructor(private heroService: HeroService) {}

  ngOnInit(): void {
    this.heroService.getHeroes().subscribe({
      next: (hs) => (this.heroes = hs),
      error: (err) => (this.message = err.message),
    });
  }

  onDeleteHeroHandler(id: number) {
    this.heroService.deleteHero(id).subscribe(() => {
      this.heroes = this.heroes.filter((h) => h.id !== id);
    });
  }
}
