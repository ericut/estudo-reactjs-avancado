# Organização de Projetos

## Estrutura de Projetos

Um exemplo de uma boa estrutura de projeto em ReactJS

- node_modules
- public
- src
  - assets
    - imgs
    - fonts
  - components `todos os componentes que são utilizados no projeto`
    - Button
      - _ tests _ `pasta com teste no escopo de cada componente/função`
    - Calc
    - Gallery
    - .index.js `importação e exportação de todo componente`
  - containers / pages `agrupamento das páginas ou conteúdo de todo o projeto`
    - Bank
      - components `componentes no escopo de uma página da aplicação`
    - User
    - Store
    - Shop
  - context `contextos da aplicação`
  - commons
    - constants
    - utils `pasta com arquivos com funções utilitários que são utilizadas em todo o projeto`
  - resources `serviços de APIs`
    - .bank.js `serviço básicos de chamadas para a api`
    - .api.js `estrutura com API básica do sistema`
  - routes `rotas do sistema`
  - .index.js
  - .App.js

### Components

```javascript
// .components/index.js
// components import & export
import Buttom from './Button';
import Calc from './Calc';
import Gallery from './Galllery';

export { Buttom, Calc, Gallery };
```

### Utils

```javascript
// funções com responsabilidades únicas
// arquivos com responsabilidades separadas
export const funcExempleToString = (str) => String(str);
```

### Constants

```javascript
// valores que não sofrem mudanças
export const MENU = ['gallery', 'photos', 'shop', 'store', 'bank'];
```
