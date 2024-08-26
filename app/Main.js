'use client'
import React, { useContext, useState } from 'react';
import { LocalThemedBox } from './components/LocalThemedBox';
import { ThemeContext } from './components/ThemeProvider';

const Main = () => {
    const {state , dispatch} = useContext(ThemeContext);
    return(
        <div className={`container bg-${state?.theme}`} id="themed-page">
            <p id="themed-text-container" className= {`txt-${state.theme}`}>
                lorem ipsum dolor iterit n stuff
            </p>
            <button className={`btn bg-${state.theme} txt-${state.theme}`} id="themed-button">Themed Button</button>
            <LocalThemedBox />
        </div>
    )
}

export { Main }