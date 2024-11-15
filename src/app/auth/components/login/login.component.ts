import { Component } from "@angular/core";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";
import { authActions } from "../../store/action";
import { RegisterRequestInterface } from "../../types/registerRequest.interface";
import { RouterLink } from "@angular/router";
import { selectIsSubmitting } from "../../store/selectors";
import { AuthStateInterface } from "../../types/authState.interface";
import { CommonModule } from "@angular/common";
import { AuthService } from "../../services/auth.service";
import { selectValidationErrors } from "../../store/reducers";
import { combineLatest } from "rxjs";
import { BackendErrorMessages } from "src/app/shared/components/backendErrorMessages/backendErrorMessages.component";
import { LoginRequestInterface } from "../../types/loginRequest.interface";

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,CommonModule,BackendErrorMessages]
})
export class LoignComponent {

 form = this.fb.nonNullable.group({
   email:['',Validators.required],
   password:['', Validators.required],
 })


data$ = combineLatest({
  isSubmitting: this.store.select(selectIsSubmitting),
  backendErrors : this.store.select(selectValidationErrors)
})


  constructor(
    private fb : FormBuilder,
    private store: Store<{auth : AuthStateInterface}>,
    private authService: AuthService) {}

  onSubmit() {
   console.log('form', this.form.getRawValue());
   const request: LoginRequestInterface = {
    user : this.form.getRawValue(),
   }
   console.log("about to dispatch login action");
   this.store.dispatch(authActions.login({request}));
   //this.authService.login(request).subscribe((res)=> console.log('res',res));
  }
}
