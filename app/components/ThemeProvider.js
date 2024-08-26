'use client'
import React, { useReducer, useState } from 'react';

function Themereducer (state , action) {
    switch(action.type){
        case 'THEME_TOGGLER':{
            return  {
                ...state ,
                theme: state.theme === 'light'?  'dark': 'light'
            }
        }
    }
}
const initialState = {theme: 'light'};
const ThemeContext = React.createContext()
const ThemeProvider = (props) =>{
    const [state , dispatch] = useReducer(Themereducer , initialState);
    return (
        <React.Fragment>
            <ThemeContext.Provider value={{state , dispatch}}>
                {props.children}
            </ThemeContext.Provider>
        </React.Fragment>
    )
}

export {ThemeProvider,ThemeContext}