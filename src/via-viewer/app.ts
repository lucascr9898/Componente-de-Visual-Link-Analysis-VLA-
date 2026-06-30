import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntityTypeFilter } from './components/entity-type-filter/entity-type-filter';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EntityTypeFilter],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('VLA');
}
