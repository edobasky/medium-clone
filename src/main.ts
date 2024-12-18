import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app/app.routes";
import { provideState, provideStore } from "@ngrx/store";
import { authFeatureKey, authReducer } from "./app/auth/store/reducers";
import { provideHttpClient, withInterceptors } from "@angular/common/http";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { isDevMode } from "@angular/core";
import * as authEffects from './app/auth/store/effects'
import * as feedEffect from './app/shared/components/feed/store/effects'
import { provideEffects } from "@ngrx/effects";
import { provideRouterStore, routerReducer } from "@ngrx/router-store";
import { authInterceptor } from "./app/shared/services/authInterceptor";
import { feedFeatureKey, feedReducer } from "./app/shared/components/feed/store/reducers";

bootstrapApplication(AppComponent, {providers: [
  provideHttpClient(withInterceptors([authInterceptor])),
  provideRouter(appRoutes),
  provideStore({
    router : routerReducer
  }),
  provideRouterStore(),
  provideState(authFeatureKey, authReducer),
  provideState(feedFeatureKey, feedReducer),
  provideEffects(authEffects, feedEffect),
  provideStoreDevtools({
    maxAge : 25,
    logOnly : !isDevMode(),
    autoPause: true,
    trace: false,
    traceLimit: 75
  })
]});
