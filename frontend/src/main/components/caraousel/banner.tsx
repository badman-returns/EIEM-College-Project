import React from 'react';
import Carousel, { autoplayPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import imageOne from '../../../assets/college1.png';
import imageTwo from '../../../assets/college2.png';

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
                <img src={imageTwo} alt='bgimage2' />
            </Carousel>
        </>
    )
}

export default Banner;