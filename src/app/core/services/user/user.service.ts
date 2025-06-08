import { AuthService } from './../auth/auth.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from '../../../environments/environment';
import { LoginResponse, UserInterface } from './../../interfaces/user';
import { LoginRequest } from '../../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private router: Router
  ) { }

  public getUser(): Observable<any> {
    const url = `${environment.apiUrl}/users`;
    return this.http.get<{ name: string }>(url)
  }

  public postUser(newUser: Partial<UserInterface>): Observable<UserInterface> {
    return this.http.post<UserInterface>(environment.apiUrl + '/users/register', newUser)
  }

  public postLogin(loginRequest: LoginRequest): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(environment.apiUrl + '/auth/login', loginRequest, {
      headers: {
        'Skip-Interceptor': 'true'
      }
    }).pipe(
        tap((response: any) => {
          if (response.accessToken && response.refreshToken) {
            this.authService.setUser(response.accessToken);
            this.authService.setToken(response.refreshToken);
          } else {
            console.error('Resposta inválida da API:', response);
          }
        })
    )
  }

  public updateUser(body: Partial<UserInterface>): Observable<any> {
    return this.http.put(environment.apiUrl + '/user', body);
  }

  public getUserBalance(): Observable<number> {
    return this.http.get<number>(`${environment.apiUrl}/users/balance`)
  }

  public getCategories() {
    return this.http.get<any[]>(`${environment.apiUrl}/categories`);
  }
}
