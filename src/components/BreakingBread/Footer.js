import React from 'react';
// import DonateButton from '../DonateButton';

const Footer = () => {
    return (

        <section className="footer breakingbread bg-7">
            <div className="container">
                <div className="row mb0">
                    <div className="col s12 center-align">
                        <img className="responsive-img" alt=" " src="https://fownders.s3.us-east-2.amazonaws.com/bb-haile-cta-BreakingBread.png" />
                        <h5 className="bold">Join Us</h5>
                        <h5>The Evening Of</h5>
                        <h5>April 22, 2018</h5>
                        <h5>New York City, New York</h5>
                        <a className="cta waves-effect waves-light btn-large" href="https://www.eventbrite.com/e/breaking-bread-tickets-43250937719?aff=es2">Reserve Seat</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;

