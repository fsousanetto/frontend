import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(
    private _snackbar: MatSnackBar
  ) { }

  openSnackBar(message: string, confirmation: string, isError: boolean) {
    this._snackbar.open(message, confirmation, {
      duration: 3000,
      panelClass: [`${isError ? 'error-snackbar' : 'success-snackbar'}`],
      verticalPosition: 'top',
      horizontalPosition: 'center'
    })
  }

  openErrorSnackBar(message?: string) {
    this._snackbar.open(
      `Algo deu errado, tente novamente! erro: ${message}`,
      'Fechar',
      {
        duration: 3000,
        panelClass: ['error-snackbar'],
        verticalPosition: 'top',
        horizontalPosition: 'center'
      }
    )
  }

  openSuccessSnackBar(message: string) {
    this._snackbar.open(message, 'Fechar', {
      duration: 3000,
      panelClass: ['success-snackbar'],
      verticalPosition: 'top',
      horizontalPosition: 'center'
    })
  }
}
