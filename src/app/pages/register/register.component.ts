import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user/user.service';
import { SnackbarService } from '../../core/services/snackbar.service';
import { CoreModule } from '../../core/core.module';
import { UserInterface } from '../../core/interfaces/user';

@Component({
  selector: 'app-register',
  imports: [CoreModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  registerForm: FormGroup;
  loading = false;
  passwordInput = '';
  passwordHasUppercase = false;
  passwordHasSpecial = false;
  passwordHasNumber = false;
  passwordHasMinLength = false;

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private snackBarService: SnackbarService,
    private router: Router
  ) {
    this.registerForm = this.fb.group(
      {
        name: ['', [Validators.required, Validators.minLength(2)]],
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  ngDoCheck() {
    const password = this.registerForm.get('password')?.value || '';
    this.passwordHasUppercase = /[A-Z]/.test(password);
    this.passwordHasSpecial = /[!@#$%^&*]/.test(password);
    this.passwordHasNumber = /[0-9]/.test(password);
    this.passwordHasMinLength = password.length >= 6;
  }

  get allPasswordRulesValid(): boolean {
    return (
      this.passwordHasUppercase &&
      this.passwordHasSpecial &&
      this.passwordHasNumber &&
      this.passwordHasMinLength
    );
  }

  passwordsMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    if (password !== confirmPassword) {
      form
        .get('confirmPassword')
        ?.setErrors({ ...form.get('confirmPassword')?.errors, mismatch: true });
    } else {
      if (form.get('confirmPassword')?.hasError('mismatch')) {
        const errors = { ...form.get('confirmPassword')?.errors };
        delete errors['mismatch'];
        if (Object.keys(errors).length === 0) {
          form.get('confirmPassword')?.setErrors(null);
        } else {
          form.get('confirmPassword')?.setErrors(errors);
        }
      }
    }
    return null;
  }

  onPasswordEvent(event: Event): void {
    const target = event.target as HTMLInputElement | null;
    this.passwordInput = target?.value || '';
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      this.snackBarService.openSnackBar(
        'Preencha todos os campos corretamente.',
        'Fechar',
        true
      );
      return;
    }

    const { name, email, password } = this.registerForm.value;
    this.loading = true;
    const user: UserInterface = {
      name: name || '',
      email: email || '',
      password: password || '',
    };
    this.userService
      .postUser(user)
      .subscribe({
        next: () => {
          this.snackBarService.openSnackBar(
            'Usuário cadastrado com sucesso!',
            'Fechar',
            false
          );
          this.router.navigate(['/auth/login']);
        },
        error: (error) => {
          this.snackBarService.openSnackBar(
            error?.error?.message || 'Erro ao cadastrar usuário',
            'Fechar',
            true
          );
          this.loading = false;
        },
        complete: () => {
          this.loading = false;
        },
      });
  }
}
