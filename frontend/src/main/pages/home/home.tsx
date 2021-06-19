import React from 'react'
import About from './components/about/about';
import Banner from './components/banner/banner';

const HomePage:React.FC = () => {
    return(
        <>
        <Banner/>
        <About />
        </>
    )
}

export default HomePage;