import React from 'react';

const SectionCTA = () => {
    return (

        <section className="divider-bg bg ptb-4 relative-container">
            <div className="container">
                <div className="row">
                    <div className="col s12 center-align">
                        <img className="responsive-img" alt="Breaking Bread" src="https://fownders.s3.us-east-2.amazonaws.com/bb-haile-cta-BreakingBread.png" />
                    </div>
                </div>
                <div className="row mb0">
                    <div className="col s12 s12 center-align">
                        <a className="cta waves-effect waves-light btn-large" href="https://events.fownders.org/event/Breaking-Bread-Charity-Dinner-NY">Reserve Seat</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SectionCTA;

