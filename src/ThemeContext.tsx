import { createContext, useState, useContext, ReactNode } from 'react';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { themeOptions } from './theme';
import { createTheme } from '@mui/material/styles';

interface ThemeContextProps {
    toggleTheme: () => void;
    currentTheme: 'light' | 'dark';
}

const defaultState: ThemeContextProps = {
    toggleTheme: () => {},
    currentTheme: 'light',
};

const ThemeContext = createContext<ThemeContextProps>(defaultState);

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  const theme = createTheme({
    ...themeOptions,
    palette: {
      ...themeOptions.palette,
      mode: currentTheme,
    },
  });

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ currentTheme, toggleTheme }}>
      <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
    </ThemeContext.Provider>
  );
};
