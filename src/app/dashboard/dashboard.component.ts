import { Component, OnInit } from '@angular/core';
import { HEROES } from '../mock-heroes';
import { Hero } from '../hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  heros: Hero[] = HEROES.slice(0, 5);

  constructor() {}

  ngOnInit(): void {}
}
