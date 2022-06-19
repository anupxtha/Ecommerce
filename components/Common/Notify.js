import { useContext } from 'react';
import { DataContext } from '../../store/GlobalState';
import Loading from './Loading';
import Toast from './Toast';

const Notify = () => {
  const [state, dispatch] = useContext(DataContext);
  const { notify } = state;
  return (
    <>
      {/* <Loading /> */}
      {notify.error && (
        <Toast
          error={notify.error}
          handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
        />
      )}
      {notify.success && (
        <Toast
          success={notify.success}
          handleShow={() => dispatch({ type: 'NOTIFY', payload: {} })}
        />
      )}
    </>
  );
};

export default Notify;
