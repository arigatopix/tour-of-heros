import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HeroService } from '../hero.service';

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

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    // this.route.snapshort.paramMap.get('id')
    // มาจากการ defind ใน route ได้ string or null

    // ใส่ hero ใน form ตาม id
    this.heroService
      .getHero(Number(id))
      .subscribe((hero) => this.heroFormGroup.setValue(hero));
  }

  onBackHandler() {
    this.location.back();
  }
}
