import React, { Component } from 'react';
import Mailchimp from 'react-mailchimp-form';
 
class Mail extends Component {
  render() {
    return (
       <section className="pd emailBox brand-blue">
        <div className="container">
          <section>
            <div className="row mb0">
              <div className="col s12 m12 l12">
                <Mailchimp
                action="https://fownders.us18.list-manage.com/subscribe/post?u=beabbc028d5e836634781f7bf&amp;id=7a69ff9367" method="post"
                fields={[
                  { 
                    name: 'FNAME',
                    placeholder: '*Full Name',
                    type: 'text',
                    required: true
                  },
                  {
                    name: 'EMAIL',
                    placeholder: '*Email',
                    type: 'email',
                    required: true
                  }
                  
                ]}
                    // Change predetermined language
                message={
                    {
                        sending: "Sending...",
                        success: "Thank you for subscribing!",
                        error: "An unexpected internal error has occurred.",
                        empty: "You must write an e-mail.",
                        duplicate: "Too many subscribe attempts for this email address",
                        button: "Get Our Emails"
                    }
                }
                    // Add a personalized class
                className='<emailBox>'

                />
            </div>
          </div>
        </section>  
      </div>
    </section>
     );
    }
  }
 
export default Mail;
