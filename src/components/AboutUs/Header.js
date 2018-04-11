import React, {Component} from 'react';
import $ from 'jquery';
import 'materialize-css/dist/js/materialize.js';

// const VideoSection = () => {
//     return (

class Header extends Component {

    // constructor(){
    //     super();
    // }

    componentDidMount() {
        $(document).ready(function(){
            $('.modal').modal();
        });

        $('#stop-video').on('click', function(ev) {
            // $("#videocontainer").fadeOut(200);
            $("#videoplayer").attr("src", 'https://www.youtube.com/embed/8r6OyGO0mOg?ecver=2');
            ev.preventDefault();

        });

        $('#play-video').on('click', function(ev) {
            $("#videoplayer")[0].src += "&autoplay=1";
            ev.preventDefault();

        });
    }

    render() {

        return (

            <section className="bg about-header-bg valign-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col s12 center-align">
                            <p className="white-text center">Future Fownders at Newark's East Side High.</p>
                        </div>
                        <div className="col s12 center-align">
                            <a id="play-video" className="left-align waves-effect waves-light btn modal-trigger" href="#modal1">PLAY&nbsp;<i className="medium material-icons white-text">play_arrow</i></a>
                            <div id="modal1" className="modal">
                                <div className="modal-content">
                                    <div className="row">
                                        <div className="col s12 right-align">
                                            <a id="stop-video" href="#!" className="modal-action modal-close white-text right-align"><i className="material-icons white-text">clear</i></a>
                                        </div>
                                    </div>
                                    <div id="videocontainer" className="video-container">
                                        <iframe id="videoplayer" title="Newark East Side High" width="853" height="480" src="https://www.youtube.com/embed/8r6OyGO0mOg?ecver=2" frameBorder="0" allowFullScreen></iframe>
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

export default Header;
