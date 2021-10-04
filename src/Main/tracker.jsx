import React, { useState } from 'react'
import './tracker.css'
import Form from '../component/Form/form'
import List from '../component/List/list'
import Balance from '../component/Balance/balance'
import ShowCase from '../component/ExpenseShowCase/showcase'

function Tracker() {
    const [items, setItems] = useState([
        {
            id:1,
            itemName: 'Salary',
            amount: 50000,
        },
        {
            id:2,
            itemName: 'Gym Fees',
            amount: -500
        },
        {
            id:3,
            itemName: 'Electricity bill',
            amount: -5000
        }
    ])

    let [itemName, setItemName] = useState("")
    let [amount, setAmount] = useState()

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
                amount: Number(amount)
            }
        ])
    }

    const totalIncome=()=>{
        let income=0
        for(var i=0; i<items.length; i++){
            if(items[i].amount>0){
                income+=items[i].amount
            }
        }
        return income
    }

    const totalExpense=()=>{
        let expense=0
        for(var i=0; i<items.length; i++){
            if(items[i].amount<0){
                expense+=items[i].amount
            }
        }
        return expense
    }

    const removeItem=id=>e=>{
        setItems(items.filter((item)=>item.id!==id))
    }

    console.log("rendering")
    return (
        <div className="main-container">
            <h2 className="main-heading" style={{ alignSelf: "center", textTransform: "uppercase" }}>Expense Tracker</h2>
            <Balance totalBalance={totalIncome()+totalExpense()} />
            <ShowCase totalIncome={totalIncome()} totalExpense={totalExpense()} />
            <div className="main-history">
                <h4 style={{ textTransform: "uppercase" }}>History</h4>
                <hr />
            </div>
            <div className="list" >
                <List items={items} setItems={setItems} removeItem={removeItem}/>
            </div>
            <div className="add-transaction">
                <h4 style={{ textTransform: "uppercase", marginTop: "-5px" }}>Add new transaction</h4>
                <hr />
            </div>

            <Form  inputChange1={inputChange1} inputChange2={inputChange2} submit={submit}/>
        </div>
    )
}
export { Tracker }


