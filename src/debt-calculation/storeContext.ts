import { createContext, useContext, useRef } from 'react';
import { createDebtStore } from './store';

export type DebtStore = ReturnType<typeof createDebtStore>;

export const DebtStoreContext = createContext({} as DebtStore);

export function useDebtStore() {
  return useContext(DebtStoreContext);
}

export function useCreateDebtStore() {
  const storeRef = useRef<DebtStore>();

  if (storeRef.current === undefined) {
    // can pass optional props
    storeRef.current = createDebtStore();
  }

  return storeRef.current;
}
