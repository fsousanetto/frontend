import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-erro404',
  imports: [],
  templateUrl: './erro404.component.html',
  styleUrl: './erro404.component.scss',
})
export class Erro404Component {
  constructor(private router: Router) {}

  goToLogin() {
    this.router.navigate(['/auth/login']);
  }
}
