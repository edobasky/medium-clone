import { createFeature, createReducer, on } from "@ngrx/store";
import { AuthStateInterface } from "../types/authState.interface";
import { authActions } from "./action";
import { routerNavigatedAction, routerNavigationAction } from "@ngrx/router-store";


const initialState : AuthStateInterface = {
  isSubmitting: false,
  currentUser: undefined,
  isLoading: false,
  validationErrors: null
}


const authFeature = createFeature({
  name: 'auth',
  reducer: createReducer(
     initialState,
     on(authActions.register, (state) => ({...state, isSubmitting: true,validationErrors: null})),
     on(authActions.registerSuccess, (state,action) => ({...state, isSubmitting: false, currentUser : action.currentUser})),
     on(authActions.registerFailure, (state,action) => ({...state, isSubmitting: false, validationErrors: action.errors,})),

     on(authActions.login, (state) => ({...state, isSubmitting: true,validationErrors: null})),
     on(authActions.loginSuccess, (state,action) => ({...state, isSubmitting: false, currentUser : action.currentUser})),
     on(authActions.loginFailure, (state,action) => ({...state, isSubmitting: false, validationErrors: action.errors,})),


     on(authActions.getCurrentUser, (state) => ({...state, isLoading: true})),
     on(authActions.getCurrentUserSuccess, (state,action) => ({...state, isLoading: false, currentUser : action.currentUser})),
     on(authActions.loginFailure, (state,action) => ({...state, isLoading: false,currentUser : null,})),

     on(routerNavigationAction, (state) => ({...state, validationErrors: null}))
  ),
})

export const {name: authFeatureKey, reducer: authReducer,selectIsSubmitting,selectCurrentUser,selectIsLoading,selectValidationErrors} = authFeature
