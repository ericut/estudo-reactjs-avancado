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
