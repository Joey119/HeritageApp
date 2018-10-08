import { NgModule } from '@angular/core';

import { FileUploadModule } from 'primeng/fileupload';
import { TableModule } from 'primeng/table';



@NgModule({
  imports: [FileUploadModule,
    TableModule
    ],

  exports: [FileUploadModule,
    TableModule
    ]

})

export class AppPrimeNGModule {}