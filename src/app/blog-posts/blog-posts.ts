import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post-service';
import { BlogCreatePost } from "../blog-create-post/blog-create-post";
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-blog-posts',
  imports: [BlogCreatePost, CommonModule, RouterLink, RouterModule],
  templateUrl: './blog-posts.html',
  styleUrl: './blog-posts.css'
})
export class BlogPosts implements OnInit {
  posts: any[] = [];
  constructor(private _postService: PostService) {
  }

  ngOnInit(): void {
    this._postService.getAll()
      .subscribe({
        next: (response) => {
          this.posts = response; console.log('response = ' + this.posts);
        }
      });
  }
}
