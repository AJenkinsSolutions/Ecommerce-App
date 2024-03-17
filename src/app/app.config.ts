import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule, provideAnimations } from '@angular/platform-browser/animations';
import { provideState, provideStore } from '@ngrx/store';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { counterReducer } from './ngrx/reducers/counter.reducer';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { productListReducer } from './ngrx/reducers/product-list.reducer';
import { provideEffects } from '@ngrx/effects';
import { ProductListEffect } from './ngrx/effects/product-list.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(),
    provideAnimations(),
    provideHttpClient(withFetch()),
    provideStore(),
    provideStoreDevtools({maxAge: 25}),
    provideState('counter', counterReducer),
    provideState('productList', productListReducer),
    provideEffects(ProductListEffect)
    
  ]
};
