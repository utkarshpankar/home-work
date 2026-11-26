import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-word-sorter',
  styleUrl: './word-sorter.css',
  templateUrl: './word-sorter.html',
})
export class WordSorter {

  word=""
onInputChange(event:Event){
  this.word=(event.target as HTMLInputElement).value

}

words=""

}
