import { Injectable } from '@angular/core';

// Environment
import { environment } from '../environments/environment';

// Http
import { HttpClient } from '@angular/common/http';

// Models
import { IPost } from './models/post';

// rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _pathUrl: string = environment.pathPost;

  constructor(
    private _http: HttpClient
  ) { }

  getPosts$ (): Observable<Array<IPost>> {

    return this._http
               .get<Array<IPost>>( this._pathUrl );
  }

}
