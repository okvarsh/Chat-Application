
import React,{createContext,useContext, useReducer} from 'react'
//data layer lives here
export const StateContext =createContext();

export const StateProvider =({reducer,initialState,children})=>(
    <StateContext.Provider value={useReducer (reducer,initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue =()=>useContext(StateContext);