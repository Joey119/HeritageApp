import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { UserService } from '../../_services';
import { FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { IUser } from '../../_models';
import { Global } from '../../_shared';

@Component({
  selector: 'app-add.dialog',
  templateUrl: '../add/add.dialog.component.html',
  styleUrls: ['../add/add.dialog.component.scss']
})

export class AddDialogComponent {

  newUser: IUser;

  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IUser,
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

  public confirmAdd(): void {

    if (!this.userService.isAdmin())
    {
      this.toastr.error("You do not have permission to create or edit a User.","Permission Denied")
      return;
    }

    this.userService.addUser(Global.BASE_USER_ENDPOINT + 'add', this.data)
    .subscribe(
      data => {
          this.newUser = data;
          this.toastr.success("User suceessfully added.", "Succeeded");
        },
      error => {
          this.toastr.error("Failed to add user", "Failed")
      }
    );
  }
}
