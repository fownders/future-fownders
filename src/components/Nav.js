import React, {Component} from 'react';
import $ from 'jquery';
import 'materialize-css/dist/js/materialize.js';
import DonateButton from "../components/DonateButton";

class Nav extends Component {

    componentDidMount() {
        $(document).ready(function(){
            $('.button-collapse').sideNav();

        });
    }

    render() {

        return (

            <nav className="transparent z-depth-0">
                <div className="nav-wrapper transparent">
                    <a href="#!" className="brand-logo left">
                        <img className="logo responsive-img left" alt="Future Fownders" src="https://fownders.s3.us-east-2.amazonaws.com/futurefownders-logo-white-large.png" width={200}/>
                    </a>
                    <a href="#" data-activates="mobile-demo" className="button-collapse right"><i className=" material-icons">menu</i></a>
                    <ul className="right hide-on-med-and-down black-text">
                        <li><a className="white-text" href="#ourWork">Our Work</a></li>
                        <li><a className="white-text" href="#aboutUs">About Us</a></li>
                        <li><DonateButton/></li>
                    </ul>
                    <ul className="side-nav" id="mobile-demo">
                        <li><a href="#ourWork" className="white-text">Our Work</a></li>
                        <li><a href="#aboutUs" className="white-text">About Us</a></li>
                        <li><DonateButton/></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Nav;
