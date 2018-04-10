import React, {Component} from 'react';
import FaInstagram from 'react-icons/lib/fa/instagram';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaYoutube from 'react-icons/lib/fa/youtube';

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
                                <div className="col s12 m8 offset-m2 center-align">
                                    <div className="col s12 l4 center-align">
                                        <a href="#ourWork" className="hover-blue">OUR WORK</a>
                                    </div>
                                    <div className="col s12 l4 center-align">
                                        <a href="#aboutUs" className="hover-blue">ABOUT US</a>
                                    </div>
                                    <div className="col s12 l4 center-align">
                                        <form className="footer-donate" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                                            <input type="hidden" name="cmd" value="_s-xclick"/>
                                            <input type="hidden" name="hosted_button_id" value="RLME4T28HXER4"/>
                                            <input type="submit" value="DONATE" name="submit" title="PayPal - The safer, easier way to pay online!" className="transparent z-depth-0 hover-blue"/>
                                            <img  alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <hr className="grey-hr" />
                        </div>
                        <div className="row mb0">
                            <div className="col s12 m4 offset-m4 center-align">
                                <div className="col s3 center-align">
                                    <a className="ft-25" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/futurefownders"><FaInstagram /></a>
                                </div>
                                <div className="col s3 center-align">
                                    <a className="ft-25" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/FutureFownders/"><FaFacebook /></a>
                                </div>
                                <div className="col s3 center-align">
                                    <a className="ft-25" href="mailto:futurefownders@fownders.org"><FaEnvelope /></a>
                                </div>
                                <div className="col s3 center-align">
                                    <a className="ft-25" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UClhfOaZgv6oNiVaGzYWbAjA"><FaYoutube /></a>
                                </div>
                            </div>
                        </div>
                        <div className="row mb0">
                            <div className="col s12 m8 offset-m2 center-align">
                                <p className="uppercase center">P.O. Box 200471 Newark, NJ 07102</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;





