import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from "@angular/cdk/drag-drop";
import {BoardModel} from "../shared/models/board.model";
import {ColumnModel} from "../shared/models/column.model";

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public board: BoardModel = new BoardModel('Board', [
    new ColumnModel(
      'Todo',
      ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep']),
    new ColumnModel(
      'Research',
      ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep']),
    new ColumnModel(
      'Done',
      ['Get up', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog']),

  ]);


  drop(event: CdkDragDrop<string[]>) {
    debugger
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
