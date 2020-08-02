import React, { Component } from 'react';
import Header from './header';
import Footer from './footer';
// import CryptoComponent from './CryptoComponent';


class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                {/* <CryptoComponent /> */}
                <Footer />
            </div>
        )
    }
}

export default Home
