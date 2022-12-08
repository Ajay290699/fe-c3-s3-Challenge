import { Component, Input } from '@angular/core';
import { note} from '../models/note';
import { notes } from '../models/notes';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent {

  @Input()
  dashData: note[]=[];

  searchComponent(searchText:string){
    if(searchText == '' || searchText == null){
      this.dashData = notes;
    }
    else{
      this.dashData = notes;
      this.dashData = this.dashData.filter(abc => abc.title?.startsWith(searchText));
    }
  }

  addedNoteComponet(data:any){
    this.dashData.push(data)
  }

}