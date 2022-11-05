import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

var sectionStyle = {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundImage: "url('/assets/img/roadmap-item-bg.jpg')",
    padding: '31px'
};

const initData = {
    heading: "ROADMAP",
    content: "",
}

const roadmaps = [
    {
        title: 'Pre-sale Launch',
        content1: 'We will be releasing our pre-sale for the first 2500 followers on our twitter (max 2 NFTs per wallet provided).',
        content2: '',
        content3: '',
        icon: <img src="assets/img/step1.png" />
    },
    {
        title: 'The Tavern Opens (our discord)',
        content1: 'The tavern will open their doors to all our community members, each discord member will receive some coins for games and drinks!',
        content2: '',
        content3: '',
        icon: <img src="assets/img/step2.png" />
    },
    {
        title: 'Rarity Guide',
        content1: 'We will be releasing a quick guide with Rarity Traits, so you can know that you got before we reach to rarity tools!',
        content2: '',
        content3: '',
        icon: <img src="assets/img/step3.png" />
    },
    {
        title: 'Public Sale',
        content1: 'Pre-sale will be open 2 days before public sale, choose properly the moment and dont lose the chance! ',
        content2: 'The reveal of the adventurers will be done 24-48 hours after public sale or sold out, what happens before!',
        content3: '',
        icon: <img src="assets/img/step4.png" />
    },
    {
        title: 'MEGA GIVEAWAY',
        content1: 'We will be creating a DAO with all Adventurers Holders to choose the steps or which path will the project will take.',
        content2: 'Also we will be adquiring some stuff from other projects to do a massive giveaway to thank all of you for your support!',
        content3: 'From here only the future will stop us!',
        icon: <img src="assets/img/step5.png" />
    }
]

class Roadmap extends Component {
    state = {
        data: {},
    }
    componentDidMount() {
        this.setState({
            data: initData,
        })
    }
    render() {
        return (
            <section id="roadmap" className="roadmap-section">
                <div className="bottom-gradient"></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <h1 className="game-text mt-4">{this.state.data.heading}</h1>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-9 col-lg-8 text-center">
                            <p className="game-text" style={{ fontSize: '12px' }}>{this.state.data.content}</p>
                        </div>
                    </div>
                    <div className="row pt-2">
                        <div className="custom-divider mb-0 mt-4">
                            <div className="divider-circle"></div>
                        </div>
                        <VerticalTimeline lineColor={'#8b8b8b'}>
                            {roadmaps.map((item, idx) => {
                                return (
                                    <VerticalTimelineElement
                                        className="vertical-timeline-element--work"
                                        contentStyle={sectionStyle}
                                        contentArrowStyle={{ borderRight: '7px solid  rgb(255, 255, 255)' }}
                                        iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                                        icon={item.icon}
                                        key={idx}
                                    >
                                        <div className="roadmap-item">
                                            <h3 className="vertical-timeline-element-title" style={{ fontWeight: 'bold' }}>{item.title}</h3>
                                            <p>{item.content1}</p>
                                            <p>{item.content2}</p>
                                            <p>{item.content3}</p>
                                        </div>
                                    </VerticalTimelineElement>
                                );
                            })}
                        </VerticalTimeline>
                        <div className="custom-divider mb-0">
                            <div className="divider-circle"></div>
                        </div>
                    </div>
                </div>
                <div className="top-gradient"></div>
            </section>
        );
    }
}

export default Roadmap;