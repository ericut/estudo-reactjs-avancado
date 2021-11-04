# ContextAPI

Ferramenta para controlar estado em um escopo ou de modo global no projeto ReactJS

## Utilização e estrutura básica

Arquivo de Contexto

```javascript
import { createContext } from 'react';

export const themes = {
  primary: {
    background: '#121212',
    color: '#efefe1',
  },
  secondary: {
    background: '#efefe1',
    color: '#121212',
  },
};

export const ThemeContext = createContext(themes.secondary);
```

Utilização do Contexto

```javascript
import { ThemeContext, themes } from './Theme';
import Component from './Component';

export function App() {
  return (
    <ThemeContext.Provider value={{ ...themes.primary }}>
      <Component />
    </ThemeContext.Provider>
  );
}
```
