import { Component } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { Router } from '@angular/router';
import { MenuService } from '../../core/services/menu.service';
import { UserInterface } from '../../core/interfaces/user';

@Component({
  selector: 'app-menu',
  imports: [CoreModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {
  isOpenMenu = false;
  user: UserInterface | null = null;

  constructor(
    private readonly router: Router,
    private menuService: MenuService
  ) {
    this.menuService.isOpen$.subscribe((open) => (this.isOpenMenu = open));

    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData) as UserInterface
    }
  }

  closeMenu(): void {
    this.menuService.close();
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refresh_token');
    this.router.navigate(['/auth/login']);
  }
}
