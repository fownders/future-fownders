import React from 'react';
import DonateButton from '../DonateButton';

const WhyHeader = () => {
    return (

        <section className="bg why-header-bg valign-wrapper">
            <div className="container pd-5">
                <div className="row">
                    <div className="col s12 left-align">
                        <h2 className="white-text left-align mb0">Our Impact</h2>
                        <p className="col s12 m8 l6 p0 white-text">Future Fownders aims to cultivate and inspire our next generation of leaders by providing real world education for real world impact.</p>
                        <br/>
                        <div className="col s12 p0"><DonateButton/></div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WhyHeader;
