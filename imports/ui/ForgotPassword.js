import React, { Component } from 'react';

class ForgotPassword extends Component {
  goTo(path) {
    const { history } = this.props
    history.push(path)
  }

  render() {
    return(
     <section className="section">
        <div className="form-wrapper w-form">
          <form data-name="Order Form" data-redirect="/dashboard" id="wf-form-Order-Form" name="wf-form-Order-Form" redirect="/dashboard">
            <div className="form-section narrow">
              <div className="form-block"><label htmlFor="Email-2">Email *</label><input autoFocus className="text-input w-input" data-name="Email 2" id="Email-2" maxLength={256} name="Email-2" placeholder="Email Address" required="required" type="text" /></div>
              <div className="form-button-wrapper left-align">
                <div className="btn w-button">SEND RESET PASSWORD INSTRUCTIONS</div>
              </div>
              <div className="form-button-wrapper left-align">
                <a onClick={() => this.goTo('login')} className="secondary-action">LOG IN</a>
                <p className="login-button-separator">or</p>
                <a onClick={() => this.goTo('account')} className="secondary-action">CREATE ACCOUNT</a>
              </div>
            </div>
          </form>
          <div className="success w-form-done">
            <div>Thank you! Your order has been received.</div>
            <div className="social-block">
              <div>In the meantime, connect with us on social to stay up to date on the latest tours:</div><a className="social w-inline-block" href="https://www.facebook.com/byp" target="_blank"><img src="images/icon-facebook.png" width={20} /></a><a className="social w-inline-block" href="https://twitter.com/bypconcerts" target="_blank"><img src="images/icon-twitter.png" width={20} /></a><a className="social w-inline-block" href="https://www.instagram.com/bypconcerts/" target="_blank"><img src="images/icon-instagram.png" width={20} /></a></div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div>
        </div>
      </section>
    )
  }
}

export default ForgotPassword
