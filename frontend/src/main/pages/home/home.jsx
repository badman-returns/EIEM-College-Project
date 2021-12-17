import React from 'react'
import About from './components/about/about';
import Banner from './components/banner/banner';
import Notice from './components/notice/notice';
import Announcement from './components/announcement/announcement';
import Message from './components/message/message';

const HomePage = () => {
    return(
        <>
        <Banner/>
        <About />
        <Notice/>
        <Announcement/>
        <Message/>
        </>
    )
}

export default HomePage;