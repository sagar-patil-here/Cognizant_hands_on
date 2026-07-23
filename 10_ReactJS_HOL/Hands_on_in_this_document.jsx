import React, { useState, useContext, createContext } from 'react';

// Topic: Context API (createContext, useContext)
const ThemeContext = createContext();

const ThemeButton = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button 
            onClick={toggleTheme}
            style={{ 
                background: theme === 'light' ? '#fff' : '#333', 
                color: theme === 'light' ? '#000' : '#fff',
                padding: '10px 20px'
            }}
        >
            Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
};

export default function App() {
    const [theme, setTheme] = useState('light');
    
    const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <div style={{ padding: '20px', background: theme === 'light' ? '#eee' : '#222', color: theme === 'light' ? '#222' : '#eee', minHeight: '200px' }}>
                <h1>Part 10: Context API</h1>
                <ThemeButton />
            </div>
        </ThemeContext.Provider>
    );
}
