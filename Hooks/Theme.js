import { useContext, useState } from "react"
import { ThemeContext } from "../context/ThemeContext"

const useTheme=()=>{
    const [quary, setquary] = useContext(ThemeContext)
    return [quary, setquary]
}

export default useTheme