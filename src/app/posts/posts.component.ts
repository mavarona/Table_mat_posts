import {
  Component,
  EventEmitter,
  ViewChild,
  Input,
  Output,
  SimpleChanges
} from '@angular/core';

// Angular Material
import {
  MatTableDataSource,
  MatSort,
  MatPaginator
} from '@angular/material';

// Models
import { IPost } from './../models/post';
import { IComment } from '../models/comment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  displayedColumns = ['userId', 'id', 'title', 'body', 'viewComments'];
  dataSource: MatTableDataSource<IPost>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() posts: Array<IPost>;
  @Input() comments: Array<IComment>;
  @Output() getComments: EventEmitter<string> = new EventEmitter<string>();

  selectedRowIndex: number = -1;

  constructor() { }

  applyFilter ( filterValue: string ) {

    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;

  }

  getCommentsByPostId ( postId: string ) {

    this.getComments.emit(postId);

  }

   // tslint:disable-next-line:use-life-cycle-interface
   ngOnInit(): void {

    this.dataSource = new MatTableDataSource<IPost>(this.posts);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

   }

   // tslint:disable-next-line:use-life-cycle-interface
   ngOnChanges(changes: SimpleChanges): void {

    if ( this.comments ) {
      console.log('yes');
    }

   }

}
