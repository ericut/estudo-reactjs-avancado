# Refs e DOM

Com o Refs é possível acessar a árvore do DOM e elementos do React

## Utilização

Utilizando o hook useRef para identificar a referência, e efetuar a ação da função

```javascript
import { useRef } from 'react';

function App() {
  const inputRef = useRef();

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <>
      Foco: <input ref={inputRef} />
      <br />
      <button onClick={handleClick}> Focar no Input </button>
    </>
  );
}
```
