import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { UserInterface } from '../../interfaces/user';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { Auth, GoogleAuthProvider, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject = new BehaviorSubject<UserInterface | null>(null)

  public user: UserInterface | undefined;
  private readonly TOKEN = 'accessToken';
  private readonly REFRESH_TOKEN = 'refresh_token';

  constructor(
    private http: HttpClient,
    private router: Router,
    private afAuth: Auth
  ) { }

  getUser(user: any) {
    if (this.user?.name) {
      localStorage.getItem(this.user.name);
    }
    this.user = user
  }

  setUser(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
    this.user = user;
    this.userSubject.next(user);
  }

  setToken(token: string) {
    localStorage.setItem(this.TOKEN, JSON.stringify(token));
  }

  getToken(): any {
    const token = localStorage.getItem(this.TOKEN);
    if (!token) {
      throw new Error('Token não encontrado.');
    }

    try {
      const decodedToken: any = jwtDecode(token);
      return decodedToken;
    } catch (error) {
      console.error('Erro ao decodificar o token JWT:', error);
      throw new Error('Token inválido.');
    }
  }

  async loginWithGoogle(): Promise<boolean> {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.afAuth, provider);
      const user = result.user;

      if (user) {
        const idToken = await user.getIdToken(true);
        console.log('ID Token do Google:', idToken);
        const response: any = await firstValueFrom(
          this.http.post('http://localhost:7654/api/auth/google', { idToken })
        );

        if (response && response.accessToken) {
          localStorage.setItem(this.TOKEN, response.accessToken);
          this.router.navigate(['/home']);
          return true;
        }
      }
      return false;
    } catch (error) {
      console.log('Erro ao fazer login com o google: ', error);
      return false;
    }
  }

  logout() {
    localStorage.removeItem(this.TOKEN);
    localStorage.removeItem(this.REFRESH_TOKEN);
    localStorage.removeItem('user');
    this.userSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  isLoged() {
    const token = localStorage.getItem(this.TOKEN);
    console.log('AuthService.isLoged(): Token encontrado', token);
    return !!token;
  }
}
