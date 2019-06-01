import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const App = () => {
  return (
    <div className="calculatorBody">
      <div className="calcRow">
        <CalculatorDisplay />
      </div>
      <div className="calcRow">
        <ActionButton text="clear" />
        <NumberButton buttonStyle="btn operation" text="&divide;" />
      </div>
      <div className="calcRow">
        <NumberButton buttonStyle="btn" text="7" />
        <NumberButton buttonStyle="btn" text="8" />
        <NumberButton buttonStyle="btn" text="9" />
        <NumberButton buttonStyle="btn operation" text="&times;" />
      </div>
      <div className="calcRow">
        <NumberButton buttonStyle="btn" text="4" />
        <NumberButton buttonStyle="btn" text="5" />
        <NumberButton buttonStyle="btn" text="6" />
        <NumberButton buttonStyle="btn operation" text="&minus;" />
      </div>
      <div className="calcRow">
        <NumberButton buttonStyle="btn" text="1" />
        <NumberButton buttonStyle="btn" text="2" />
        <NumberButton buttonStyle="btn" text="3" />
        <NumberButton buttonStyle="btn operation" text="+" />
      </div>
      <div className="calcRow">
        <ActionButton text="0" />
        <NumberButton buttonStyle="btn operation" text="=" />
      </div>
    </div>
  );
};

export default App;
