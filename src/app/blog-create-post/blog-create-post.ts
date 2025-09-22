import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { PostService } from '../services/post-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog-create-post',
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './blog-create-post.html',
  styleUrl: './blog-create-post.css'
})
export class BlogCreatePost {

  // #region ## Properties OR Fields ##

  

  // #endregion

   createPostForm = new FormGroup({
    postTitle : new FormControl('', [Validators.required, Validators.minLength(3)]),
    postBody : new FormControl('', [Validators.required, Validators.minLength(10)])
  }); 

  constructor(private _postService : PostService){
  }

  // #region ## Get Properties ##

  get postTitle() {
    return this.createPostForm.get('postTitle');
  }

  get postBody() {
    return this.createPostForm.get('postBody');
  }

  // #endregion

  onCreatePostFormSubmit(){
    this._postService.create(JSON.stringify(this.createPostForm.value))
    .subscribe({ 
      next: (response) => {
        console.log(response);
        let resultId = response.id as number;
        alert('Post Created Successfully with Id : ' + resultId);
        this.createPostForm.reset();
      }
     });
    // .subscribe(
    // response => {
    //   console.log(response);
    //   let resultId = response.id as number;
    //   alert('Post Created Successfully with Id : ' + resultId);
    //   this.createPostForm.reset();
    // },
    // error => {
    //     alert('Error Occurred while fetching posts from the server');
    //     console.error(error);
    // });
  }
}
