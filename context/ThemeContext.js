import { createContext, useState } from "react";

export const ThemeContext = createContext()


export function ThemeProvider({children}){
    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('DarkMode')))
    return <ThemeContext.Provider value={[darkMode, setDarkMode]}>
            {children}
        </ThemeContext.Provider>
}