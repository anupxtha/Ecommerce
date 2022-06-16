import React, { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Toast(props) {
  const toastId = React.useRef(null);
  // useEffect(() => {
  //   let timer1 = setTimeout(() => props.handleShow(), 2500);
  //   return () => {
  //     clearTimeout(timer1);
  //   };
  // }, []);

  // const errorNotify = () => {
  //   if (!toast.isActive(toastId.current)) {
  //     toastId.current = toast(props.error);
  //   }
  // };

  useEffect(() => {
    msgNotify();
  }, []);

  const msgNotify = () => {
    if (!toast.isActive(toastId.current)) {
      toastId.current = toast(props.msg);
      let timer1 = setTimeout(() => props.handleShow(), 2500);
      return () => {
        clearTimeout(timer1);
      };
    }
  };

  const closeToast = () => {
    return props.handleShow();
  };

  const CloseButton = () => (
    <i className='material-icons' onClick={closeToast}>
      Del
    </i>
  );

  return (
    <div>
      {/* <span hidden>{msgNotify()}</span> */}
      <ToastContainer
        autoClose={1500}
        limit={1}
        closeButton={CloseButton}
        pauseOnHover={false}
      />
    </div>
  );
}

export default Toast;
