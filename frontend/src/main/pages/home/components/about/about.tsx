import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import infoImage from '../../../../../assets/info.jpeg'
import Line from '../../../../../assets/line.svg'
const useStyles = makeStyles({
    infoImage: {
        width: '100%',
        height: '100%',
    }
})

const About: React.FC = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container>
                <Grid item xs={6}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Grid container justify='center' alignItems='center'>
                                <Grid item xs={9}>
                                    <Grid container justify='flex-start' alignItems='center' spacing={1}>
                                        <Grid item>
                                            <img src={Line} alt='line' />
                                        </Grid>
                                        <Grid item>
                                            <h1>About</h1>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify='center' alignItems='center'>
                                <Grid item xs={9}>
                                    <img className={classes.infoImage} src={infoImage} alt='eiem' />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={6}>
                    <Grid container justify='center' alignItems='center'>
                        <Grid container>
                            <Grid item xs={12}>

                            </Grid>
                            <Grid item xs={12}>
                                <Grid container justify='flex-start' alignItems='center' style={{marginTop: '100px'}}>
                                    <Grid item xs={10}>
                                        <p>Elitte Institute of  Engineering & Management is promoted by Pinnaccle Educational Trust.
                                            Which is registered under India trust Act 1882,registration No 5367 having its registered office 3 Canal Street Kolkata 700 014.
                                            The trust is conglomerate of personal who are having experience in running academic programme/Institution for last 10 years.
                                            The Elitte Institute of Engineering & Management is situated in North Kolkata, flanked by the famous Howrah.
                                            programme/Institution for last 10 years.
                                            The Elitte Institute of Engineering & Management is situated in North Kolkata,
                                            flanked by the famous Howrah.   & Management is situated in North Kolkata, flanked by the famous Howrah.
                                            programme/Institution for last 10 years. The Elitte Institute of Engineering & Management is situated in North Kolkata,
                                            flanked by the famous Howrah.
                                        </p>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

        </>
    )
}

export default About;