import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [],
  templateUrl: './movie-card.component.html',
  styleUrl: './movie-card.component.scss'
})
export class MovieCardComponent {
  @Input() data: any
  @Output() addFavorites = new EventEmitter<any>()
  @Output() addWathList = new EventEmitter<any>()
  addToFavorites() {
    this.addFavorites.emit(this.data)
  }
  addToWathList() {
    this.addWathList.emit(this.data)
  }
}
