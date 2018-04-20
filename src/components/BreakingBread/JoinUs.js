import React from 'react';

const JoinUs = () => {
    return (

        <section className="join-us bg ptb-4 relative-container">
            <div className="container breakingbread">
                <div className="row mb0">
                    <div className="col s12 center-align">
                        <h5 className="f-25 f-500 uppercase m0">An exclusive charity dinner series and special Earth Day celebration hosted by Gerard Adams</h5>
                        <h6 className="f-22 bold">With celebrity guest, Haile Thomas; international speaker, youth activist and youngest Certified Integrative Nutrition Health Coach in the U.S. The evening's gourmet vegan meal is curated by Haile and specially prepared by a 5-star chef.</h6>
                    </div>
                    <div className="col s12 center-align">
                        <img className="responsive-img join-us-divider" alt="Divider" src="https://fownders.s3.us-east-2.amazonaws.com/bb-haile-joinus-divider.png" />
                        <br/>
                    </div>
                    <div className="col s12 center">
                        <p className="f-25 uppercase bold m0 pb-10 center">Join Us The Evening Of</p>
                        <p className="f-25 uppercase f-500 m0 pb-10 center">22 April 2018</p>
                        <p className="f-25 uppercase f-500 m0 center">New York City, New York</p>
                    </div>
                </div>
                <div className="row mb0">
                    <div className="col s12 center-align">
                        <a className="cta waves-effect waves-light btn-large" href="https://events.fownders.org/event/Breaking-Bread-Charity-Dinner-NY">Reserve Seat</a>
                    </div>
                    <br/>
                </div>
            </div>
        </section>
    );
}

export default JoinUs;

