import React, {Component} from 'react';
import Header from './BreakingBread/Header';
import JoinUs from './BreakingBread/JoinUs';
import YoureInvited from './BreakingBread/YoureInvited';
import FutureFownders from './BreakingBread/FutureFownders';
import FigureLeft from './BreakingBread/FigureLeft';
import SectionCTA from './BreakingBread/SectionCTA';
import FigureRight from './BreakingBread/FigureRight';
import FigureRightTwo from './BreakingBread/FigureRightTwo';
import DailyBreadDivider from './BreakingBread/DailyBreadDivider';
// import SectionSeven from './BreakingBread/SectionSeven';
import {Helmet} from "react-helmet";
import Footer from './BreakingBread/Footer';
import '../events.css';

// const BreakingBread = () => (
class BreakingBread extends Component {
// const { isNavbarHidden } = this.state;
// return (
//     <div>
//         {!isNavbarHidden && <NavbarComponent />}
//         { /* Your rest of the code here *//}
//         {this.props.children}
//     </div>
// );

    render() {

        return (


    <div>
        <Helmet>
            <meta charSet="utf-8" />
            <title>Future Fownders Breaking Bread</title>
            <link rel="canonical" href="https://fownders.org/breakingbread" />
        </Helmet>
        <Header />
        <JoinUs />
        <YoureInvited />
        <FutureFownders />
        <FigureRight />
        <SectionCTA />
        <FigureRightTwo />
        {/*<FigureLeft />*/}
        <DailyBreadDivider />
        {/*<SectionSeven/>*/}
        <Footer/>
    </div>

        );
    }
}


export default BreakingBread;