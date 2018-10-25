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
      this.toastr.error("You do not have permission to create or edit a activation mode.","Permission Denied")
      return;
    }

    var userId = this.userService.currentUserId();
    this.data.createdUserId = userId;
    this.data.modifiedUserId = userId;
    this.actModeService.addActMode(Global.BASE_ACTIVATION_MODE_ENDPOINT, this.data)
    .subscribe(
      data => {
          this.newActMode = data;
          this.toastr.success("Activation mode suceessfully added.", "Succeeded");
        },
      error => {
          this.toastr.error("Failed to add activation mode", "Failed")
      }
    );
  }
}
