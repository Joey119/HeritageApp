import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../../_services';
import { IUser } from '../../_models'
import { Global } from '../../_shared';


@Component({
  selector: 'app-baza.dialog',
  templateUrl: '../edit/edit.dialog.component.html',
  styleUrls: ['../edit/edit.dialog.component.scss']
})
export class EditDialogComponent {

  user: IUser;

  constructor(public dialogRef: MatDialogRef<EditDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any, 
              public userService: UserService,
              private toastr: ToastrService) { }

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

    if (!this.userService.isAdmin())
    {
      this.toastr.error("您没有添加及修改用户信息的权限。","权限验证失败")
      return;
    }
    
    if (this.data.id < 1)
      return;
    this.userService.updateUser(Global.BASE_USER_ENDPOINT + this.data.id, this.data)
    .subscribe(
      data => {
          this.user = data;
          this.toastr.success("用户信息修改成功。", "操作成功");
        },
      error => {
          this.toastr.error("用户信息修改失败。", "操作失败")
      }
    );
  }
}
