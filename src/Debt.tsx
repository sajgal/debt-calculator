import './App.css'
import DebtForm from './Components/DebtForm';
import { DebtStoreContext, useCreateDebtStore } from './debt-calculation/storeContext';

function Debt() {
  const store = useCreateDebtStore();

  return (
    <DebtStoreContext.Provider value={store}>
      <DebtForm />
    </DebtStoreContext.Provider>
  )
}

export default Debt;
