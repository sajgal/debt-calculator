import { OrderBy } from "../debt-calculation/store";
import { useDebtStore } from "../debt-calculation/storeContext";
import { useObservable } from "../utils/observableUtils";

function DebtForm() {
  const { state, actions } = useDebtStore();
  const orderBy = useObservable(state.orderBy$);

  return (
    <div className='flex flex-col justify-center min-h-screen items-center'>
      <h2>Debt Form</h2>
      <form className='w-1/3 bg-slate-100 p-4 shadow-sm'>
        <div className='mb-4'>
          <label htmlFor='sum-needed' className='block text-pink-700 font-bold mb-2'>Sum needed (EUR)</label>
          <input type='number' id='sum-needed' name='sum-needed' className='w-full p-2 border border-pink-700 rounded' />
        </div>
        <div className='mb-4'>
          <label htmlFor='savings-aud' className='block text-pink-700 font-bold mb-2'>Savings in AUD</label>
          <input type='number' id='savings-aud' name='savings-aud' className='w-full p-2 border border-pink-700 rounded' />
        </div>
        <div className='mb-4'>
          <label htmlFor="order">Choose a car:</label>
          <select name="order" id="order" form="carform" value={orderBy} onChange={(event) => actions.setOrderBy(event.target.value as OrderBy)}>
            <option value="NAME_ASC">Name ASC</option>
            <option value="NAME_DESC">Name DESC</option>
          </select>
        </div>
      </form>
    </div>
  );
}

export default DebtForm;