# Render Props

Compartilhamento de código entre componentes pai para filho

## Utilização

Component Pai recebendo render de Counter

```javascript
import Counter from './Counter';
const Buttons = ({ increment, decrement, count }) => (
  <div>
    <h1>Valor atual: {count}</h1>
    <button onClick={increment}>Adicionar 1</button>
    <button onClick={decrement}>Remover 1</button>
  </div>
);

class App extends Component {
  render() {
    return (
      <>
        <Counter
          render={({ increment, decrement, count }) => (
            <Buttons increment={increment} decrement={decrement} count={count} />
          )}
        />
      </>
    );
  }
}
```

Componente Counter

```javascript
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = () => {
    const { count } = this.state;
    this.setState({ count: count + 1 });
  };

  decrement = () => {
    const { count } = this.state;
    this.setState({ count: count - 1 });
  };

  render() {
    const { render } = this.props;
    const { count } = this.state;

    return (
      <div>
        {render({
          increment: this.increment,
          decrement: this.decrement,
          count,
        })}
      </div>
    );
  }
}
```
