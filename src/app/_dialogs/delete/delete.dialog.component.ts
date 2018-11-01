import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../_services';
import { Global } from '../../_shared';


@Component({
  selector: 'app-delete.dialog',
  templateUrl: '../delete/delete.dialog.component.html',
  styleUrls: ['../delete/delete.dialog.component.scss']
})
export class DeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<DeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, 
              public userService: UserService,
              private toastr: ToastrService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {

    if (!this.userService.isAdmin())
    {
      this.toastr.error("您没有删除用户的权限。","权限验证失败");
      return;
    }

    this.userService.deleteUser(Global.BASE_USER_ENDPOINT, this.data.id)
    .subscribe(
      data => {
          this.toastr.success("用户删除成功。", "操作成功");
        },

      error => {
          this.toastr.error("用户删除失败。", "操作失败");
      }
    );
  }
}
