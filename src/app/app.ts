import { Component, signal } from '@angular/core';
import { Header } from './components/header/header';
import { Home } from './components/home/home';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Header, Home, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('firstProject');
}
