import { Component } from '@angular/core';
import { AmountChangeAction } from './actions/amount';
import { Store } from '@ngrx/store';

import * as fromRoot from './reducers';
import { Observable } from 'rxjs';
import { Currency } from './models/currency';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public amount$: Observable<number>;
  public currencyRates$: Observable<Currency[]>;

  constructor(public store: Store<fromRoot.State>) { // zie lijn 4
  this.amount$ = store.select(fromRoot.getAmountState); // zie index.ts lijn 17: returns (a piece of) state and
      // turns it into an Observable. DEPRECATED?????
   this.currencyRates$ = store.select(fromRoot.getCurrencyRates);
  }

  onAmountChange(amount) {
    const number = parseFloat(amount);
    if (!isNaN(number)) {this.store.dispatch(new AmountChangeAction(number));
    }
  }
  title = 'app';
}
