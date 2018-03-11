import React from 'react';

const OurWork = () => {
    return (

        <section className="pd-2">
            <div className="row mb0">
                <section className="p0">
                    <div className="col s12 m6 l6 bg home-bg2" id="ourWork">
                    </div>
                    <div className="col s12 m6 l6 left-align">
                        <div className="mt-2">
                        <div className="col s12 m12 l3 left-align">
                            <h2 className="dark-grey-text left-align mb0">Our Work</h2>
                        </div>
                        <div className="col s12 m11 l8 left-align">
                            <hr className="blue-hr our-work mb0 left-align"/>
                        </div>
                        </div>
                        <div className="col s12 m11">
                            <p className="dark-grey-text">
                                Future Fownders’ first year in our flagship City of Newark, NJ has facilitated multiple In-class Business Building programs with Link Charter School, and EastSide High School. Our Internship Program has formed alliances with People’s Prep Charter, and EastSide High School’s Big Picture Program.
                                <br/>
                                <br/>
                                We have also developed a partnership with California based Real World Scholars which provides all of our student-run businesses a full scale administrative and e-commerce platform. Future Fownders has also partnered with local nonprofit, Schools That Can to develop the curriculum used for their STC 2017 Design Day Challenge and were also on hand to help facilitate the event hosted at the Audible headquarters.
                                <br />
                            </p>
                            <div className="mb-1">
                                <img className="responsive-img mb-1" width={200} alt="Future Fownders" src="https://fownders.s3.us-east-2.amazonaws.com/futurefownders-logo-color-large.png" />
                            </div>
                        </div>
                    </div>
                    <div>
                    </div>
                </section>
            </div>
        </section>
    )
}

export default OurWork;