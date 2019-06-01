import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const myButtons = [
  {buttonStyle: "btn operation", text: "÷"},
  {buttonStyle: "btn", text: "7"},
  {buttonStyle: "btn", text: "8"},
  {buttonStyle: "btn", text: "9"},
  {buttonStyle: "btn operation", text: "×"},
  {buttonStyle: "btn", text: "4"},
  {buttonStyle: "btn", text: "5"},
  {buttonStyle: "btn", text: "6"},
  {buttonStyle: "btn operation", text: "−"},
  {buttonStyle: "btn", text: "1"},
  {buttonStyle: "btn", text: "2"},
  {buttonStyle: "btn", text: "3"},
  {buttonStyle: "btn operation", text: "+"},
];

const App = () => {
  return (
    <div className="calculatorBody">
      <div className="calcRow">
        <CalculatorDisplay />
        <ActionButton text="clear" />
        {myButtons.map(button => {
          return <NumberButton buttonStyle={button.buttonStyle} text={button.text} />
        })}
        <ActionButton text="0" />
        <NumberButton buttonStyle="btn operation" text="=" />
      </div>
    </div>
  );
};

export default App;
