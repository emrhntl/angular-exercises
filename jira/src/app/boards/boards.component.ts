import { Component } from '@angular/core';
import { MatDialog, MatDialogRef, MatDialogModule } from '@angular/material/dialog';
import { BoardDialogComponent } from './board-dialog/board-dialog.component';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.css']
})
export class BoardsComponent {

  constructor(private dialog: MatDialog) { }


  openNewBoardDialog() {
    const dialogRef = this.dialog.open(BoardDialogComponent, {
      width: '500px'
    })
  }

}
