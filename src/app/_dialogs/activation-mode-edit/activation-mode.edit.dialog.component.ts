import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ActivationModeService, UserService } from '../../_services';
import { IActivationMode } from '../../_models'
import { Global } from '../../_shared';


@Component({
  selector: 'app-baza.dialog',
  templateUrl: '../activation-mode-edit/activation-mode.edit.dialog.component.html',
  styleUrls: ['../activation-mode-edit/activation-mode.edit.dialog.component.scss']
})
export class ActivationModeEditDialogComponent {

  actMode: IActivationMode;

  constructor(public dialogRef: MatDialogRef<ActivationModeEditDialogComponent>,
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

  stopEdit(): void {

    if (!this.userService.canEdit())
    {
      this.toastr.error("您没有添加及修改活化模式的权限。","权限验证失败");
      return;
    }

    var userId = this.userService.currentUserId();
    this.data.modifiedUserId = userId;
    if (this.data.id < 1)
      return;
    this.actModeService.updateActMode(Global.BASE_ACTIVATION_MODE_ENDPOINT + this.data.id, this.data)
    .subscribe(
      data => {
          this.actMode = data;
          this.toastr.success("活化模式修改成功。", "操作成功");
        },
      error => {
          this.toastr.error("活化模式修改失败。", "操作失败");
      }
    );
  }
}
