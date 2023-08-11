import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommentService } from 'src/app/services/comment.service';

import { FormGroup, FormControl, Validators } from '@angular/forms'

import { Comment } from 'src/app/Models/comment';
import { BlogService } from 'src/app/services/blog.service';

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
  commentData: Comment[] = [];

  form = new FormGroup({
    title: new FormControl('', [Validators.required]),
    body: new FormControl('', [Validators.required])
  })

  constructor(private blogService: BlogService, @Inject(MAT_DIALOG_DATA) private data: any, private dialogRef: MatDialogRef<BlogDialogComponent>, private commentService: CommentService) {
    this.isUpdate = data.isUpdate
    if (data.isUpdate) {
      this.form.patchValue({
        title: this.data.blog.title,
        body: this.data.blog.body
      })
    }
    else {
      this.imageUrl = data.blog.imageId.toString();
      this.title = data.blog.title;
      this.body = data.blog.body;
    }
  }

  ngOnInit() {
    this.commentService.getComments().subscribe((res) => {
      this.commentData = res.filter((x: { postId: number }) => x.postId === this.data.blog.id);
    })
  }

  close() {
    this.dialogRef.close();

  }

  onSubmit() {
    const request = {
      title: this.form.get("title")?.value,
      body: this.form.get("body")?.value,
      imageId: this.data.blog.imageId,
      userId: this.data.blog.userId
    }
    this.blogService.updatePosts(this.data.blog.id, request).subscribe(res => {
      this.dialogRef.close();
    });
  }

}