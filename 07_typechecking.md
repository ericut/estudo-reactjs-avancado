# Typechecking com PropTypes

Checagem mais básica com PropTyps para analisar a tipagem na aplicação

## Utilização

Analisa os tipos da aplicação e retorna erro no console

```javascript
import PropTypes from 'prop-types';

function ExempleTypes(props) {
  const { name, value, address, active, images } = props;
  return (
    <div>
      <p>Name: {name}</p>
      <p>Value: {value}</p>
      <p>Address: {address}</p>
      <p>Active: {active ? 'Yes' : 'No'}</p>
    </div>
  );
}

ExempleTypes.defaultProps = {
  value: 0,
  address: 'Type your address',
};

ExempleTypes.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number,
  address: PropTypes.string,
  active: PropTypes.boolean,
  images: PropTypes.array,
  onClick: PropTypes.func.isRequired,
  status: PropTypes.oneOf(['Completed', 'Disabled']),
};

export default ExempleTypes;
```

Passando valores para identificar a tipagem

```javascript
export function App() {
  return (
    <div>
      <ExempleTypes name="String type" value={50} address="String type" active={false} images={[]} />
    </div>
  );
}
```
