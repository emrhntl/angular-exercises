import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { BoardDialogComponent } from './board-dialog/board-dialog.component';
import { BoardService } from '../Services/board.service';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent {

  constructor(private dialog: MatDialog, public boardService: BoardService) { }


  openNewBoardDialog() {
    const dialogRef = this.dialog.open(BoardDialogComponent, {
      width: '500px'
    })
  }

  deleteBoard(index: number) {
    this.boardService.deleteBoard(index);
  }

}
