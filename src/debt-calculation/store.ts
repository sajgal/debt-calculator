import { Subject, map, shareReplay, startWith, tap } from 'rxjs';
import { withInitialValue } from '../utils/observableUtils';

export type OrderBy = 'NAME_DESC' | 'NAME_ASC';

export function createDebtStore() {
  const setOrderByEvent$ = new Subject<OrderBy>();
  const orderBy$ = setOrderByEvent$.pipe(
    // tap((orderBy) => console.log('------- orderBy', orderBy)),
    // map((orderBy) => orderBy),
    startWith('NAME_ASC'),
    shareReplay(1),
  );

  return {
    state: {
      orderBy$: withInitialValue(orderBy$, 'NAME_ASC'),
    },
    actions: {
      setOrderBy: (orderBy: OrderBy) => setOrderByEvent$.next(orderBy),
    },
  };
}
