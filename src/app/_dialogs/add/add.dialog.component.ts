import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { UserService } from '../../_services';
import { FormControl, Validators } from '@angular/forms';
import { IUser } from '../../_models';
import { Global } from '../../_shared';

@Component({
  selector: 'app-add.dialog',
  templateUrl: '../add/add.dialog.component.html',
  styleUrls: ['../add/add.dialog.component.scss']
})

export class AddDialogComponent {
  constructor(public dialogRef: MatDialogRef<AddDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: IUser,
              public userService: UserService) { }

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
    this.userService.addUser(Global.BASE_USER_ENDPOINT + 'add', this.data);
  }
}
