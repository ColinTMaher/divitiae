import React, { useEffect, useState } from "react"
import { Grid, Card } from '@material-ui/core'


function Dashboard() {
    return (
        <>
            <Grid item xs={6}>  
                <Card>
                    <p>Total Spending</p>
                    <p>€490.50</p>
                </Card>
            </Grid>
            <Grid item xs={6}>  
                <Card>
                    <p>Total Income</p>
                    <p>€1000.00</p>
                </Card>
            </Grid>
            <Grid item xs={6}>  
                <Card>
                <p>Spending This Month</p>
                <p>€100</p>
                </Card>
            </Grid>
            <Grid item xs={6}>  
                <Card>
                <p>Income This Month</p>
                <p>€250</p>
                </Card>
            </Grid>
        </>     
    )
}

export default Dashboard