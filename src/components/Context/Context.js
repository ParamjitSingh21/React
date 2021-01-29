import React,{useState} from 'react'
import {Links} from '../Context/Data';
import {Services} from '../Context/Data';
import {Portfolio} from '../Context/Data';
import {blogItems} from '../Context/Data';
import {Interiors} from '../Context/Data';
import {Events} from '../Context/Data';


export const Context=React.createContext()

const ContextProvider=(props)=>{
    const [state,setState]=useState(
        {
   lnks:Links,
   services:Services,
   portfolio:Portfolio,
   blogItems:blogItems,
   Interiors:Interiors,
   Events:Events
        }
    )
    return (
        <>
        <Context.Provider value={{...state}}>
            {props.children}
        </Context.Provider>
        </>
    )
}

export default ContextProvider;
