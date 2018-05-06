import { Component } from '@angular/core';

// Models
import { IPost } from './models/post';

// Services
import { ApiService } from './api.service';
import { IComment } from './models/comment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  _posts: Array<IPost>;
  _comments: Array<IComment>;

  constructor (
    private _apiService: ApiService
  ) {

    this.getPosts();

  }

  getPosts() {

    this._apiService.getPosts$()
         .subscribe( data => {
           this._posts = data;
         });

  }

  getCommentByPost ( postId: string ) {

    this._apiService.getCommentsByPost$( postId )
         .subscribe( data => {
           this._comments = data;
         });

  }

}
