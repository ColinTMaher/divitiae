import { Grid, Typography, Paper } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        padding: "10px",
        textAlign: "center"
    },
});

function Dashboard() {
    const classes = useStyles()

    return (
        <Grid container spacing={2} justify="center">
            <Grid item xs={6}>
                <Paper className={classes.card}>
                    <Typography variant="h6">Spending</Typography>
                    <Typography variant="body2">€3500.00</Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.card}>
                    <Typography variant="h6">Income</Typography>
                    <Typography variant="body2">€4565.50</Typography>
                </Paper>
            </Grid>
            <Grid item xs={4} >
                <Paper className={classes.card}>
                    <Typography>Thingy #2</Typography>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.card}>
                    <Typography>Thingy #3</Typography>
                </Paper>
            </Grid>
            <Grid item xs={4}>
                <Paper className={classes.card}>
                    <Typography>Thingy #4</Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.card}>
                    <Typography>Thingy #5</Typography>
                </Paper>
            </Grid>
            <Grid item xs={6}>
                <Paper className={classes.card}>
                    <Typography>Thingy #6</Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.card}>
                    <Typography>Thingy #7</Typography>
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Dashboard