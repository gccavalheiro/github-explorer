import React from 'react';

// imutabilidade
// usuarios = ['diego', 'gabriel', 'guilherme']
// novosUsuarios = [...usuarios, 'edinei']

export const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <h3>{counter}</h3>
      <button type="button" onClick={increment}>
        Increment
      </button>
    </div>
  );
};
