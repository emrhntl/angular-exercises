import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommentService } from 'src/app/services/comment.service';

import { Comment } from 'src/app/Models/comment';

@Component({
  selector: 'app-blog-dialog',
  templateUrl: './blog-dialog.component.html',
  styleUrls: ['./blog-dialog.component.css']
})
export class BlogDialogComponent {

  isUpdate!: boolean;
  imageUrl!: string;
  title!: string;
  body!: string;
  commentData!: Comment[];

  constructor(@Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<BlogDialogComponent>, private commentService: CommentService) {
    this.isUpdate = data.isUpdate
    if (data.isUpdate) {

    }
    else {
      this.imageUrl = data.blog.imageId.toString();
      this.title = data.blog.title;
      this.body = data.blog.body;
    }
  }

  ngOnInit() {
    this.commentService.getComments().subscribe((res) => {
      this.commentData = res.filter((x:{postId:number}) => x.postId === this.data.blog.id);
    })
  }

  close() {
    this.dialogRef.close();

  }

}
