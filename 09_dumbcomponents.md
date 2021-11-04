# Dumb Components

Representação de um componente de amostra, onde as funções que representam aquele componente não ficam necessariamente dentro dele, é desacoplada do escopo sendo realizado no escopo global

## Utilização Básica

```javascript
// component
import PropTypes from 'prop-types';

function Button(props) {
  const { children, onClick } = props;
  return <button onClick={onClick}>{children}</button>;
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default memo(Button);
```

```javascript
// importação na página
import { Button } from './Button';

// função na página
const handleClick = () => {
  console.log('Callback');
};

export function App() {
  // recebe a função desta página
  return <Button onClick={handleClick}>Botão Label</Button>;
}
```
