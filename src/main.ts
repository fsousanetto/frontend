import { AuthInterceptor } from './app/core/interceptors/auth.interceptor';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID } from '@angular/core';
registerLocaleData(ptBr, 'pt-BR');

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([AuthInterceptor])),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "frontend-financeiro", appId: "1:75577939547:web:51e67cb91aeda2882c517e", storageBucket: "frontend-financeiro.firebasestorage.app", apiKey: "AIzaSyClctxkJLnrr5K3OXN0KnTrMU2O9-gO3l0", authDomain: "frontend-financeiro.firebaseapp.com", messagingSenderId: "75577939547", measurementId: "G-2EPN6BN9T2" })), provideAuth(() => getAuth()),
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ]
})
  .catch((err) => console.error(err));

