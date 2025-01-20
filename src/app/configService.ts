import { Injectable, inject, Signal, signal, WritableSignal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';

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
    const config$ = this.http.get(this.configUrl);
    this.config = toSignal(config$);
  }
}
