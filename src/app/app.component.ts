import { Joke } from './models/joke';
import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CatsPhoto } from './models/cats-photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  joke$: Observable<Joke>;
  catUrl$: Observable<CatsPhoto>;

  constructor() { }

  ngOnInit(): void {
    
  }
}
