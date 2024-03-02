import React, { useState } from 'react';
import styled from 'styled-components';

const CalculatorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Display = styled.div`
  width: 200px;
  height: 50px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 0 10px;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  margin-top: 20vh;
`;

const Button = styled.button`
  width: 50px;
  height: 50px;
  margin: 5px;
  font-size: 20px;
  border: none;
  background-color: #e0e0e0;
  cursor: pointer;
  &:hover {
    background-color: #ccc;
  }
`;

function App(): JSX.Element {
  const [display, setDisplay] = useState<string>('0');
  const [currentValue, setCurrentValue] = React.useState<string>('');
  const [operator, setOperator] = React.useState<string>('');

  const handleOperation = (operation: string): void => {
    if (operation === '=') {
      if (currentValue !== '') {
        calculate();
      }
    } else {
      setOperator(operation);
      setCurrentValue(display); // Update the currentValue
      // Do not reset the display value here
      // setDisplay('0');
    }
  };
  
  

  const calculate = (): void => {
    let result: number;
    const currentValueFloat = parseFloat(currentValue);
    const displayFloat = parseFloat(display);
    
    switch (operator) {
      case '+':
        result = currentValueFloat + displayFloat;
        break;
      case '-':
        result = currentValueFloat - displayFloat;
        break;
      case '*':
        result = currentValueFloat * displayFloat;
        break;
      case '/':
        if (displayFloat === 0) {
          alert('Cannot divide by zero!');
          return;
        }
        result = currentValueFloat / displayFloat;
        break;
      default:
        return;
    }
    setDisplay(result.toString());
    setCurrentValue('');
    setOperator('');
  };

  const handleClear = (): void => {
    setDisplay('0');
    setCurrentValue('');
    setOperator('');
  };

  const handleNumberClick = (value: string): void => {
    if (display === '0' && value !== '.') {
      setDisplay(value);
    } else if (value === '.' && !display.includes('.')) {
      setDisplay(display + value);
    } else if (value !== '.') {
      setDisplay(display + value);
    }
  };

  return (
    <>
      <CalculatorWrapper>
        <Display>{display}</Display>
        <div>
          <Button onClick={() => handleNumberClick('7')}>7</Button>
          <Button onClick={() => handleNumberClick('8')}>8</Button>
          <Button onClick={() => handleNumberClick('9')}>9</Button>
          <Button onClick={() => handleOperation('/')}>/</Button>
        </div>
        <div>
          <Button onClick={() => handleNumberClick('4')}>4</Button>
          <Button onClick={() => handleNumberClick('5')}>5</Button>
          <Button onClick={() => handleNumberClick('6')}>6</Button>
          <Button onClick={() => handleOperation('*')}>*</Button>
        </div>
        <div>
          <Button onClick={() => handleNumberClick('1')}>1</Button>
          <Button onClick={() => handleNumberClick('2')}>2</Button>
          <Button onClick={() => handleNumberClick('3')}>3</Button>
          <Button onClick={() => handleOperation('-')}>-</Button>
        </div>
        <div>
          <Button onClick={() => handleNumberClick('0')}>0</Button>
          <Button onClick={() => handleNumberClick('.')}>.</Button>
          <Button onClick={() => handleOperation('=')}>=</Button>
          <Button onClick={() => handleOperation('+')}>+</Button>
        </div>
        <div>
          <Button onClick={handleClear}>C</Button>
        </div>
      </CalculatorWrapper>
    </>
  );
}

export default App;
