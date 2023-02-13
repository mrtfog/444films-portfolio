import { useEffect, useState } from "react";
import { createContext } from "react";

const themes = {
     dark: {
        backgroundColor: 'rgb(20,21,24)',
        color: '#f5f5f5'
     },
     white: {
        backgroundColor: '#f5f5f5',
        color: 'rgb(20,21,24)'
     },
}

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {

    const [isDark, setIsDark] = useState(true);
    const theme = isDark ? themes.dark : themes.white;
    const toggleTheme = () => {
        localStorage.setItem('isDark', JSON.stringify(!isDark))
        setIsDark(!isDark);
    };

    return (
        <ThemeContext.Provider value={[{ theme, isDark }, toggleTheme]}>{children}</ThemeContext.Provider>
    )
}