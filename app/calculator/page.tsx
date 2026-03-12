"use client";

import { useState } from "react";

export default function CalculatorPage() {
  const [display, setDisplay] = useState<string>('');
  const [previous, setPrevious] = useState<string>('');
  const [operator, setOperator] = useState<string>('');
  const [result, setResult] = useState<number | null>(null);

  const handleNumberClick = (value: string) => {
    if (display.length < 3) {
      setDisplay(display + value);
    }
  };

  const handleOperatorClick = (op: string) => {
    if (display !== '') {
      setPrevious(display);
      setOperator(op);
      setDisplay('');
    }
  };

  const handleEqualsClick = () => {
    if (previous !== '' && display !== '') {
      switch (operator) {
        case '+':
          setResult(parseInt(previous, 10) + parseInt(display, 10));
          break;
        case '-':
          setResult(parseInt(previous, 10) - parseInt(display, 10));
          break;
        case '*':
          setResult(parseInt(previous, 10) * parseInt(display, 10));
          break;
        case '/':
          setResult(parseInt(previous, 10) / parseInt(display, 10));
          break;
        default:
          setResult(null);
      }
      setPrevious('');
      setOperator('');
      setDisplay(result?.toString() || '');
    }
  };

  const handleClearClick = () => {
    setDisplay('');
    setPrevious('');
    setOperator('');
    setResult(null);
  };

  const handleBackClick = () => {
    setDisplay(display.slice(0, -1));
  };

  return (
    <div className="bg-fuchsia-50 min-h-screen flex flex-col justify-between">
      <header className="bg-fuchsia-50 text-center py-8">
        <h1 className="text-4xl font-bold">Calculator</h1>
      </header>

      <main className="flex-1 flex justify-around px-4">
        <section className="bg-white p-4 rounded-lg shadow-md">
          <input
            type="text"
            value={display}
            readOnly
            className="w-full text-4xl font-bold text-right p-2 bg-gray-200"
          />
          <div className="flex justify-between gap-4">
            <button onClick={() => handleNumberClick('1')}>1</button>
            <button onClick={() => handleNumberClick('2')}>2</button>
            <button onClick={() => handleNumberClick('3')}>3</button>
            <button onClick={() => handleOperatorClick('+')}>+</button>
          </div>
          <div className="flex justify-between gap-4">
            <button onClick={() => handleNumberClick('4')}>4</button>
            <button onClick={() => handleNumberClick('5')}>5</button>
            <button onClick={() => handleNumberClick('6')}>6</button>
            <button onClick={() => handleOperatorClick('-')}>-</button>
          </div>
          <div className="flex justify-between gap-4">
            <button onClick={() => handleNumberClick('7')}>7</button>
            <button onClick={() => handleNumberClick('8')}>8</button>
            <button onClick={() => handleNumberClick('9')}>9</button>
            <button onClick={() => handleOperatorClick('*')}>*</button>
          </div>
          <div className="flex justify-between gap-4">
            <button onClick={() => handleBackClick()}>C</button>
            <button onClick={() => handleNumberClick('0')}>0</button>
            <button onClick={() => handleEqualsClick()}>=</button>
            <button onClick={() => handleOperatorClick('/')}>/</button>
          </div>
        </section>
      </main>

      <footer className="bg-fuchsia-50 text-center py-4">
        <h2 className="text-2xl font-bold">Contact</h2>
        <p>Email: contact@testsync.com</p>
        <p>Phone: +1 123 456 7890</p>
        <p className="text-gray-700">© 2024 TestSync. All Rights Reserved.</p>
      </footer>
      <section className="bg-white p-4 rounded-lg shadow-md mt-4">
        <h2 className="text-2xl font-bold">Guide</h2>
        <p className="text-xl">How to Use:</p>
        <ul>
          <li>Enter numbers using the buttons on the keypad.</li>
          <li>Select an operator (+, -, *, /) using the buttons.</li>
          <li>Press '=' to get the result.</li>
          <li>Press 'C' to clear the current entry.</li>
        </ul>
      </section>
    </div>
  );
}