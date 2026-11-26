import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  imports: [FormsModule,FormsModule],
  selector: 'app-exercise-4',
  styleUrl: './exercise-4.css',
  templateUrl: './exercise-4.html',
})
export class Exercise4 {
 word: string = '';

  words: string[] = [];

  add() {
    const text = this.word.trim();

    if (text == '') {
      return;
    }

    this.words.push(text);
    this.word = '';
  }

}


