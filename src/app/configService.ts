import { Injectable, inject, Signal, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { catchError, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private http = inject(HttpClient);
  private configUrl = 'assets/config.json';
  config: Signal<any> = signal(null);
  sidebarExpanded = signal(false);
  currentPage = signal('Home');

  constructor() {
    this.loadConfig();
  }

  private loadConfig() {
    this.config = toSignal(
      this.http.get(this.configUrl).pipe(
        catchError((err) => {
          console.error('Error while loading configuration:', err);
          return of(null);
        })
      )
    );
  }
  
}
