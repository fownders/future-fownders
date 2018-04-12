import React from 'react';

const FigureLeft = () => {
    return (

        <section className="figure-left bg pt-4">
            <div className="container breakingbread">
                <div className="relative-container">
                    <div className="row mb0">
                        {/*DESKTOP AND UP IMG*/}
                        <div className="col s12 m12 l6 left-align hide-on-med-and-down">
                            <div className="relative-figure">
                                <div className="absolute-figure">
                                    <img className="figure responsive-img" alt="Gerard Adams" src="https://fownders.s3.us-east-2.amazonaws.com/bb-haile-hailebio-HaileThomas.png" />
                                </div>
                            </div>
                        </div>
                        <div className="col s12 m12 l6 left-align">
                            <div className="col s12 left-align">
                                <img className="responsive-img" alt="Gerard Adams" src="https://cdn2.hubspot.net/hubfs/3357911/Future%20Fownders/Breaking%20Bread/section-four-gerard-adams.png" />
                            </div>
                            <div className="col s12 left-align">
                                <p className="white-text uppercase">
                                    {/*Haile Thomas Bio- Haile Thomas is 17 years old, an international speaker, health activist, vegan food & lifestyle influencer, the youngest Certified Integrative Health Coach in the United States, and the founder/CEO of the nonprofit HAPPY (Healthy Active Positive Purposeful Youth). Haile founded HAPPY when she was 12 years old to address the need for free/affordable plant-based nutrition and culinary education in underserved/at-risk communities, as well as in schools and through annual summer camps.*/}
                                    {/*<br className="hide-on-med-and-down" />*/}
                                    {/*<br className="hide-on-med-and-down" />*/}
                                    Haile has personally engaged over 15,000 kids and thousands of adults around the world since beginning her activism in 2010. All of Haile’s programs, projects, and initiatives, are geared towards engaging, educating, motivating and empowering young people to make healthy lifestyle choices to live their best life. Haile and her work have been featured on the Today Show, Food Network, CNN, Buzzfeed, MTV, NowThis, Dr. Oz, Teen Vogue, Fortune, O Magazine, and Experience Life Magazine among others.
                                </p>
                            </div>
                        </div>
                        {/*IPAD AND DOWN IMG*/}
                        <div className="col s12 m10 offset-m1 l6 center-align hide-on-large-only">
                            <div className="relative-figure">
                                <div className="absolute-figure">
                                    <img className="figure responsive-img" alt="Gerard Adams" src="https://fownders.s3.us-east-2.amazonaws.com/bb-haile-hailebio-HaileThomas.png" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FigureLeft;

