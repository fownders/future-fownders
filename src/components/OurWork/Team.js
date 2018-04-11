import React from 'react';

const Team = () => {
    return (
        <section className="team white">
            <div className="container ptb-4">
                <div className="row">
                    <div className="col s12">
                        <h2 className="black-text mt0">Meet Our Team</h2>
                    </div>
                    <div className="col s12 m4">
                        <img className="responsive-img" alt="Amanda Johnson Fownders Director" src="https://fownders.s3.us-east-2.amazonaws.com/amanda.png" />
                    </div>
                    <div className="col s12 m8 left-align">
                        <p className="brand-text bold mb0">Amanda Johnson</p>
                        <p className="black-text mt0">Director</p>
                        <p className="black-text">Amanda is the Director of Future Fownders. Since children are our future, we believe that they need to be ready for anything that life throws at them. Throw the Future Fownders program, we help young in our community develop the wisdom to overcome future obstacles that come their way.</p>
                    </div>
                </div>
                <div className="row mb0">
                    <div className="col s12 m4">
                        <img className="responsive-img" alt="Jade Jordan Fownders Operations Assistant" src="https://fownders.s3.us-east-2.amazonaws.com/jade.png" />
                    </div>
                    <div className="col s12 m8 left-align">
                        <p className="brand-text bold mb0">Jade Jordan</p>
                        <p className="black-text m0">Operations Assistant</p>
                        <p className="black-text">Jade Jordan is the Director of Community Engagement here at Fownders. As the head of community outreach, Jade serves as the point-person for partnering with local community-based organizations in order to help Fownders actively engage with various community partnerships, raise awareness in the city and create a lasting positive impact in the community.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Team;
