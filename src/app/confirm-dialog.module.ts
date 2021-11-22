import {NgModule} from '@angular/core';

import {MaterialModule} from 'C:/angular/lab/src/app/material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
  ],
  entryComponents: [
    ConfirmDialogComponent
  ],
})
export class ConfirmDialogModule {
}
