import React from 'react';
import KhaltiCheckout from 'khalti-checkout-web';
import config from './KhaltiConfig';
function Khalti() {
  if (process.browser) {
    let checkout = new KhaltiCheckout(config);
  }
  return (
    <div>
      <button>Pay Via Khalti</button>
    </div>
  );
}

export default Khalti;
