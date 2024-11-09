import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { Store } from "@ngrx/store";
import { combineLatest } from "rxjs";
import { selectCurrentUser } from "src/app/auth/store/reducers";



@Component({
  selector: 'mc-topbar',
  templateUrl :'./topbar.component.html',
  standalone: true,
  imports : [CommonModule,RouterModule]
})

export class TopBarComponent {

  data$ = combineLatest({
    currentUser: this.store.select(selectCurrentUser)
  })
  constructor(private store : Store) {}
}
