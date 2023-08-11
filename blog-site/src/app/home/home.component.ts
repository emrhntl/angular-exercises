import { Component, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';
import { Post } from '../Models/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  blogData!: Array<Post>;

  page: number = 0 ;
  pageSize: number = 8;


  constructor(private blogService: BlogService) {

  }

  ngOnInit() {
    this.blogService.getPosts().subscribe((res) => {
      this.blogData = res;
    })
  }

}
