import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.scss'],
})
export class HerosComponent implements OnInit {
  hero = 'bas เวลานอน มรณะ';

  constructor() {}

  ngOnInit(): void {
    this.hero = this.hero + '🤣';
  }
}
