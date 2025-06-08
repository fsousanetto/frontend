import { Component, OnInit } from '@angular/core';
import { CoreModule } from '../../core/core.module';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../../core/services/user/user.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { MenuService } from '../../core/services/menu.service';

@Component({
  selector: 'app-header',
  imports: [CoreModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit {
  isOpenMenu = false;
  userName: string | null = null;

  constructor(
    private http: HttpClient,
    private readonly userService: UserService,
    private readonly router: Router,
    private menuService: MenuService
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('accessToken');

    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        const userName = decodedToken.name;

        console.log('Nome do usuário:', userName);
      } catch (error) {
        console.error('Erro ao decodificar o token JWT:', error);
      }
    }

    this.getUserName();
  }

  getUserName(): void {
    const accessToken = localStorage.getItem('accessToken');

    if (accessToken) {
      try {
        const decodedToken: any = jwtDecode(accessToken);
        this.userName = decodedToken.name;

        console.log('Nome do usuário recuperado do token:', this.userName);
      } catch (error) {
        console.error('Erro ao decodificar o token JWT:', error);
      }
    } else {
      console.error('Token não encontrado no localStorage.');
    }
  }

  goToProfile() {
    this.router.navigate(['/profile']);
  }

  toggleMenu(): void {
    this.menuService.toggle();
  }
}
