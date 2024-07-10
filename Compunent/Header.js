import useTheme from "../Hooks/Theme"

const Header = () => {
    const [darkMode, setDarkMode]=useTheme()
    return(
        <header className={`${darkMode?'dark': ''}`}>
            <div className="header-content">
                <h1 className="headerTitle">Where in the world?</h1>
                <p className="modeChange" onClick={()=>{
                    setDarkMode(!darkMode)
                    localStorage.setItem('DarkMode',  !darkMode)
                }}>
                    <i className={`fa-solid fa-${!darkMode?'moon':'sun'}`}></i>
                    &nbsp;&nbsp;{`${!darkMode?'Dark': 'Light'}`} Mode
                </p>
            </div>
        </header>
    )
}
export default Header