# Fragments

Um componente pode retornar múltiplos elementos, evitando que o código não seja poluído com códigos desnecessários

## Utilização

Criando um fragmento

```javascript
<>
  <div>Texto</div>
  <div>Texto Secundário</div>
</>
```

Criando um fragmento clássico

```javascript
<React.Fragment>
  <div>Texto</div>
  <div>Texto Secundário</div>
</React.Fragment>
```

## Estruturas Complexas

```javascript
import React, { Fragment } from 'react';

const columns = ['C1', 'C2', 'C3'];

function Column() {
  return (
    <tr>
      <td>Base</td>
      <td>Text</td>
    </tr>
  );
}

function App() {
  const renderColumn = (element, key) => (
    <Fragment key={`column-${key}`}>
      <Column />
    </Fragment>
  );
  return <table>{columns.map(renderColumn)}</table>;
}
```
