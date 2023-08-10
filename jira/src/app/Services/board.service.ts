import { Injectable } from '@angular/core';

import { Task } from '../Models/task';

@Injectable({
  providedIn: 'root'
})
export class BoardService {

  public boards: Array<any> = [];

  constructor() {

    let str = localStorage.getItem("boards");
    if (str != null) {
      this.boards = JSON.parse(str);
    }
  }

  public createBoard(title: any) {
    let newCards: Task[] = [];
    let newBoardObject = {
      title,
      cards: newCards
    };
    this.boards.push(newBoardObject);
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }

  public deleteBoard(index: number) {
    this.boards.splice(index);
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }

  public updateDataToLocaleStorage() {
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }

}
