import React from 'react'
import Banner from '../../components/caraousel/banner';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

const HomePage:React.FC = () => {
    return(
        <>
        <Header />
        <Banner/>
        <Footer />
        </>
    )
}

export default HomePage;