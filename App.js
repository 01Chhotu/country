import './App.css'
import Header from './Compunent/Header'
import { Outlet } from 'react-router-dom'
import {ThemeProvider } from './context/ThemeContext'

const App = () => {
    return (
        
        <ThemeProvider>
            <Header/>
            <Outlet/>
        </ThemeProvider>
    )
}

export default App