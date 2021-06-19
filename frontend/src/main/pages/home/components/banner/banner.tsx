import React from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from '../../../../../assets/college1.png';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    bannerImg: {
        width: '100%',
        height: '100%',
    }
})

const Banner: React.FC = () => {
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
                                    interval: 2000,
                                }
                            },
                        ]}
                        animationSpeed={1000}
                    >
                        <img className={classes.bannerImg} src={imageOne} alt='bgimage1' />
                        <img className={classes.bannerImg} src={imageOne} alt='bgimage1' />
                    </Carousel>
                </Grid>
            </Grid>
        </>
    )
}

export default Banner;