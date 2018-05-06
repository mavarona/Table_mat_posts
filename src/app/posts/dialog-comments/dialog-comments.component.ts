import { Component, Inject } from '@angular/core';

// Material
import {
  MatDialogRef,
  MAT_DIALOG_DATA,
  MatTableDataSource
} from '@angular/material';

// Models
import { IComment } from '../../models/comment';

@Component({
  selector: 'app-dialog-comments',
  templateUrl: './dialog-comments.component.html',
  styleUrls: ['./dialog-comments.component.css']
})
export class DialogCommentsComponent {

  displayedColumns = ['id', 'name', 'email', 'body'];
  dataSource: MatTableDataSource<IComment>;

  constructor(
    public _dialogRef: MatDialogRef<DialogCommentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Array<IComment>,
  ) {

    this.dataSource = new MatTableDataSource<IComment>(data);

  }

}
