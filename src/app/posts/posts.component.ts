import {
  Component,
  EventEmitter,
  ViewChild,
  Input,
  Output,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';

// Angular Material
import {
  MatDialog,
  MatDialogConfig,
  MatPaginator,
  MatSort,
  MatTableDataSource
} from '@angular/material';

// Components
import { DialogCommentsComponent } from './dialog-comments/dialog-comments.component';

// Models
import { IPost } from './../models/post';
import { IComment } from '../models/comment';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostsComponent {

  displayedColumns = ['userId', 'id', 'title', 'body', 'viewComments'];
  dataSource: MatTableDataSource<IPost>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() posts: Array<IPost>;
  @Input() comments: Array<IComment>;
  @Output() getComments: EventEmitter<string> = new EventEmitter<string>();

  // tslint:disable-next-line:no-inferrable-types
  selectedRowIndex: number = -1;

  constructor(
    private _dialog: MatDialog,
  ) { }

  applyFilter ( filterValue: string ) {

    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;

  }

  getCommentsByPostId ( postId: string ) {

    this.getComments.emit(postId);

  }

  // tslint:disable-next-line:member-ordering
  private static dialogConfig(data): MatDialogConfig {

    const config: MatDialogConfig = new MatDialogConfig;
    config.width = '700px';
    config.data = data;
    return config;

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

      setTimeout(() => this._dialog.open(DialogCommentsComponent, PostsComponent.dialogConfig(this.comments)));

    }

   }

}
