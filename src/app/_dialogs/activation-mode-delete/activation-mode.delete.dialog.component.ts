import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivationModeService } from '../../_services';
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
              private toastr: ToastrService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {
    this.actModeService.deleteActMode(Global.BASE_ACTIVATION_MODE_ENDPOINT, this.data.id)
    .subscribe(
      data => {
          this.toastr.success("Activation mode was suceessfully deleted.", "Succeeded");
        },

      error => {
          this.toastr.error("Failed to delete activation mode", "Failed")
      }
    );
  }
}
