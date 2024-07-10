import { useContext, useEffect, useState } from 'react'
import '../App.css'
import CountryList from './CountryList'
import SearchTag from './SearchTag'
import useTheme from '../Hooks/Theme'
import SelectMenu from './SelectMenu'

const Home=()=>{
    const [quary, setquary] = useState('')
    const [theme] = useTheme()
    return(
        <main className={`${theme?'dark': ''}`}>
            <div className="Menu">
            <SearchTag setquary={setquary} />
            <SelectMenu setquary={setquary}/>
            </div>
            <CountryList quary={quary} />
        </main>
    )
}

export default Home