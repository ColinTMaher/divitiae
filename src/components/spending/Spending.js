import React, { useEffect, useState, useContext } from "react"
import SpendingItem from "./SpendingItem"
import {auth, db} from "../../firebase"
import { AuthContext } from "../../Auth"
import AddSpend from "./AddSpend"
import { Grid, Card } from "@material-ui/core"

function Spending() {
    const authContext = useContext(AuthContext)
 
    const collection = `${authContext.currentUser.uid}/spending/items`
    const [spendingData, setSpendingData] = useState([])

    const ref = db.collection(collection) 
    
    function getData() {
        ref.onSnapshot(snapshot => {
            let data = []
            if(snapshot.size) {
                snapshot.forEach(doc => {
                    let temp = doc.data()
                    temp.id = doc.id
                    data.push(temp) 
                })
                setSpendingData(data)
            } else {
                setSpendingData([])
            }
        })
    }
   
    useEffect(() => {
        getData()
    }, [])

    const spendingItems = spendingData.map(item => <SpendingItem key={item.id} item={item} userId={authContext.currentUser.uid} itemId={item.id}/>)
    spendingData.sort((a,b) => (a.timestamp > b.timestamp) ? 1 : ((b.timestamp > a.timestamp) ? -1 : 0)) 
    
    return (
            <>
            <Grid item xs="12">
                <Card>
                    <input className="search-box" type="text" placeholder="search"></input>
                    <select className="dropdown">
                        <option>-Sort By-</option>
                        <option>Date</option>
                        <option>Amount</option>
                        <option>Category</option>
                    </select>
                </Card>     
            </Grid>
            <Grid item xs="3">
                <Card>
                    {"<"}
                </Card>
            </Grid>
            <Grid item xs="6">
                <Card>
                    <select className="date-selector">
    {/*                     <option value="january">December 2020</option>
                        <option value="january">November 2020</option>
                        <option value="january">September 2020</option> */}
                        <option value="October">October 2020</option>
                        <option value="january">August 2020</option>
                        <option value="january">July 2020</option>
                        <option value="january">June 2020</option>
                        <option value="january">May 2020</option>
                        <option value="january">April 2020</option>
                        <option value="january">March 2020</option>
                        <option value="january">February 2020</option>
                        <option value="january">January  2020</option>     
                    </select>
                </Card>   
            </Grid>
            <Grid item xs="3">
                <Card>
                    {">"} 
                </Card>
            </Grid>
{/*             <Modal show={false}>
                 <AddSpend collection={collection}/>
           </Modal> */}
            <Grid item xs="12">
                <Card>
                    {spendingItems}
                </Card>
            </Grid>
            </>
    )
}

export default Spending