import React from 'react';
import DonateButton from '../DonateButton';

const Volunteer = () => {
    return (
        <section className="bg ourwork-volunteer-bg">
            <div className="container ptb-4">
                <div className="row">
                    <div className="col s12 m12 l10 offset-l1 center-align">
                        <h2 className="white-text lh-40 center-align text-uppercase mb0">We're on a Mission to Ignite Transformation for a New Generation. Help Spread the Flame!</h2>
                        <br />
                        <DonateButton/>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Volunteer;
