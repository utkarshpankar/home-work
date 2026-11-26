import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WordSorter } from './word-sorter/word-sorter';
import { FormsModule } from '@angular/forms';
import { Exercise4 } from './exercise-4/exercise-4';
import { Exercise5 } from './exercise-5/exercise-5';

@Component({
  imports: [RouterOutlet,WordSorter,FormsModule,Exercise4,Exercise5]
  ,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('tasks');
}
