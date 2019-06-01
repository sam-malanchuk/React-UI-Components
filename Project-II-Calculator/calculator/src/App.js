import React from 'react';
import './App.css';
import NumberButton from './components/ButtonComponents/NumberButton';
import ActionButton from './components/ButtonComponents/ActionButton';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';

const myButtons = [
  {name: "NumberButton", buttonStyle: "btn operation", text: "÷"},
  {name: "NumberButton", buttonStyle: "btn", text: "7"},
  {name: "NumberButton", buttonStyle: "btn", text: "8"},
  {name: "NumberButton", buttonStyle: "btn", text: "9"},
  {name: "NumberButton", buttonStyle: "btn operation", text: "×"},
  {name: "NumberButton", buttonStyle: "btn", text: "4"},
  {name: "NumberButton", buttonStyle: "btn", text: "5"},
  {name: "NumberButton", buttonStyle: "btn", text: "6"},
  {name: "NumberButton", buttonStyle: "btn operation", text: "−"},
  {name: "NumberButton", buttonStyle: "btn", text: "1"},
  {name: "NumberButton", buttonStyle: "btn", text: "2"},
  {name: "NumberButton", buttonStyle: "btn", text: "3"},
  {name: "NumberButton", buttonStyle: "btn operation", text: "+"},
];

const test = "NumberButton";

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
