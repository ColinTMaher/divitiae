import React from "react"

import { Card } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
    background: {
        background: "black"
    }
})

function CustomCard() {
    const classes = useStyles()

    return(
        <Card>
            CARD
        </Card>
    )
}

export default Card