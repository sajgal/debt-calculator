import { createContext, useContext, useRef } from 'react';
import { createDebtStore } from './store';

export type ExampleStore = ReturnType<typeof createDebtStore>;

export const DebtStoreContext = createContext({} as ExampleStore);

export function useDebtStore() {
  return useContext(DebtStoreContext);
}

export function useCreateDebtStore() {
  const storeRef = useRef<ExampleStore>();

  if (storeRef.current === undefined) {
    // can pass optional props
    storeRef.current = createDebtStore();
  }

  return storeRef.current;
}
