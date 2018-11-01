import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { ActivationModeService, UserService } from '../../_services';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IActivationMode } from '../../_models';
import { Global } from '../../_shared';

@Component({
  selector: 'activation-mode-add.dialog',
  templateUrl: '../activation-mode-add/activation-mode.add.dialog.component.html',
  styleUrls: ['../activation-mode-add/activation-mode.add.dialog.component.scss']
})

export class ActivationModeAddDialogComponent {

  newActMode: IActivationMode;

  constructor(public dialogRef: MatDialogRef<ActivationModeAddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IActivationMode,
              public actModeService: ActivationModeService,
              private toastr: ToastrService,
              private userService: UserService) { }

  formControl = new FormControl('', [
    Validators.required
    // Validators.email,
  ]);

  getErrorMessage() {
    return this.formControl.hasError('required') ? 'Required field' :
      this.formControl.hasError('email') ? 'Not a valid email' :
        '';
  }

  submit() {
  // emppty stuff
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  public confirmAdd(): void {

    if (!this.userService.canEdit())
    {
      this.toastr.error("您没有添加及修改活化模式的权限。","权限验证失败");
      return;
    }

    var userId = this.userService.currentUserId();
    this.data.createdUserId = userId;
    this.data.modifiedUserId = userId;
    this.actModeService.addActMode(Global.BASE_ACTIVATION_MODE_ENDPOINT, this.data)
    .subscribe(
      data => {
          this.newActMode = data;
          this.toastr.success("活化模式添加成功。", "操作成功");
        },
      error => {
          this.toastr.error("活化模式添加失败。", "操作失败");
      }
    );
  }
}
