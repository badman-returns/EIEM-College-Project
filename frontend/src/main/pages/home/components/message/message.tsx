import React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Image from '../../../../../assets/msg.jpg';
import Line from '../../../../../assets/line.svg';
const useStyles = makeStyles({
    infoImage: {
        width: '100%',
        height: '100%',
    }
})

const Message : React.FC = () => {
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
                                            <h1>Message from the Director</h1>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container justify='center' alignItems='center'>
                                <Grid item xs={9}>
                                    <img className={classes.infoImage} src={Image} alt='eiem' />
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
                                        <p>Welcome to the portal of IIT Madras! We recently celebrated our Diamond Jubilee, 
                                        but remain as young at heart as ever. As the#1 ranked Institute in NIRF five years in a row, 
                                        we remain steadfast in our commitment to excellence and growth in every facet – UG and PG degree programs,
                                        M.S. and PhD research programs, technology development for industry and national needs, startups, international partnerships, 
                                        online education and outreach, and a vibrant campus life rich in cultural, sports and myriad other activities.
                                        Located on arguably the greenest and most beautiful campus in India, IIT Madras provides an unmatched environment for students to discover themselves, 
                                        explore life, and learn from the excellent faculty and from each other. Throw in the nation’s first and largest IITM Research Park next door with an incredible deep technology startup ecosystem, 
                                        excellent campus infrastructure, generous alumni support and involvement, and a fast-expanding engagement with the best of our peers globally, and you have an Institute that everyone wishes to be a student, 
                                        employee, alumnus, or partner of. Welcome, once again, to IIT Madras! Vanakkam!!
                                        <br>
                                        </br>
                                        Bhaskar Ramamurthi
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

export default Message;