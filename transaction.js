import React,{useContext} from 'react';
import { GlobalContext } from '../GlobalState';
export const Transaction = ({transaction}) =>{
    const {deletetransaction} = useContext(GlobalContext);
    
    const sign = transaction.amount < 0 ? '-' : '+';
    return(
        <div>
            <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction.text}<span>{sign}${Math.abs(transaction.amount)}</span><button onClick={()=>deletetransaction(transaction.id)} className="delete-btn">x</button>
            </li>
        </div>
    )
}