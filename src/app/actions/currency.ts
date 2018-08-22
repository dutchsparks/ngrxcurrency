import { Currency } from './../models/currency';
import { Action } from '@ngrx/store';

export const CURRENCIESUPDATE = '[Currency] UpdateAll';
export const CURRENCIESUPDATED = '[Currency] UpdatedAll';

export class CurrenciesUpdateAction implements Action {
    type = CURRENCIESUPDATE;
                                        // geen payload blijkbaar, zal wel liggen aan wat voor soort actie het is
}

export class CurrenciesUpdatedAction implements Action {
    type = CURRENCIESUPDATED;
    constructor (public payload: Currency[]) {}
}
