import React from 'react';
// import DonateButton from '../DonateButton';

const Header = () => {
    return (

        <section className="bg ourwork-header-bg">
            <div className="container pd-5">
                <div className="row">
                    <div className="col s12 center-align">
                        <h2 className="white-text center-align mb0">Our Mission</h2>
                        <p className="white-text center">Future Fownders aims to cultivate and inspire our next generation of leaders <br className="hide-on-med-and-down"/> by providing real world education for real world impact.</p>
                        {/*<br/>*/}
                        {/*<div className="col s12 p0"><DonateButton/></div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Header;
