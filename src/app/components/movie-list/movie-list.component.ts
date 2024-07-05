import { Component, Input } from '@angular/core';
import { log } from 'node:console';
import { off } from 'node:process';
import { TimePipesPipe } from "../../pipes/time-pipes.pipe";
import { MaterialMovieCardComponent } from '../material-movie-card/material-movie-card.component';
import { movies } from '../mock-data';


@Component({
  selector: 'app-movie-list',
  standalone: true,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
  imports: [TimePipesPipe, MaterialMovieCardComponent]
})
export class MovieListComponent {
  favorits: any[] = []
  wathList: any[] = []
  public dataMovies = movies
  handelAddFavorites(movie: any) {
    if (!this.favorits.some(el => el.id === movie.id)) this.favorits.push({ ...movie })
    const index = this.favorits.findIndex(el => el.id === movie.id);
    this.favorits[index].chaced = true
    console.log(this.favorits);

  }
  handelAddWathList(movie: any) {
    if (!this.wathList.some(el => el.id === movie.id)) this.wathList.push({ ...movie })
    const index = this.wathList.findIndex(el => el.id === movie.id);
    this.wathList[index].chaced = true
  }
  removeCheckedMovie(data: any, arr: any) {
    let newArr
    newArr = arr.filter((item: any) => item !== data);
    arr === this.favorits ? this.favorits = newArr : this.wathList = newArr
  }
}
