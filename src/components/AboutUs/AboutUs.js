import React, { Component } from 'react';

const initData = {
    heading: "ABOUT US",
    content1: " We are a PFP NFT project that is inspired 100% on Mythology, with different races, more than 100 different traits. We plan to be a community guide team, we want all our community members involved on the project and to pick their choice on which way/path is better for us.",
    heroImg: "/assets/img/about-banner-circle.png",
}

class AboutUs extends Component {
    state = {
        data: {}
    }
    componentDidMount() {
        this.setState({
            data: initData
        })
    }
    render() {
        return (
            <section id="about" className="aboutus-section">
                <div className="bottom-gradient"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6">
                            <div className="my-auto hero-avatar-block"
                                data-aos="fade-up"
                                data-aos-offset="200"
                                data-aos-delay="30"
                                data-aos-duration="1000"
                                data-aos-easing="ease-in-out"
                                data-aos-mirror="true"
                                data-aos-once="true"
                                data-aos-anchor-placement="top-bottom"
                            >
                                <img className="" src={this.state.data.heroImg} alt="" />
                            </div>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 col-lg-6 my-auto aboutus-right">
                            <h1 className="mt-4 hero-title">{this.state.data.heading}</h1>
                            <div className="custom-divider"></div>
                            <p style={{ fontSize: "1.5rem" }}>{this.state.data.content1}</p>
                        </div>
                    </div>
                </div>
                <div className="top-gradient"></div>
            </section>
        );
    }
}

export default AboutUs;