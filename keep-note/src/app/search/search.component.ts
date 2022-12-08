import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchNoteText:string='';

  @Output()
  SearchNote1= new EventEmitter<string>();

  searchNote(){
    this.SearchNote1.emit(this.searchNoteText);
  }

  ngOnInit(){
  }

}
