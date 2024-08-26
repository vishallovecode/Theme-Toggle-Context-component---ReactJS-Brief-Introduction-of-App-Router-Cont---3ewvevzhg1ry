'use client'
import React, { useContext, useEffect, useState } from 'react';
import { ThemeContext } from './ThemeProvider';


const LocalThemedBox = () => {
    const {state  , dispacth} = useContext(ThemeContext);
    const [localTheme , setLocalTheme] = useState(state.theme)
    function hanldeLocalTheme () {
        setLocalTheme(localTheme === 'light'? 'dark': 'light')
    }

    useEffect(()=>{
        setLocalTheme(state.theme)
    }, [state.theme])
return(
    <div style={{width:'200px',height:'200px',border:'2px solid green'}} id="local-themed-box" className={`container bg-${localTheme}`}>
        {/* Write code below this line */}
        <p className= {`txt-${localTheme}`}>
            Hey Relax we did it...
        </p>
        <button className={`btn btn-${localTheme}`} onClick={hanldeLocalTheme}>{`Toggle local theme to ${localTheme === 'light' ?'dark' : 'light'}` }</button>
        
    </div>
)
}

export { LocalThemedBox }