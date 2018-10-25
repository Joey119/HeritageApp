import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Component, Inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { HeritageService, UserService } from '../../_services';
import { Global } from '../../_shared';


@Component({
  selector: 'heritage-delete.dialog',
  templateUrl: '../heritage-delete/heritage-delete.dialog.component.html',
  styleUrls: ['../heritage-delete/heritage-delete.dialog.component.scss']
})
export class HeritageDeleteDialogComponent {

  constructor(public dialogRef: MatDialogRef<HeritageDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public heritageService: HeritageService,
    private toastr: ToastrService,
    private userService: UserService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  confirmDelete(): void {

    if (!this.userService.canEdit()) {
      this.toastr.error("You do not have permission to delete a heritage.", "Permission Denied")
      return;
    }

    this.heritageService.deleteHeritage(Global.BASE_HERITAGE_ENDPOINT, this.data.id)
      .subscribe(
        data => {
          this.toastr.success("Heritage was suceessfully deleted.", "Succeeded");
        }
      );
  }
}