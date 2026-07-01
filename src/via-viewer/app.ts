import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EntityTypeFilter } from './components/entity-type-filter/entity-type-filter';
import { EntityList } from "./components/entity-list/entity-list";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EntityTypeFilter, EntityList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('VLA');
}
