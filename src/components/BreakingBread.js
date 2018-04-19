import React, {Component} from 'react';
import Header from './BreakingBread/Header';
import JoinUs from './BreakingBread/JoinUs';
import YoureInvited from './BreakingBread/YoureInvited';
import Venue from './BreakingBread/Venue';
import FutureFownders from './BreakingBread/FutureFownders';
import DividerCTA from './BreakingBread/DividerCTA';
import FigureRight from './BreakingBread/FigureRight';
import FigureRightTwo from './BreakingBread/FigureRightTwo';
// import FigureLeft from './BreakingBread/FigureLeft';
import Sponsors from './BreakingBread/Sponsors';
import {Helmet} from "react-helmet";
import Footer from './BreakingBread/Footer';
import '../events.css';

class BreakingBread extends Component {

    render() {

        return (

            <div>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Future Fownders Breaking Bread</title>
                    <link rel="canonical" href="https://fownders.org/breakingbread" />
                    <meta name="description" content="BREAKING BREAD IS A MONTHLY EXCLUSIVE CHARITY DINNER SERIES WHERE CULINARY ARTISTRY, CONVO AND CAUSE COLLIDE." />

                    <meta property="og:site_name" content="Future Fownders" />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://fownders.org/breakingbread" />
                    <meta property="og:title" content="Future Fownders" />
                    <meta property="og:description" content="BREAKING BREAD IS A MONTHLY EXCLUSIVE CHARITY DINNER SERIES WHERE CULINARY ARTISTRY, CONVO AND CAUSE COLLIDE." />
                    <meta property="og:image" content="https://fownders.s3.us-east-2.amazonaws.com/ff-breakingbread-haile-header.png" />
                    <meta property="og:image:type" content="image/png" />
                    <meta property="og:image:width" content="1200" />
                    <meta property="og:image:height" content="630" />
                </Helmet>
                <Header />
                <JoinUs />
                <Venue/>
                <YoureInvited />
                <FutureFownders />
                <FigureRight />
                <DividerCTA />
                <FigureRightTwo />
                <Sponsors />
                {/*<FigureLeft />*/}
                <Footer/>
            </div>

        );
    }
}

export default BreakingBread;