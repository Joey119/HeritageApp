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

    if (this.data.id < 1)
      return;
    this.userService.updateUser(Global.BASE_USER_ENDPOINT + this.data.id, this.data)
    .subscribe(
      data => {
          this.user = data;
          this.toastr.success("User suceessfully updated.", "Succeeded");
        },
      error => {
          this.toastr.error("Failed to update user", "Failed")
      }
    );
  }
}
