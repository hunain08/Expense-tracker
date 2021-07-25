import React,{createContext,useReducer} from 'react'
import Appreducer from './components/AppReducer'
const initialState = {
    transactions:[ ]
}
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({children}) =>{
    const [state,dispatch]=useReducer(Appreducer,initialState);
    function deletetransaction(id){
        dispatch({
            type: 'Delete_transaction',
            payload: id
        });
    }
    function addtransaction(transaction){
        dispatch({
            type: 'Add_transaction',
            payload: transaction
        });
    }
    return(<GlobalContext.Provider value={{
        transactions:state.transactions,
        deletetransaction,
        addtransaction
    }}>{children}</GlobalContext.Provider>)
}

