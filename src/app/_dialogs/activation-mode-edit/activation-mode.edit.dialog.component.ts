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
    var userId = this.userService.currentUserId();
    this.data.modifiedUserId = userId;
    if (this.data.id < 1)
      return;
    this.actModeService.updateActMode(Global.BASE_ACTIVATION_MODE_ENDPOINT + this.data.id, this.data)
    .subscribe(
      data => {
          this.actMode = data;
          this.toastr.success("Activation mode suceessfully updated.", "Succeeded");
        },
      error => {
          this.toastr.error("Failed to update activation mode", "Failed")
      }
    );
  }
}
