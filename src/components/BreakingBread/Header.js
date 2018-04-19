import React from 'react';

const Header = () => {
    return (

        <section className="breakingbread header bg">
            <div className="row">
                <div className="col s12 m10 offset-m1 center-align">
                    <div className="container">
                        <img className="responsive-img title" alt="Breaking Bread" src="https://fownders.s3.us-east-2.amazonaws.com/bb-haile-header-BreakingBread.png" />
                    </div>
                    {/*<img className="responsive-img" alt="Breaking Bread" src="https://fownders.s3.us-east-2.amazonaws.com/breakingbread-logo-hailee.png" />*/}
                    {/*<img className="responsive-img" width={300} alt="Breaking Bread Features" src="https://fownders.s3.us-east-2.amazonaws.com/ff-breakingbread-haile-logo.png" />*/}
                </div>
            </div>
            <div className="row">
                <div className="col s12 m12 l8 offset-l2">
                    <div className="container">
                        <div className="video-container">
                            <iframe width="853" height="480" title="Breaking Bread" src="https://www.youtube.com/embed/n85fLxsLXKs" frameBorder="0" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="row mb0 hide-on-small-and-down">*/}
                {/*<div className="col s12 center-align">*/}
                    {/*<div className="relative-container">*/}
                        {/*<img className="responsive-img header-figures" alt="Gerard Adams & Haile Thomas" src="https://fownders.s3.us-east-2.amazonaws.com/bb-haile-desktop.png" />*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
            {/*<div className="row mb0 hide-on-small-and-down">*/}
                {/*<div className="col s12 m6 center-align">*/}
                    {/*<div className="header relative-figure">*/}
                        {/*<div className="absolute-figure figure-1">*/}
                            {/*<img className="responsive-img" alt="Haile Thomas" src="https://fownders.s3.us-east-2.amazonaws.com/bb-hailethomas-header.png" />*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                {/*<div className="col s12 m6 center-align p0">*/}
                    {/*<div className="header relative-figure">*/}
                        {/*<div className="absolute-figure">*/}
                            {/*<img className="responsive-img" alt="Gerard Adams" src="https://fownders.s3.us-east-2.amazonaws.com/bb-haile-gerard-header.png" />*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
            {/*</div>*/}
        </section>

    );
}

export default Header;
