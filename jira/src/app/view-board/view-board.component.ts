import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BoardService } from '../Services/board.service';
import { MatDialog } from '@angular/material/dialog';
import { ViewBoardDialogComponent } from './view-board-dialog/view-board-dialog.component';
import { Task } from '../Models/task';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-view-board',
  templateUrl: './view-board.component.html',
  styleUrls: ['./view-board.component.css']
})
export class ViewBoardComponent {
  displayedColumns: string[] = ['task', 'status', 'delete'];
  boardIndex: any = 0;
  board!: any;


  constructor(private route: ActivatedRoute, public boardService: BoardService, private matDialog: MatDialog) { }

  @ViewChild(MatTable) table!: MatTable<Task>;
  ngOnInit(): void {

    this.boardIndex = this.route.snapshot.paramMap.get('boardIndex');
    this.board = this.boardService.boards[this.boardIndex];
  }

  openNewCardDialog() {
    const dialog = this.matDialog.open(ViewBoardDialogComponent, {
      width: '500px',
      data: { boardIndex: this.boardIndex }
    });
  }

  deleteCard(index: number, title: string) {
    console.log(this.boardService.boards[0].cards[0].title)
    this.boardService.boards[index].cards = this.boardService.boards[index].cards.filter((card: any) => {
      return title !== card.title;
    })
    this.save();
  }

  deleteTask(index: number, task: string) {
    let newCheckList = this.board.cards[index].checkList.filter((card: Task) => {
      return card.task !== task
    })
    this.board.cards[index].checkList = newCheckList;
  }

  addNewTask(index: number) {
    let newTask: Task = {
      task: 'New task',
      status: false
    }
    this.boardService.boards[this.boardIndex].cards[index].checkList.push(newTask);
    this.table.renderRows();
  }

  updateTask(task: string, newTask: any, index: number) {
    let checks: Array<Task> = this.boardService.boards[this.boardIndex].cards[index].checkList;

    const newIndex = checks.findIndex((check) => check.task == task);

    checks[newIndex].task = newTask;

    this.boardService.boards[this.boardIndex].cards[index].checkList = checks;

  }

  yazdir() {
    console.log(this.boardService.boards[0]);
  }
  save() {
    this.boardService.updateDataToLocaleStorage();
  }
}
