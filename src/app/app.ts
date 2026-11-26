import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordSorter } from './word-sorter/word-sorter';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [RouterOutlet,WordSorter,FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tasks');
}
