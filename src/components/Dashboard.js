import React, { useEffect, useState } from "react"
import { Grid, Card } from '@material-ui/core'


function Dashboard() {
    return (
        <>
            <Grid item xs={6}>  
                <Card>
                    Thingy #1  
                </Card>
            </Grid>
            <Grid item xs={6}>  
                <Card>
                    Thingy #2  
                </Card>
            </Grid>
            <Grid item xs={4}>  
                <Card>
                    Thingy #3
                </Card>
            </Grid>
            <Grid item xs={4}>  
                <Card>
                    Thingy #4  
                </Card>
            </Grid>
            <Grid item xs={4}>  
                <Card>
                    Thingy #5  
                </Card>
            </Grid>
            <Grid item xs={12}>  
                <Card>
                    Thingy #6 
                </Card>
            </Grid>
            <Grid item xs={3}>  
                <Card>
                    Thingy #7
                </Card>
            </Grid>
            <Grid item xs={3}>  
                <Card>
                    Thingy #8 
                </Card>
            </Grid>
            <Grid item xs={3}>  
                <Card>
                    Thingy #9  
                </Card>
            </Grid>
            <Grid item xs={3}>  
                <Card>
                    Thingy #10  
                </Card>
            </Grid>
        </>     
    )
}

export default Dashboard