import React from 'react';
import Header from '../Components/Header';
import Banner from "../Components/Banner";
import Plans from "../Components/Plans";
import Report from "../Components/Report";
import VideoBanner from "../Components/VideoBanner"
import Footer from "../Components/Footer"
import MenuBar from "../Components/MenuBar"


function Home(props) { 

    return (

        <>
            <Header />
            <Banner/>               
            <Plans/>
            <VideoBanner/>
            <Report/>
            <Footer/>
            <MenuBar />
            
        </>
    );
}

export default Home;