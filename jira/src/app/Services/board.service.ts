import { Injectable } from '@angular/core';

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
    let newBoardObject = {
      title,
      cards: []
    };
    this.boards.push(newBoardObject);
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }

  public deleteBoard(index: number) {
    this.boards.splice(index);
    localStorage.setItem('boards', JSON.stringify(this.boards));
  }

}
