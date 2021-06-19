import React from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from '../../../../../assets/college1.png';

const Banner: React.FC = () => {
    return (
        <>
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
                <img src={imageOne} alt='bgimage1' />
                <img src={imageOne} alt='bgimage1' />
            </Carousel>
        </>
    )
}

export default Banner;