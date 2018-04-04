import React, {Component} from 'react';
import $ from 'jquery';
import 'materialize-css/dist/js/materialize.js';

// const VideoSection = () => {
//     return (

class VideoSection extends Component {

    // constructor(){
    //     super();
    // }

    componentDidMount() {
        $(document).ready(function(){
            $('.modal').modal();
        });
    }

    render() {

        return (

            <section className="bg home-bg4 valign-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <p className="white-text">Future Fownders at Newark's East Side High.</p>
                        </div>
                        <div className="col s12 left-align">
                            <a className="left-align waves-effect waves-light btn modal-trigger" href="#modal1">PLAY&nbsp;<i className="medium material-icons white-text">play_arrow</i></a>
                            <div id="modal1" className="modal">
                                <div className="modal-content">
                                    <div className="video-container">
                                        <iframe title="Newark East Side High" width="853" height="480" src="https://www.youtube.com/embed/8r6OyGO0mOg?ecver=2" frameborder="0" allowfullscreen></iframe>
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

export default VideoSection;
