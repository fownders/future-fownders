import React from 'react';

const Partners = () => {
    return (

        <section className="bg why-bg3">
            <div className="container ptb-6">
                <div className="row mb0">
                    <div className="col s12 m12 l10 offset-l1 center-align">
                        <h2 className="white-text">Future Fownders Partners</h2>
                        <p className="white-text center">The program includes educational content, exclusive influencer appearances and hands-on mentorship from top People’s Prep Charter, Central High School and secured.</p>
                        <h2 className="white-text">Schools with our program:</h2>
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col s6 m3 center-align">
                        <img className="responsive-img" width={180} src="http://poprobots.com/wp-content/uploads/2013/11/POPCS.png" />
                    </div>
                    <div className="col s6 m3 center-align">
                        <img className="responsive-img" width={130} src="https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/New_Jersey_Devils_logo.svg/1200px-New_Jersey_Devils_logo.svg.png" />
                    </div>
                    <div className="col s6 m3 center-align">
                        <img className="responsive-img" src="http://www.schoolsthatcan.org/wp-content/uploads/2016/03/STC-Logo-Inverted.png" />
                    </div>
                    <div className="col s6 m3 center-align">
                        <img className="responsive-img" src="http://content.nps.k12.nj.us/wp-content/uploads/sites/58/2014/08/EAS.png" />
                    </div>
                </div>
                <div className="row mb0">
                    <div className="col s6 m3 center-align">
                        <img className="responsive-img" width={180} src="http://www.fulcrumapp.com/assets/img/cases/brownandcaldwell-logo.jpg" />
                    </div>
                    <div className="col s6 m3 center-align">
                        <img className="responsive-img" width={140} src="http://static.wixstatic.com/media/6545f7_8d35132bc9df4ed7b39d5433ab5cfbfd.png/v1/fill/w_224,h_212,al_c,lg_1/6545f7_8d35132bc9df4ed7b39d5433ab5cfbfd.png" />
                    </div>
                    <div className="col s6 m3 center-align">
                        <img className="responsive-img" width={120} src="data:image/png;base64,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" />
                    </div>
                    <div className="col s6 m3 center-align">
                        <img className="responsive-img" width={120} src="https://yt3.ggpht.com/a-/AJLlDp2SrzAdU_tJKJwXhJ9XDmkLv859pzRFTSuv5g=s900-mo-c-c0xffffffff-rj-k-no" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partners;
