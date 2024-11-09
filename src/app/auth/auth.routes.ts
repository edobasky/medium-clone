import { Route } from "@angular/router";
import { RegisterComponent } from "./components/register/register.component";
import { LoignComponent } from "./components/login/login.component";



export const registerRoutes : Route[] = [
  {
    path:'',
    component: RegisterComponent
  }
]


export const loginRoutes : Route[] = [
  {
    path:'',
    component: LoignComponent
  }
]
