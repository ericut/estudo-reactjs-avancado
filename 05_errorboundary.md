# Error Boundery

Solução para que o código no React não quebre a interface

## Utilização

O escopo do error boundery precisa ser global

```javascript
import ErrorBoundery from './ErrorBoundery';

function Master() {
  <ErrorBoundery>
    <App />
  </ErrorBoundery>;
}
```

Aplicação em classe

```javascript
class ErrorBoundery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  // lifecycle
  componentDidCatch(error, errorInfo) {
    console.log('error', error);
    console.log('errorInfo', errorInfo);
    // sendToService(data);
  }
  // caso gerar erro, pode ser feito alguma tratativa/feedback
  // e o react destrói toda árvore do DOM abaixo do erro
  render() {
    if (this.state.hasError) {
      return <> Retornar Alguma Coisa (Imagem/Texto) </>;
    }
    return this.props.children;
  }
}

export default ErrorBoundery;
```
