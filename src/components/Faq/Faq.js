import React, { Component } from 'react';

const initData = {
    heading: "FREQUENTLY ASKED QUESTIONS",
    content: "",
    faqimg: "assets/img/faq.png",
    faqicon: "/img/faqicon.png"
}

const datas = [
    {
        id: "1",
        btnClass: "btn d-block text-left w-100 py-4",
        target: "#collapseOne",
        quote: "When is the official launch?",
        contentId: "collapseOne",
        contentClass: "collapse show",
        content: "We are planning to release the launch during April, specific date will be provided soon."
    },
    {
        id: "2",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseTwo",
        quote: "How many Cute Legends will be released?",
        contentId: "collapseTwo",
        contentClass: "collapse",
        content: "The supply will be 8,888 NFTs total."
    },
    {
        id: "3",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseThree",
        quote: "How do I buy a Cute Legends?",
        contentId: "collapseThree",
        contentClass: "collapse",
        content: "You have to login to the site with your Metamask account and mint directly from the site, we will never send you private links or DM, be safe out there."
    },
    {
        id: "4",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseFour",
        quote: "Do you have a whitelist?",
        contentId: "collapseFour",
        contentClass: "collapse",
        content: "We are planning to have pre-sale or whitelist spots released for the first 2500 followers of our Twitter."
    },
    {
        id: "5",
        btnClass: "btn d-block text-left w-100 collapsed py-4",
        target: "#collapseFive",
        quote: "What blockchain is the project hosted on?",
        contentId: "collapseFive",
        contentClass: "collapse",
        content: "Cute Legends is being built by Ethereum network."
    }
]

class Faq extends Component {
    state = {
        data: {},
        datas: []
    }
    componentDidMount() {
        this.setState({
            data: initData,
            datas: datas
        })
    }
    render() {
        return (
            <section id="faq" className="faq-section">
                <div className="bottom-gradient"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <h1 className="game-text text-center mt-4">{this.state.data.heading}</h1>
                    </div>
                    <div className="custom-divider"></div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-10 col-lg-10 text-center">
                            <p className="game-text" style={{ fontSize: '12px' }}>{this.state.data.content}</p>
                        </div>
                    </div>
                    <div className="row pt-5 px-2">
                        <div className="col-12 col-md-7 text-center">
                            <div className="faq-content">
                                {/* Bowling Accordion */}
                                <div className="accordion" id="bowling-accordion">
                                    <div className="row">
                                        <div className="col-12 col-md-12 p-0">
                                            {/* Single Accordion Item */}
                                            {this.state.datas.map((item, idx) => {
                                                return (
                                                    <div key={`fd_${idx}`} className="text-left py-2">
                                                        {/* Card Header */}
                                                        <div className="card-header bg-inherit border-0 p-0">
                                                            <p className="m-0 faq-header">
                                                                <button className={"faq_button " + item.btnClass} type="button" data-toggle="collapse" data-target={item.target}>
                                                                    {item.quote}
                                                                </button>
                                                            </p>
                                                        </div>
                                                        <div id={item.contentId} className={item.contentClass} data-parent="#bowling-accordion">
                                                            {/* Card Body */}
                                                            <div className="card-body py-3">
                                                                {item.content}
                                                            </div>
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 text-center m-auto"
                            data-aos="fade-left"
                            data-aos-offset="200"
                            data-aos-delay="30"
                            data-aos-duration="1000"
                            data-aos-easing="ease-in-out"
                            data-aos-mirror="true"
                            data-aos-once="true"
                            data-aos-anchor-placement="top-bottom"
                        >
                            <img className="px-2" src={this.state.data.faqimg} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Faq;