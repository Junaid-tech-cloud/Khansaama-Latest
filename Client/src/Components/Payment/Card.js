import React from 'react';
import './Card.css';

export default function Card() {
    return (
        <div>
        <div>
        <div id="card-success" className="hidden">
          <i className="fa fa-check" />
          <p>Payment Successful!</p>
        </div>
        <div id="form-errors" className="hidden">
          <i className="fa fa-exclamation-triangle" />
          <p id="card-error">Card error</p>
        </div>
        <div id="form-container">
          <div id="card-front">
            <div id="shadow" />
            <div id="image-container">
              <span id="amount">paying: <strong>$99</strong></span>
              <span id="card-image">
              </span>
            </div>
            {/*- end card image container -*/}
            <label htmlFor="card-number">
              Card Number
            </label>
            <input type="text" id="card-number" placeholder="1234 5678 9101 1112" length={16} />
            <div id="cardholder-container">
              <label htmlFor="card-holder">Card Holder
              </label>
              <input type="text" id="card-holder" placeholder="e.g. John Doe" />
            </div>
            {/*- end card holder container -*/}
            <div id="exp-container">
              <label htmlFor="card-exp">
                Expiration
              </label>
              <input id="card-month" type="text" placeholder="MM" length={2} />
              <input id="card-year" type="text" placeholder="YY" length={2} />
            </div>
            <div id="cvc-container">
              <label htmlFor="card-cvc"> CVC/CVV</label>
              <input id="card-cvc" placeholder="XXX-X" type="text" min-length={3} max-length={4} />
              <p>Last 3 or 4 digits</p>
            </div>
            {/*- end CVC container -*/}
            {/*- end exp container -*/}
          </div>
          {/*- end card front -*/}
          <div id="card-back">
            <div id="card-stripe">
            </div>
          </div>
          {/*- end card back -*/}
          <input type="text" id="card-token" />
          <button type="button" id="card-btn">Submit</button>
        </div>
      </div>
      
        </div>
    )
}
