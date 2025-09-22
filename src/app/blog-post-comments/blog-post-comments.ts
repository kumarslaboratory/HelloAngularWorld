import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment-service';

@Component({
  selector: 'app-blog-post-comments',
  imports: [],
  templateUrl: './blog-post-comments.html',
  styleUrl: './blog-post-comments.css'
})
export class BlogPostComments implements OnInit {
  protected comments : any[] = [];
  constructor(private _commentService : CommentService) { 
  }

  ngOnInit(): void {
    this._commentService.getAll()
    .subscribe({ next: (response) => this.comments = response } );
  }
}
