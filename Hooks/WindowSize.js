import { useEffect, useState } from "react"



const useWindowSize=()=>{
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    useEffect(()=>{
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }, [])
    return windowSize;
}

export default useWindowSize