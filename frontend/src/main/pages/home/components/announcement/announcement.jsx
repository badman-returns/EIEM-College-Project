import React from 'react';
import Card from "../../../../components/card/card";
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Line from '../../../../../assets/line.svg';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles({
    infoImage: {
        width: '100%',
        height: '100%',
    }
})

const Announcement = () => {
    const viewAll = () => console.log("click");
    let URL ="https://images.unsplash.com/photo-1593642533144-3d62aa4783ec?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80";
    const classes = useStyles();
    return (
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container>
                        <Grid item xs={2}>
                        </Grid>
                        <Grid item xs={8}>
                            <Grid container justify='center' alignItems='center'>
                                <Grid item xs={12}>
                                    <Grid container justify='flex-start' alignItems='center' spacing={1}>
                                        <Grid item>
                                            <img src={Line} alt='line' />
                                        </Grid>
                                        <Grid item>
                                            <h1>Announcement</h1>
                                        </Grid>
                                        <Grid container>
                                            <Card imageUrl={URL} heading="1st year admit card collecting date" viewAll={viewAll} />
                                            <Card imageUrl={URL} heading="2st year admit card collecting date" viewAll={viewAll} />
                                            <Card imageUrl={URL} heading="3st year admit card collecting date" viewAll={viewAll} />
                                        </Grid>
                                        <Grid item>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Button variant="contained" color="primary">
                                    View All
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid item xs={2}>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </>
    )
}

export default Announcement;