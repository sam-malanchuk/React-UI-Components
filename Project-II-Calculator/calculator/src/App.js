import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="calculatorBody">
      {/* <h3>Welcome to React Calculator</h3>
      <p>
        We have given you a starter project. You'll want to build out your
        components in their respective files, remove this code and replace it
        with the proper components.
      </p>
      <p>
        <strong>
          Don't forget to `default export` your components and import them here
          inside of this file in order to make them work.
        </strong>
      </p> */}
      <div className="calcRow">
        <div className="calcDisplay">0</div>
      </div>
      <div className="calcRow">
        <div className="btn btn-large">clear</div>
        <div className="btn operation">&divide;</div>
      </div>
      <div className="calcRow">
        <div className="btn">7</div>
        <div className="btn">8</div>
        <div className="btn">9</div>
        <div className="btn operation">&times;</div>
      </div>
      <div className="calcRow">
        <div className="btn">4</div>
        <div className="btn">5</div>
        <div className="btn">6</div>
        <div className="btn operation">&minus;</div>
      </div>
      <div className="calcRow">
        <div className="btn">1</div>
        <div className="btn">2</div>
        <div className="btn">3</div>
        <div className="btn operation">+</div>
      </div>
      <div className="calcRow">
        <div className="btn btn-large">0</div>
        <div className="btn operation">=</div>
      </div>
    </div>
  );
};

export default App;
