import React from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import bannerOne from '../../../../../assets/college1.png';
import bannerTwo from '../../../../../assets/college2.jpg';
import bannerThree from '../../../../../assets/college3.jpg';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    bannerImg: {
        width: '100%',
        height: '100%',
    }
})

const Banner = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container justify='center' alignItems='center'>
                <Grid item xs={12}>
                    <Carousel
                        plugins={[
                            'infinite',
                            {
                                resolve: autoplayPlugin,
                                options: {
                                    interval: 3000,
                                }
                            },
                        ]}
                        animationSpeed={1000}
                    >
                        <img className={classes.bannerImg} src={bannerOne} alt='bgimage1' />
                        <img className={classes.bannerImg} src={bannerTwo} alt='bgimage2' />
                        <img className={classes.bannerImg} src={bannerThree} alt='bgimage3' />
                    </Carousel>
                </Grid>
            </Grid>
        </>
    )
}

export default Banner;