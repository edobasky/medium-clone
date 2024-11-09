import {Component, OnInit} from '@angular/core'
import {RouterOutlet} from '@angular/router'
import { TopBarComponent } from './shared/components/topBar/topbar.component'
import { Store } from '@ngrx/store'
import { authActions } from './auth/store/action'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [RouterOutlet,TopBarComponent],
})
export class AppComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    console.log("app started")
    this.store.dispatch(authActions.getCurrentUser())
  }

}
