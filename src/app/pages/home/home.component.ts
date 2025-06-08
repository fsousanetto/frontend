import { jwtDecode } from 'jwt-decode';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { UserService } from '../../core/services/user/user.service';
import { CoreModule } from '../../core/core.module';
import { MenuComponent } from '../menu/menu.component';
import { HeaderComponent } from '../header/header.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserInterface } from '../../core/interfaces/user';

@Component({
  selector: 'app-home',
  imports: [CoreModule, MenuComponent, HeaderComponent, DashboardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent implements OnInit {
  userName: string | null = null;
  user: UserInterface | null = null;

  constructor(
    private http: HttpClient,
    private readonly route: Router,
    private readonly userService: UserService
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('accessToken');

    if (token) {
      try {
        const decodedToken: any = jwtDecode(token);
        this.userName = decodedToken.name;
        this.user = {
          id: decodedToken.sub,
          name: decodedToken.name,
          email: decodedToken.email,
        };
        console.log('Nome do usuário:', this.userName);
      } catch (error) {
        console.error('Erro ao decodificar o token JWT:', error);
      }
    } else {
      console.error('Token não encontrado no localStorage.');
    }

    this.getUserName();
  }

  getUserName(): void {
    const accessToken = localStorage.getItem('accessToken');

    if (!accessToken) {
      console.error('Access token não encontrado no localStorage.');
      this.route.navigate(['/login']);
      return;
    }

    try {
      const decodedToken: any = jwtDecode(accessToken);
      this.userName = decodedToken.name;
      this.user = {
        id: decodedToken.sub,
        name: decodedToken.name,
        email: decodedToken.email,
      };
      console.log('Nome do usuário recuperado do token:', this.userName);
    } catch (error) {
      console.error('Erro ao decodificar o token JWT:', error);
      this.logout();
      this.route.navigate(['/login']);
    }
  }

  refreshAccessToken(refreshToken: string): void {
    const refreshUrl = `${environment.apiUrl}/auth/refresh`;

    this.http
      .post<{ accessToken: string }>(refreshUrl, { refreshToken })
      .subscribe({
        next: (response) => {
          if (response.accessToken) {
            console.log('Access token renovado com sucesso.');
            localStorage.setItem('accessToken', response.accessToken);
            this.getUserName();
          } else {
            console.error('Resposta da API não contém um novo access token.');
            this.logout();
          }
        },
        error: (error) => {
          console.error('Erro ao renovar o access token:', error);
          this.logout();
        },
      });
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refresh_token');
    this.route.navigate(['/auth/login']);
  }
}
