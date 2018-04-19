import React from 'react';

const UpcomingEvents = () => {
    return (
        <section className="team white">
            <div className="container ptb-4">
                <div className="row">
                    <div className="col s12 m12 l10 offset-l1 p0">
                        <div className="col s12 m5">
                            <a href="/breakingbread"><img className="responsive-img" alt="Breaking Bread" src="https://fownders.s3.us-east-2.amazonaws.com/ff-breakingbread-haile-header.png" /></a>
                        </div>
                        <div className="col s12 m7 left-align">
                            <p className="brand-text bold mb0">Breaking Bread</p>
                            <p className="black-text m0">Sunday,  April 22,  2018</p>
                            <p className="black-text mt0">An Exclusive Charity Dinner Series Hosted By Gerard Adams.</p>
                            <a className="waves-effect waves-light btn brand-blue" href="https://events.fownders.org/event/Breaking-Bread-Charity-Dinner-NY">Tickets</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default UpcomingEvents;
