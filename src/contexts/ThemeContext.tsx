"use client"
import {createContext, ReactNode, useContext, useEffect, useState } from "react";
interface ThemeContextType{
    theme : string;
    toggleTheme : () => void;
}

const ThemeContex = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState("light");


    const toggleTheme = () => setTheme(theme === "ligth" ? "dark" : "ligth");
    console.log("toggle Theme", theme);

    useEffect(() => {
        document.documentElement.className = theme;
      }, [theme]);


    return(
        <ThemeContex.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContex.Provider>
    )
}

// custome hooks

export const useTheme = () => {
    const context = useContext(ThemeContex);
    if(!context) {
        throw new Error("useTheme must be used with in ThemeProvider")
    }
    return context
}