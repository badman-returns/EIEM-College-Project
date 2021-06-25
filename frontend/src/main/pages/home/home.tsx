import React from 'react'
import About from './components/about/about';
import Banner from './components/banner/banner';
import Message from './components/message/message';

const HomePage:React.FC = () => {
    return(
        <>
        <Banner/>
        <About />
        <Message/>
        </>
    )
}

export default HomePage;