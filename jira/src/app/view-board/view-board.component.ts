import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../Services/board.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewBoardDialogComponent } from './view-board-dialog/view-board-dialog.component';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent {
  boardIndex: any = 0;
  boardTitle: string = '';
  constructor(private route: ActivatedRoute, public boardService: BoardService, private matDialog: MatDialog) { }

  ngOnInit(): void {

    this.boardIndex = this.route.snapshot.paramMap.get('boardIndex');
    this.boardTitle = this.boardService.boards[this.boardIndex].title;

  }

  openNewCardDialog() {
    const dialog = this.matDialog.open(ViewBoardDialogComponent, {
      width: '500px',
      data: { boardIndex: this.boardIndex }
    });
  }

}
