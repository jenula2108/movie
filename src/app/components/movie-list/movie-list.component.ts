import { Component,Input } from '@angular/core';
import { MovieCardComponent } from '../movie-card/movie-card.component';
import { log } from 'node:console';


@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss'
})
export class MovieListComponent {
  movie = {
    backdrop_path: "../../assets/image/Planet_of_the_Apes_(2001)_poster.jpg",
    id: 653346,
    overview: "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
    release_date: "May 5, 2024",
    title: "Kingdom of the Planet of the Apes",
    rating: 8.5
  };

  favorits:any
  wathList:any
  handelAddFavorites(title:any){
    if (!this.favorits) {
      this.favorits=title
    }
    
    
    
  }
  handelAddWathList(title:any){
    if (!this.wathList) {
      this.wathList=title
    }
  }
}
