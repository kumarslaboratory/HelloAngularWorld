import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo-service';

@Component({
  selector: 'app-blog-user-todos',
  imports: [],
  templateUrl: './blog-user-todos.html',
  styleUrl: './blog-user-todos.css'
})
export class BlogUserTodos implements OnInit {
  todos: any[] = [];
  constructor(private _todoService: TodoService) {
  }

  ngOnInit(): void {
    this._todoService.getAll().subscribe({ next: (response) => this.todos = response });
  }
}
