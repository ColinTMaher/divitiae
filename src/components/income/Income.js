import { Grid, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        padding: "10px"
    }
});

function Income() {
    const classes = useStyles()

    return (
        <Grid container spacing={2} justify="center">
            <Grid item xs={12}>
                <Paper className={classes.card}>
                    <Typography>Income</Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Income