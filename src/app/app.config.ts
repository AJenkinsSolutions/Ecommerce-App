import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { counterReducer } from './ngrx/reducers/counter.reducer';

export const appConfig: ApplicationConfig = {
  providers: [
    
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(),
    provideAnimations(),
    provideStore(),
    provideState('counter', counterReducer)
    
  ]
};
