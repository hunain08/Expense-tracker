/** @format */

import React, { useState, useContext } from "react";
import { GlobalContext } from "../GlobalState";

function AddTransaction() {
    const [text, setText] = useState();
    const [amount, setAmount] = useState();
    const { addtransaction } = useContext(GlobalContext);
    const onSubmit = (e) => {
        e.preventDefault();
        const newtransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
        };
        addtransaction(newtransaction);
        setText("");
        setAmount("");
    };
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className='form-control'>
                    <label for='text'>Text</label>
                    <input
                        type='text'
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder='Enter text...'
                    />
                </div>
                <div className='form-control'>
                    <label for='amount'>
                        Amount
                        <br />
                        (negative-expense,positive-income)
                    </label>
                    <input
                        type='number'
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        placeholder='Enter amount...'
                    />
                </div>
                <button className='btn'>Add transaction</button>
            </form>
        </div>
    );
}

export default AddTransaction;
