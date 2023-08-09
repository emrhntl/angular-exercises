import { Component } from '@angular/core';

import { FormControl, FormGroup, Validators } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog';
import { BoardService } from 'src/app/Services/board.service';


@Component({
  selector: 'app-board-dialog',
  templateUrl: './board-dialog.component.html',
  styleUrls: ['./board-dialog.component.css']
})
export class BoardDialogComponent {

  constructor(private dialogRef: MatDialogRef<BoardDialogComponent>, private boardService: BoardService) {

  }

  boardForm = new FormGroup(
    {
      title: new FormControl("", [Validators.required]),
    }
  )

  create() {
    this.boardService.createBoard(this.boardForm.get('title')?.value);
    this.close();
  }

  close() {
    this.dialogRef.close();
  }

}
