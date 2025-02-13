import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes'; 
import { provideHttpClient, HttpClient } from '@angular/common/http';
import{TranslateHttpLoader} from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAnalytics, getAnalytics } from '@angular/fire/analytics';
import { firebaseConfig } from './firebase.config';

// Funcția pentru încărcarea fișierelor JSON
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/translations/', '.json');
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'en',
        useDefaultLang: true,
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient],
        }
      })
    ),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAnalytics(() => getAnalytics()),
  ],
};
