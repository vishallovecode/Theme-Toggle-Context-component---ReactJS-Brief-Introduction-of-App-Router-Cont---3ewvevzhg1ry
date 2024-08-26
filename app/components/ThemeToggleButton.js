'use client'
import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';


const ThemeToggleButton = () => {
    const {state , dispatch} = useContext(ThemeContext)
    function toggleTheme() {
        dispatch({
            type: 'THEME_TOGGLER',
            payload: ''
        })
    }
    return (
       <>
       <button onClick={toggleTheme} id = 'global-theme-toggler'>
      { `Switch to the ${state.theme ==='light' ?  'dark' : 'light'} theme`}
       </button>
       </>
    )

}
export {ThemeToggleButton}