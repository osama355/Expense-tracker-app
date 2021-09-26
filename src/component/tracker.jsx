import React, { useState } from 'react'
import './tracker.css'

function Tracker() {
    const [items, setItems] = useState([
        {
            itemName: 'Cold drink',
            amount: 200,
        },
        {
            itemName: 'Biscuit',
            amount: 300
        },
        {
            itemName: 'Utility bill',
            amount: 5000
        }
    ])

    let [itemName, setItemName] = useState("")
    let [amount, setAmount] = useState()
    let [positive, setPositive] = useState([])
    let [negative, setNegative] = useState([])

    const inputChange1 = (e) => {
        setItemName(e.target.value)
    }

    const inputChange2 = (e) => {
        setAmount(e.target.value)
    }

    const submit = (e) => {
        e.preventDefault()
        setItems([
            ...items,
            {
                itemName,
                amount,
            }
        ])
    }

    console.log("rendering")
    return (
        <div className="main-container">
            <h2 className="main-heading" style={{ alignSelf: "center", textTransform: "uppercase" }}>Expense Tracker</h2>
            <h4 style={{ textTransform: "uppercase" }}>
                Your Balance
                <br />
                $500
            </h4>
            <div className="expense-show-case">
                <h4 className="income">Income <br /> $</h4>
                <h4 className="expense">Expense <br />${negative}</h4>
            </div>
            <div className="main-history">
                <h4 style={{ textTransform: "uppercase" }}>History</h4>
                <hr />
            </div>
            <div className="list">
                <ul>
                    {
                        items.map((item, i) => {
                            return (
                                <li style={{ borderRight: `5px solid ${item.amount < 0 ? "red" : "green"}` }} key={i} className="item-name">
                                    <p>{item.itemName}</p>
                                    <p>{item.amount}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>

            <div className="add-transaction">
                <h4 style={{ textTransform: "uppercase", marginTop: "-5px" }}>Add new transaction</h4>
                <hr />
            </div>

            <form action="" onSubmit={submit}>
                <label htmlFor="">Enter Description</label>
                <input type="text" className="description" onChange={inputChange1} required />
                <label htmlFor="" style={{ marginTop: "8px" }}>Enter Amount</label>
                <input type="number" className="description" onChange={inputChange2} required />
                <button className="submit-button">Submit</button>
            </form>
        </div>
    )
}
export { Tracker }


