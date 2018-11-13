import { Component, OnInit, Input } from '@angular/core';
import {saveAs as importedSaveAs} from "file-saver";
import { ISystemFile } from '../_models';
import { FilesService, UserService } from '../_services';
import { Global } from '../_shared';

@Component({
  selector: 'app-file-manager',
  templateUrl: './file-manager.component.html',
  styleUrls: ['./file-manager.component.scss']
})
export class FileManagerComponent implements OnInit {

  errorMessage: string;
  fileList: ISystemFile[] = [];
  cols: any[];

  private _heritageID: number;

  @Input() 
  set heritageID(id: number){
    this._heritageID = id;
  }
  get heritageID(): number {
    return this._heritageID;
  }

  constructor(private _FilesService: FilesService,
              private _UserService: UserService) { }

  ngOnInit() {
    this.cols = [
      { field: 'id', header: '文件序号', display: 'none'},
      { field: 'heritageId', header: '非遗序号', display: 'none'},
      { field: 'fileName', header: '文件名称', display: 'table-cell'},
      { field: 'filePath', header: '文件路径', display: 'table-cell'},
      { field: 'uploadUserName', header: '上传用户', display: 'table-cell'}
    ];
    this.getFiles();
  }

  public getFiles() {
    this.errorMessage = "";
    //Clear Filelist
    this.fileList = [];
    // Call the service
    this._FilesService.getFiles(Global.BASE_FILE_ENDPOINT + 'getHeritageFile/' + this.heritageID)
        .subscribe((files) => {
            this.fileList = files;
        },
        error => this.errorMessage = <any>error);
  }

  public onUpload(event) {
    this.getFiles();
  }

  onBeforeSend(event) {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser && currentUser.token) {
      event.xhr.setRequestHeader("Authorization", `Bearer ${currentUser.token}`);
    }
    event.formData.append('heritageId', this.heritageID);
    event.formData.append('uploadUserId', this._UserService.currentUserId());
 }

  public deleteFile(id: number) {
    // Call the service
    this._FilesService.deleteFile(Global.BASE_FILE_ENDPOINT + id)
        .subscribe((response) => {
            // Refresh file list
            this.getFiles();
        },
        error => this.errorMessage = <any>error);
  }

  downloadFile(id: number, filename: string)
  {
    this._FilesService.downloadFile(Global.BASE_FILE_ENDPOINT + 'downloadFile/' + id).subscribe(
      blob => {
        importedSaveAs(blob, filename);
      }
    )
  }


}
