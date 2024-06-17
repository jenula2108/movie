import { Component,Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MovieCardComponent,MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  @Input() data:any
  
}
  // constructor() {
  //   console.log('constructor');

  // }
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log('ngOnChanges');

  // }
  // ngOnInit(): void {
  //   console.log('ngOnInit');

  // }
  // ngAfterContentInit(): void {
  //   console.log('ngAfterContentInit');

  // }
  // ngAfterContentChecked(): void {
  //   console.log('ngAfterContentChecked');

  // }
  // ngAfterViewInit(): void {
  //   console.log('ngAfterViewInit');

  // }
  // ngAfterViewChecked(): void {
  //   console.log('ngAfterViewChecked');

  // }
  // ngOnDestroy(): void {
  //   console.log('ngOnDestroy');

  // }

