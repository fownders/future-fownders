import React from 'react';

const YoureInvited = () => {
    return (

        <section className="youre-invited bg ptb-6">
            <div className="container breakingbread">
                <div className="row mb0">
                    <div className="col s12 center-align">
                        <img className="responsive-img" alt="Youre Invited to Future Fownders Breaking Bread" src="https://fownders.s3.us-east-2.amazonaws.com/bb-haile-yourinvited-YOU%E2%80%99RE%20INVITED.png" />
                    </div>
                    <div className="col s12 center-align">
                        {/*<img className="responsive-img" alt="You're Invited" src="https://cdn2.hubspot.net/hubfs/3357911/Future%20Fownders/Breaking%20Bread/section-two-you%E2%80%99re%20invited.png" />*/}
                        <p className="grey-text f-25 lh-160">Breaking Bread is a monthly exclusive charity dinner series where culinary artistry, convo and cause collide. This month’s theme will discuss the power of fueling potential through food and putting passion into action.</p>
                        <img className="responsive-img youre-invited-divider" alt="Divider" src="https://fownders.s3.us-east-2.amazonaws.com/bb-haile-yourinvited-Divider.png" />
                        <p className="grey-text f-25 lh-160 mb0">Our NYC venue brings a new level of downtown sophistication. Relax in style as you break bread with Haile Thomas - who Michelle Obama calls an example of what can happen when you use your voice to change the world - and Gerard Adams ‘The Millennial Mentor’. Join us for an epic evening of a 5-star chef expertly prepared meal, great vibes and great minds as we celebrate Earth Day and converse about leveling up, fueled for optimal impact.</p>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default YoureInvited;

