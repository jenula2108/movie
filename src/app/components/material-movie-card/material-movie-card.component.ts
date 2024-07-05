import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { TimePipesPipe } from "../../pipes/time-pipes.pipe";

@Component({
  selector: 'app-material-movie-card',
  standalone: true,
  templateUrl: './material-movie-card.component.html',
  styleUrl: './material-movie-card.component.scss',
  imports: [MatCardModule, MatButtonModule, TimePipesPipe]
})
export class MaterialMovieCardComponent {
  // removeCheckedMovie() {
  //   throw new Error('Method not implemented.');
  // }
  @Input() data: any
  @Output() addFavorites = new EventEmitter<any>()
  @Output() addWathList = new EventEmitter<any>()
  @Output() removeMovie = new EventEmitter<any>()
  addToFavorites() {
    this.addFavorites.emit(this.data)
  }
  addToWathList() {
    this.addWathList.emit(this.data)
  }
  removeToMovie() {
    this.removeMovie.emit(this.data)
  }
}
