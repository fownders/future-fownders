import React, {Component} from 'react';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaEnvelope from 'react-icons/lib/fa/envelope';

class Footer extends Component {
    render() {

        return (

            <div>
                <footer className="page-footer grey lighten-2 pb-8">
                    <div className="container">
                        <div className="row">
                            <div className="col s12 m4 offset-m4 l4 offset-l4 center">
                                <img className="responsive" width={200} align="center" alt="Future Fownders" src="https://fownders.s3.us-east-2.amazonaws.com/futurefownders-logo-color-large.png" />
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col s12 l4 center-align">
                                    <a href="#ourWork" className="hover-blue">OUR WORK</a>
                                </div>
                                <div className="col s12 l4 center-align">
                                    <a href="#aboutUs" className="hover-blue">ABOUT US</a>
                                </div>
                                <div className="col s12 l4 center-align">
                                    <a href="#donate" className="hover-blue">DONATE</a>
                                </div>
                            </div>
                            <hr className="grey-hr" />
                        </div>
                        <div className="row pt-1">
                            <div className="col s6 right-align">
                                <a className="ft-25" href="https://www.instagram.com/futurefownders"><FaInstagram /></a>
                            </div>
                            <div className="col s6 left-align">
                                <a className="ft-25" href="mailto:https://www.FutureFownders@Fownders.org"><FaEnvelope /></a>
                            </div>
                        </div>
                    </div>

                </footer>

                {/*<section className="pd-4">*/}
                {/*<section>*/}
                {/*<div className="row">*/}
                {/*<div className="col s12">*/}
                {/*<a href="#!" className="brand-logo center">*/}
                {/*<img className=" responsive-img center ffooter grey-text" src="https://fownders.s3.us-east-2.amazonaws.com/future-fownders-logo-white.png" width={60}/>*/}
                {/*Future Fownders</a>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<div className="row">*/}
                {/*<div className="col s12">*/}
                {/*<ul className="center black-text">*/}
                {/*<a href="#ourWork" className="footer grey-text">OUR WORK</a>*/}
                {/*<a href="#aboutUs" className="footer grey-text">ABOUT US</a>*/}
                {/*<a href="#donate" className="footer grey-text">DONATE</a>*/}
                {/*<br/>*/}
                {/*<br/>*/}
                {/*</ul>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*<hr className="hrBottom center"/>*/}
                {/*<div className="row">*/}
                {/*<div className="col s12 center-align">*/}
                {/*<a href="https://www.instagram.com/futurefownders">*/}
                {/*<FaInstagram className="insta" />*/}
                {/*</a>*/}
                {/*<a href="https://www.FutureFownders@Fownders.org">*/}
                {/*<FaEnvelope className="emailLogo" />*/}
                {/*</a>*/}
                {/*</div>*/}
                {/*</div>*/}
                {/*</section>*/}
                {/*</section>*/}
            </div>
        );
    }
}

export default Footer;





