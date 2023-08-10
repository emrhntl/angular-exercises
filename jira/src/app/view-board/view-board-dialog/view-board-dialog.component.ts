import { Component, Inject, } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BoardService } from 'src/app/Services/board.service';

@Component({
  selector: 'app-view-board-dialog',
  templateUrl: './view-board-dialog.component.html',
  styleUrls: ['./view-board-dialog.component.css']
})
export class ViewBoardDialogComponent {
  title: string = "";
  tasks: Array<String> = [""];
  tasksLoop: Array<any> = [false];

  constructor(private dialogRef: MatDialogRef<ViewBoardDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any
    , public boardService: BoardService, private snackBar: MatSnackBar) {

  }

  deleteTask(index: number) {

  }

  addTask() {
    this.tasks.push("");
    this.tasksLoop.push(false);
  }

  close() {
    this.dialogRef.close();
  }

  create() {

    if (this.tasks.some((task: String) => task === "")) {
      this.snackBar.open("Task can't be empty", 'OK', {
        duration: 950
      });
      return;
    }
    this.boardService.boards[this.data.boardIndex].cards.push(
      {
        title: this.title,
        checkList: this.tasks,
        status: this.tasksLoop
      }
    )
    this.boardService.updateDataToLocaleStorage();
    this.close();
  }

}
