import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app/app.routes";
import { provideState, provideStore } from "@ngrx/store";
import { authFeatureKey, authReducer } from "./app/auth/store/reducers";
import { provideStoreDevtools } from "@ngrx/store-devtools";
import { isDevMode } from "@angular/core";

bootstrapApplication(AppComponent, {providers: [
  provideRouter(appRoutes),
  provideStore(),
  provideState(authFeatureKey, authReducer),
  
]});
