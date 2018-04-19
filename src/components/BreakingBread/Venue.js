import React from 'react';

const Venue = () => {
    return (

        <section className="breakingbread venue bg relative-container">
            <div className="container">
                <div className="row pb-4">
                    <div className="col s12 m7 l7 center-align p0">
                        <div className="col s12 center-align">
                            <br className="hide-on-small-and-down"/><br className="hide-on-med-and-down"/><br className="hide-on-med-and-down"/><br/>
                            <img className="responsive-img" alt="Breaking Bread" src="https://fownders.s3.us-east-2.amazonaws.com/bb-haile-header-BreakingBread.png" />
                        </div>
                        <div className="col s12 m10 offset-m1 l8 offset-l2 center-align">
                            <img className="responsive-img" alt="The Setai Penthouse" src="https://fownders.s3.us-east-2.amazonaws.com/Setai-House.png" />
                        </div>
                    </div>
                    <div className="col s12 m5 l5 center-align">
                        <br className="hide-on-small-and-down" />
                        <img className="responsive-img" alt="The Setai Penthouse" src="https://fownders.s3.us-east-2.amazonaws.com/bb-haile-venue-House.png" />
                    </div>
                </div>
            </div>

        </section>

    );
}

export default Venue;
