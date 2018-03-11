import React, {Component} from 'react';
// import { Button } from 'reactstrap';

class DonateButton extends Component {

    render() {
        return (
            <div>
                <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                    <input type="hidden" name="cmd" value="_s-xclick"/>
                    <input type="hidden" name="hosted_button_id" value="RLME4T28HXER4"/>
                    <input type="submit" value="DONATE" name="submit" title="PayPal - The safer, easier way to pay online!" className="btn brand-blue"/>
                    <img  alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1" />
                </form>
            </div>
        );
    }
}

export default DonateButton;

