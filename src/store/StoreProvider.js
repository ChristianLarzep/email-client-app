import { createContext, useContext, useReducer, useEffect } from "react";

import storeReducer, { types, initialStore } from "./StoreReducer";
import { getEmailsData } from './../services/emails.service';

// Create global context
const StoreContext = createContext();

const StoreProvider = ( { children } ) => {

    const [ store, dispatch ] = useReducer( storeReducer, initialStore );

    useEffect( () => {
        async function getData() {
            let emails = await getEmailsData();

            dispatch( { type: types.setEmailsList, emails } );
        };
  
        getData();
    }, [] );

    // The value for the context will be the store ( or state) and a dispatch function to change the store
    // The store and dispatch function are provided by the useReducer Hook, the first argument is 
    // the reducer ( function that contains the logic to work with the state ). The second argument is the initial state

    return (
        <StoreContext.Provider value={ [ store, dispatch ] }>
            {children}
        </StoreContext.Provider>
    )
}

const useStore = () => useContext( StoreContext )[ 0 ];
const useDispatch = () => useContext( StoreContext )[ 1 ]

// Export store context so children component can access to the store ( Only in case we decide to use useContext hook inside a component )
// As an alternative we export the context value ( store and dispatch function ), this way we won't need to call useContext Hook inside a component 
export { StoreContext, useStore, useDispatch };

export default StoreProvider;