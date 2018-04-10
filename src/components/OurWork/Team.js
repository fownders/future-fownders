import React from 'react';

const Team = () => {
    return (
        <section className="team white">
            <div className="container ptb-4">
                <div className="row">
                    <div className="col s12">
                        <h2 className="black-text mt0">Meet Our Team</h2>
                    </div>
                    <div className="col s12 m3">
                        <img className="responsive-img" alt="Amanda Johnson Fownders Director" src="https://farm1.staticflickr.com/895/27340675008_fd76b55e0d_m.jpg" />
                    </div>
                    <div className="col s12 m9 left-align">
                        <h5 className="brand-text mt0"><br className="hide-on-med-and-up"/>Amanda Johnson</h5>
                        <h5 className="black-text">Director</h5>
                        <p className="black-text">Amanda is the Director of Future Fownders. Since children are our future, we believe that they need to be ready for anything that life throws at them. Throw the Future Fownders program, we help young in our community develop the wisdom to overcome future obstacles that come their way.</p>
                    </div>
                </div>
                <div className="row mb0">
                    <div className="col s12 m3">
                        <img className="" alt="Jade Jordan Fownders Operations Assistant" height={153} width={230} src="https://farm1.staticflickr.com/806/41214887751_697e28c12d_m.jpg" />
                    </div>
                    <div className="col s12 m9 left-align">
                        <h5 className="brand-text mt0"><br className="hide-on-med-and-up"/>Jade Jordan</h5>
                        <h5 className="black-text">Operations Assistant</h5>
                        <p className="black-text">Jade Jordan is the Director of Community Engagement here at Fownders. As the head of community outreach, Jade serves as the point-person for partnering with local community-based organizations in order to help Fownders actively engage with various community partnerships, raise awareness in the city and create a lasting positive impact in the community.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Team;
