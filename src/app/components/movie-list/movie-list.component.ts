import { Component, Input } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { log } from 'node:console';
import { off } from 'node:process';
import { SumePipesPipe } from "../../pipes/sume-pipes.pipe";


@Component({
  selector: 'app-movie-list',
  standalone: true,
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
  imports: [MovieCardComponent, SumePipesPipe]
})
export class MovieListComponent {
  favorits: any[] = []
  wathList: any[] = []
  @Input() someData: any
  handelAddFavorites(el: any) {
    if (!this.favorits.includes(el)) this.favorits.push(el)
    console.log(this.favorits);

  }
  handelAddWathList(el: any) {
    if (!this.wathList.includes(el)) this.wathList.push(el)
  }
  removeCheckedMovie(title: any, arr: any) {
    let newArr
    newArr = arr.filter((item: any) => item !== title);
    arr === this.favorits ? this.favorits = newArr : this.wathList = newArr
  }
}
