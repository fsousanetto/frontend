import { Component } from '@angular/core';
import { UserService } from '../../core/services/user/user.service';
import { AuthService } from '../../core/services/auth/auth.service';
import { SnackbarService } from '../../core/services/snackbar.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormatLoginPayload } from '../../core/services/utils/format-login-payload';
import { CoreModule } from '../../core/core.module';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-login',
  imports: [CoreModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;
  passwordVisible: boolean = false;
  faEye: any = faEye;
  faEyeSlash: any = faEyeSlash;
  loading = false;
  loadingGoogle = false;

  constructor(
    private readonly authService: AuthService,
    private readonly userService: UserService,
    private readonly snackBarService: SnackbarService,
    private readonly fb: FormBuilder,
    private readonly router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false],
    })
  }

  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  loginWithGoogle(event?: Event) {
    if (event) {
      event.preventDefault();
      this.loadingGoogle = true;
    }
    this.authService
      .loginWithGoogle()
      .then((success) => {
        this.loadingGoogle = false;
        if (!success) {
          this.snackBarService.openSnackBar(
            'Erro ao fazer login com o Google.',
            'Fechar',
            true
          );
        }
      })
      .catch((error) => {
        this.loadingGoogle = false;
        this.snackBarService.openSnackBar(
          'Erro inesperado ao fazer login com o Google.',
          'Fechar',
          true
        );
        console.error('Erro no loginWithGoogle:', error);
      });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      const payload = FormatLoginPayload(this.loginForm.value);
      this.loading = true;

      this.userService.postLogin(payload).subscribe({
        next: (response: any) => {
          if (response.accessToken && response.refreshToken) {
            localStorage.setItem('accessToken', response.accessToken);
            localStorage.setItem('refresh_token', response.refreshToken);

            this.router.navigate(['/home']);
          } else {
            this.snackBarService.openSnackBar(
              'Erro: Resposta inválida do servidor.',
              'Fechar',
              true
            );
          }
        },
        error: (error: any) => {
          this.snackBarService.openSnackBar(
            error?.error?.message || `Erro ao fazer login`,
            'Fechar',
            true
          );
          this.loading = false;
          console.error('Erro ao fazer login nesse trecho:', error);
        },
        complete: () => (this.loading = false),
      });
    } else {
      this.snackBarService.openSnackBar(
        'Por favor, preencha todos os campos corretamente.',
        'Fechar',
        true
      );
    }
  }
}
