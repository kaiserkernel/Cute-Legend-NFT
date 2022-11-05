import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="footer-area mt-5">
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 text-center d-flex justify-content-center align-items-center">
                                <img className="px-3" style={{ height: "80px" }} src="assets/img/logo.png" alt="" />
                                <h1 className="text-white" style={{ margin: "0" }}>Cute Legends Club</h1>
                            </div>
                            <div className="col-12 text-center">
                                <div className="text-center contract-address-block">
                                    <a href="https://rinkeby.etherscan.io/address/0xdad6bdd249dccb47e77f61a1e52d54dbb9b99003" className="text-center" target="_blank">
                                        <h4 className="contract-address" style={{ fontSize: '22px' }}>0xdad6bdd249dccb47e77f61a1e52d54dbb9b99003</h4>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <img className="footer-social-icon mx-2" src="assets/img/github.png" alt="" />
                                <img className="footer-social-icon mx-2" src="assets/img/discord.png" alt="" />
                                <img className="footer-social-icon mx-2" src="assets/img/twitter.png" alt="" />
                                <img className="footer-social-icon mx-2" src="assets/img/instagram.png" alt="" />
                            </div>
                            <div className="col-12">
                                <div className="copyright-area d-flex flex-wrap justify-content-center text-center py-4">
                                    <p>© Copyright-2021 Cute Legends Club. All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;