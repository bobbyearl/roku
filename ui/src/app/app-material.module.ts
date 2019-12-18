import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  exports: [
    MatButtonModule,
    MatGridListModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDividerModule,
    MatExpansionModule
  ]
})
export class AppMaterialModule { }