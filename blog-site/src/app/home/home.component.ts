import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Post } from '../Models/post';
import { MatDialog } from '@angular/material/dialog';
import { BlogDialogComponent } from './blog-dialog/blog-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  blogData!: Array<Post>;

  page: number = 0;
  pageSize: number = 8;


  constructor(private blogService: BlogService, private dialog: MatDialog) {

  }

  ngOnInit() {
    this.blogService.getPosts().subscribe((res) => {
      this.blogData = res;
    })
  }

  openDialog(element: Post, type: boolean) {
    const dialogRef = this.dialog.open(BlogDialogComponent, {
      data: {
        blog: element,
        isUpdate: type
      }
    });


  }

}
