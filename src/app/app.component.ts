import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { AsideComponent } from './features/home/aside/aside.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, CommonModule, AsideComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'spotifyclone';
  constructor(private titlesevices: Title) {
    this.titlesevices.setTitle('spotiiiiiiiiiii');
  }
}
