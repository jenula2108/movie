import { Component, Input } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { MovieCardComponent } from './components/movie-card/movie-card.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieCardComponent, MovieListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  movie = {
    backdrop_path: "../../assets/image/Planet_of_the_Apes_(2001)_poster.jpg",
    id: 653346,
    overview: "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
    release_date: "May 5, 2024",
    title: "Kingdom of the Planet of the Apes",
    rating: 8.5,
    time: 145
  };
  movies = [
    {
      backdrop_path: "../../assets/image/Planet_of_the_Apes_(2001)_poster.jpg",
      id: 653346,
      overview: "Several generations in the future following Caesar's reign, apes are now the dominant species and live harmoniously while humans have been reduced to living in the shadows. As a new tyrannical ape leader builds his empire, one young ape undertakes a harrowing journey that will cause him to question all that he has known about the past and to make choices that will define a future for apes and humans alike.",
      release_date: "May 5, 2024",
      title: "Kingdom of the Planet of the Apes",
      rating: 8.5,
      time: 168
    },
    {
      backdrop_path: "../../assets/image/image_2.jpg",
      id: 653646,
      overview: "Майк Феллон - професійний найманий вбивця, відомий у вузьких колах як Людина-нещасний випадок, адже усуває цілі, маскуючи свої дії під трагічну випадковість. Цього разу обставини приводять головного героя на сонячну Мальту, де він возз'єднується зі своїм старим приятелем Фінікі Фредом, разом із яким береться відточувати майстерність убивств. Одного разу двоє чоловіків потрапляють у пастку впливової кримінальної пані Зуузер і повинні за всяку ціну захистити її невдачливого сина Данте, за яким ведуть полювання найкращі у світі кілери.",
      release_date: "2022",
      title: "Нещасний випадок: Кілер на відпочинку / Канікули кілера",
      rating: 6.2,
      time: 176
    },
    {
      backdrop_path: "../../assets/image/image_3.jpg",
      id: 346545,
      overview: "Вночі водійка Клер забирає свого наступного пасажира, Карла Е., з особняка в Лос-Анджелесі. Клер, яка нещодавно переїхала до Лос-Анджелеса з Вамего, штат Канзас, ще не дуже добре орієнтується в маршрутах величезного міста, що змушує її цього разу їхати довшим шляхом, ніж зазвичай. За кермом молоді люди приємно і невимушено спілкуються. Але коли дівчина запитує Карла про особняк, той розповідає, що він убив сім’ю всередині за 40 хвилин до того, як Клер забрала його. Дізнавшись, що Клер — письменник-початківець, Карл каже їй, що якщо вона зможе розповісти йому хорошу історію, він її не вб'є.",
      release_date: 2020,
      title: "Незнайомець",
      rating: 7.2,
      time: 190
    },
    {
      backdrop_path: "../../assets/image/image_4.jpg",
      id: 442545,
      overview: "Історія починається з того, що зовсім дорослий Йона Дімлінг розповідає своїм трьом дітям і коханій дружині історію з власного дитинства про те, як він із величезним задоволенням проводив час із дідусем Брайаном. І хоча старший із синів спочатку виглядає байдужим, граючи в смартфоні, зовсім скоро він стає також цілком поглинутим захопливими подробицями. Саме цей уже померлий чоловік прищепив тоді ще хлопчику бажання й ентузіазм щорічного будівництва напередодні святкування Гелловіну так званого Будинку з привидами разом із друзями. Далі оповідь перемішується з флешбеками, в яких головний герой намагається емоційно та фізично впоратися з втратою та пережити горе, пов'язане зі смертю діда.",
      release_date: 2024,
      title: "Скеллі",
      rating: 7.3,
      time: 142
    },
    {
      backdrop_path: "../../assets/image/image_5.jpg",
      id: 232344,
      overview: "Дії фільму відбуваються в недалекому майбутньому. Людство давно почало пошуки планети, яка могла б стати для нього другою домівкою. Для дослідження космосу було запущено корабель, на борту якого перебували як люди, так і андроїди. Екіпажу вдається відшукати зовсім нову планету, яка, можливо, нарешті відповідатиме вимогам колонізації. Командир екіпажу завжди хотів бути схожим на свого батька, який очолив першу в історії людства експедицію. Самовпевнений і марнославний чоловік хоче бути першим, хто ступить на потенційний новий світ людей. Перед посадкою він напивається в барі, після чого в бійці ламає голову андроїду...",
      release_date: 2018,
      title: "Експедиція Юрського періоду",
      rating: 6.9,
      time: 187
    }
  ]
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

