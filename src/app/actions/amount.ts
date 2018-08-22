import { Action } from '@ngrx/store';

export const AMOUNTCHANGE = '[Amount] Change'; //zie line 6 type.

export class AmountChangeAction implements Action {
    type = AMOUNTCHANGE;                //deze Action class heeft maar 1 type?
    constructor(public payload: number){
    }
}
