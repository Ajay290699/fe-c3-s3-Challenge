import { outputAst } from '@angular/compiler';
import { Component, Output, EventEmitter } from '@angular/core';
import { note } from '../models/note';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {

addNote : note={};

@Output()
addedNote = new EventEmitter();

add(){
  this.addedNote.emit(this.addNote)
}

// data = {this.addNote.id, this.addNote.title, this.addNote.content}

}
