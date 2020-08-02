import React, { Component } from 'react';
import Header from './header';
import Body from './body';
import Footer from './footer';
import Works from './Howitworks';
import About from './about';
// import CryptoComponent from './CryptoComponent';


class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <Body />
                <About />
                <Works />
                <Footer />
            </div>
        )
    }
}

export default Home
