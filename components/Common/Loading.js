// const Loading = () => {
//   return (
//     <div className='loading'>
//       <h1>Loading.....</h1>
//     </div>
//   );
// };

// export default Loading;

// import React from 'react';
// import ReactLoading from 'react-loading';

// const Loading = () => (
//   <ReactLoading
//     className='loader'
//     type={'spin'}
//     color='#fff'
//     height={150}
//     width={150}
//   />
// );

// export default Loading;

import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export const hideLoading = () => {
  var loader = document.getElementById('loader');
  loader.style.display = 'none';
};

export const showLoading = () => {
  var loader = document.getElementById('loader');
  loader.style.display = 'flex';
};

const Loading = () => {
  return (
    <>
      <div
        id='loader'
        style={{
          position: 'absolute',
          zIndex: 10000,
          color: 'white',
          background: 'grey',
          height: '100%',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          display: 'none',
          opacity: 0.8,
        }}
      >
        <div className='loader'></div>
        {/* <ProgressSpinner
          style={{ width: '50px', height: '50px' }}
          strokeWidth='8'
          fill='var(--surface-ground)'
          animationDuration='1s'
        /> */}
      </div>
    </>
  );
};
export default Loading;
