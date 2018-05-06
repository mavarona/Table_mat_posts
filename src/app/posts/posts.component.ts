import {
  Component,
  ViewChild,
  Input
} from '@angular/core';

// Angular Material
import {
  MatTableDataSource,
  MatSort,
  MatPaginator
} from '@angular/material';

// Models
import { IPost } from './../models/post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

  displayedColumns = ['userId', 'id', 'title', 'body'];
  dataSource: MatTableDataSource<IPost>;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() posts: Array<IPost>;

  selectedRowIndex: number = -1;

  constructor() { }

  highlight ( row ) {
      this.selectedRowIndex = row.id;
  }

   // tslint:disable-next-line:use-life-cycle-interface
   ngOnInit(): void {

    this.dataSource = new MatTableDataSource<IPost>(this.posts);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;

   }

}
