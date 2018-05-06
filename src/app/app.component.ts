import { Component } from '@angular/core';

// Models
import { IPost } from './models/post';

// Services
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  _posts: Array<IPost>;

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

}
