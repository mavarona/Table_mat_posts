import { Injectable } from '@angular/core';

// Environment
import { environment } from '../environments/environment';

// Http
import { HttpClient } from '@angular/common/http';

// Models
import { IComment } from './models/comment';
import { IPost } from './models/post';

// rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _pathUrlPost: string = environment.pathPost;
  private _pathUrlComments: string = environment.pathComment;

  constructor(
    private _http: HttpClient
  ) { }

  getPosts$ (): Observable<Array<IPost>> {

    return this._http
               .get<Array<IPost>>( this._pathUrlPost );
  }

  getCommentsByPost$ ( id: string ): Observable<Array<IComment>> {

    return this._http
               .get<Array<IComment>>( `${this._pathUrlComments}=${id}` );
  }

}
