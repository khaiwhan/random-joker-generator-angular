import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Joke } from './app.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  text: Joke = { setup: "?????????????????????????", punchline: "?????????????????????????" };

  constructor(private sv: AppService) { }

  getJoke = () => this.sv.getJoke().subscribe((res: Joke) => this.text = res)

}
