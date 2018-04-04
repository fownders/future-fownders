import React, {Component} from 'react';
import $ from 'jquery';
import 'materialize-css/dist/js/materialize.js';

// const VideoSection = () => {
//     return (

class WhySectionTwo extends Component {

    constructor(){
        super();
    }

    componentDidMount() {
        $(document).ready(function(){
            $('.modal').modal();
        });
    }

    render() {

        return (

// const WhySectionTwo = () => {
//     return (

            <section className="bg why-bg2 valign-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <p className="black-text">Future Fownders Day of Gratitude 2017. Food and Toy Drive at <br className="hide-on-med-and-down"/> Chancellor Avenue School in Newark, NJ.</p>
                        </div>
                        <div className="col s12 left-align">
                            <a className="left-align waves-effect waves-light btn modal-trigger" href="#modal1">PLAY&nbsp;<i className="medium material-icons white-text">play_arrow</i></a>
                            <div id="modal1" className="modal">
                                <div className="modal-content">
                                    <div className="video-container">
                                        <iframe title="Fownders Toy Drive" width="853" height="480" src="https://www.youtube.com/embed/YulxXtu2YVI?rel=0&amp;ecver=2" frameborder="0" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        );
    }
}

export default WhySectionTwo;
