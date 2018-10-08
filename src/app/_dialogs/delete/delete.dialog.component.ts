import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { UserService } from '../../_services';
import { Global } from '../../_shared';


@Component({
  selector: 'app-delete.dialog',
  templateUrl: '../delete/delete.dialog.component.html',
  styleUrls: ['../delete/delete.dialog.component.scss']
})
export class DeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, public userService: UserService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.userService.deleteUser(Global.BASE_USER_ENDPOINT, this.data.id);
  }
}
