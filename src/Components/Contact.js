import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      // var name = this.props.data.name;
      // var street = this.props.data.address.street;
      // var city = this.props.data.address.city;
      // var state = this.props.data.address.state;
      // var zip = this.props.data.address.zip;
      // var phone= this.props.data.phone;
      // var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               {/* <h1><span>Get In Touch.</span></h1>
              <br></br>
              <br></br>
              <br></br>
               <a target="submit" className="submit" href="mailto:RabbiGuide@gmail.com">GET IN TOUCH</a> */}

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>
                  {/* <h1><span>Get In Touch.</span></h1> */}
              <br></br>
              <br></br>
              <br></br>
               <a target="submit" className="submit" href="mailto:BSzuchmacher@gmail.com">CLICK ME TO GET IN TOUCH</a>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>
					{/* </fieldset>
				   </form> */}

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>
   </section>
    );
  }
}

export default Contact;
