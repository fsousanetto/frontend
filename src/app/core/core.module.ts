import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app.routes';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    RouterModule,
    RouterLinkActive,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    AppRoutingModule
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    RouterModule,
    RouterLinkActive,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    AppRoutingModule,
  ],
})
export class CoreModule {}
