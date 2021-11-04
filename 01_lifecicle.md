# Ciclo de Vida e Suas Fases

Compreendendo todo o ciclo de vida com classe no ReactJS

Ciclo de vida é realizado na seguinte forma:

- Inicialização -> Montagem -> Atualização -> Desmontagem

## Tratando o ciclo de vida como Classes

Esta base de ciclo de vida não é mais utilizada, esta listagem deste método antigo é para a compreensão do ciclo de vida

### Inicialização

- props & state

### Montagem

- componentWillMount
- render
- componentDidMount

### Atualização

props:

- componentWillReceiveProps
- shouldComponentUpdate:
  - componentWillUpdate
  - render
  - componentDidUpdate

state:

- shouldComponentUpdate:
  - componentWillUpdate
  - render
  - componentDidUpdate

### Desmontagem

- componentWillUnmount
