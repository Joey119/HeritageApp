import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivationModeService, UserService } from '../../_services';
import { Global } from '../../_shared';


@Component({
  selector: 'activation-mode-delete.dialog',
  templateUrl: '../activation-mode-delete/activation-mode.delete.dialog.component.html',
  styleUrls: ['../activation-mode-delete/activation-mode.delete.dialog.component.scss']
})
export class ActivationModeDeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<ActivationModeDeleteDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, 
              public actModeService: ActivationModeService,
              private toastr: ToastrService,
              private userService: UserService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {

    if (!this.userService.canEdit())
    {
      this.toastr.error("您没有删除活化模式的权限。","权限验证失败");
      return;
    }

    this.actModeService.deleteActMode(Global.BASE_ACTIVATION_MODE_ENDPOINT, this.data.id)
    .subscribe(
      data => {
          this.toastr.success("活化模式删除成功。", "操作成功");
        },

      error => {
          this.toastr.error("活化模式删除失败。", "操作失败");
      }
    );
  }
}
