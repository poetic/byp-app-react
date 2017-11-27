import React from 'react';
import Header from './Header';

const Account = () => (
  <div>
    <Header title={'account'}/>
    <section className="section">
      <div className="form-wrapper w-form">
        <form data-name="Order Form" id="wf-form-Order-Form" name="wf-form-Order-Form">
          <div className="form-section w-clearfix">
            <div className="section-title"><img height="30" src="images/angle.png" />
              <div className="form-section-number">
                <div>1</div>
              </div>
              <div className="title-bg">
                <div className="form-section-title">Account Information</div>
              </div>
            </div>
            <div className="col-half">
              <div className="form-block"><label className="form-subhead" htmlFor="Promoter-Contact-7">Login Details</label><label htmlFor="Acct-info---Email">Email *</label><input className="text-input w-input" data-name="Acct info - Email" id="Acct-info---Email" maxLength="256" name="Acct-info---Email" type="email" /></div>
              <div className="form-block"><label className="form-subhead" htmlFor="Promoter-Contact-7">SET / Change Password</label><label htmlFor="Acct-info---Password-Old">Type old password *</label><input className="text-input w-input" data-name="Acct info - Password Old" id="Acct-info---Password-Old" maxLength="256" name="Acct-info---Password-Old" type="password" /></div>
              <div className="form-block"><label htmlFor="Promoter-Contact-11">New password *</label><input className="text-input w-input" data-name="Acct info - Password New 1" id="Acct-info---Password-New" maxLength="256" name="Acct-info---Password-New-1" type="password" />
                <p className="help-block">6 characters minimum</p>
              </div>
              <div className="form-block"><label htmlFor="Acct-info---Password-New-2">Confirm new password</label><input className="text-input w-input" data-name="Acct info - Password New 2" id="Acct-info---Password-New-2" maxLength="256" name="Acct-info---Password-New-2" type="password" />
                <p className="help-block">6 characters minimum</p>
              </div>
            </div>
            <div className="col-half">
              <div className="form-block"><label className="form-subhead" htmlFor="Promoter-Contact-7">Account Rep</label><label htmlFor="Account-Executive">Name</label><select className="select-override w-select" data-name="Account Executive" id="Account-Executive" name="Account-Executive" required="required"><option value="">Select Account Rep...</option>
  <option value="">Account Exec #1</option>
  <option value="">Account Exec #2</option>
  <option value="">Account Exec #3</option>
  <option value="">Account Exec #4</option>
  <option value="Another Choice">No Assigned Account Rep</option></select></div>
            </div>
          </div>
          <div className="form-section w-clearfix">
            <div className="section-title"><img height="30" src="images/angle.png" />
              <div className="form-section-number">
                <div>2</div>
              </div>
              <div className="title-bg">
                <div className="form-section-title">Client information</div>
              </div>
            </div>
            <div className="col-half w-clearfix">
              <div className="form-block"><label htmlFor="Acct-info---Company-Info-Name">Name *</label><input className="text-input w-input" data-name="Acct info - Company Info Name" id="Acct-info---Company-Info-Name" maxLength="256" name="Acct-info---Company-Info-Name" required="required" type="text" /></div>
            </div>
            <div className="col-half w-clearfix">
              <div className="form-block"><label htmlFor="Acct-info---Company-Info-Email">Email *</label><input className="text-input w-input" data-name="Acct info - Company Info Email" id="Acct-info---Company-Info-Email" maxLength="256" name="Acct-info---Company-Info-Email" required="required" type="email" /></div>
            </div>
            <div className="w-clearfix">
              <div className="form-block"><label htmlFor="Acct-info---Company-Info-Company">Company *</label><input className="text-input w-input" data-name="Acct info - Company Info Company" id="Acct-info---Company-Info-Company" maxLength="256" name="Acct-info---Company-Info-Company" required="required" type="text" /></div>
            </div>
            <div className="col-half w-clearfix">
              <div className="col-third mobile-66 two w-clearfix">
                <div className="form-block"><label htmlFor="Acct-info---Company-Info-Company-Phone">Company Phone Number*</label><input className="text-input w-input" data-name="Acct info - Company Info Company Phone" id="Acct-info---Company-Info-Company-Phone" maxLength="256" name="Acct-info---Company-Info-Company-Phone" required="required" type="text" /></div>
              </div>
              <div className="col-third mobile-33 w-clearfix">
                <div className="form-block"><label htmlFor="Acct-info---Company-Info-Company-Phone-Ext">Ext.</label><input className="text-input w-input" data-name="Acct info - Company Info Company Phone Ext" id="Acct-info---Company-Info-Company-Phone-Ext" maxLength="256" name="Acct-info---Company-Info-Company-Phone-Ext" type="text" /></div>
              </div>
            </div>
            <div className="col-half w-clearfix">
              <div className="col-third mobile-66 two w-clearfix">
                <div className="form-block"><label htmlFor="Acct-info---Company-Info-Company-Alt-Phone">Alt Phone</label><input className="text-input w-input" data-name="Acct info - Company Info Company Alt Phone" id="Acct-info---Company-Info-Company-Alt-Phone" maxLength="256" name="Acct-info---Company-Info-Company-Alt-Phone" type="text" /></div>
              </div>
              <div className="col-third mobile-33 w-clearfix">
                <div className="form-block"><label htmlFor="Cell">Type</label><select className="w-select" data-name="Cell" id="Cell" name="Cell"><option value="">Select</option>
  <option value="Cell">Cell</option>
  <option value="Work">Work</option>
  <option value="Home">Home</option></select></div>
              </div>
            </div>
            <div className="form-block"><label htmlFor="Acct-info---Company-Info-Company-Address">Company Address *</label><textarea className="text-input w-input" data-name="Acct info - Company Info Company Address" id="Acct-info---Company-Info-Company-Address" maxLength="5000" name="Acct-info---Company-Info-Company-Address" required="required"></textarea></div>
            <div className="col-third w-clearfix">
              <div className="form-block"><label htmlFor="Acct-info---Company-Info-Company-City">City *</label><input className="text-input w-input" data-name="Acct info - Company Info Company City" id="Acct-info---Company-Info-Company-City" maxLength="256" name="Acct-info---Company-Info-Company-City" required="required" type="text" /></div>
            </div>
            <div className="col-third mobile-66 w-clearfix">
              <div className="form-block"><label htmlFor="Acct-info---Company-Info-Company-State">State *</label><select className="select-override w-select" data-name="Acct info - Company Info Company State" id="Acct-info---Company-Info-Company-State" name="Acct-info---Company-Info-Company-State" required="required"><option value="">Select State…</option>
  <option value="AL">AL - Alabama</option>
  <option value="AK">AK - Alaska</option>
  <option value="AZ">AZ - Arizona</option>
  <option value="ETC">The other states</option></select></div>
            </div>
            <div className="col-third mobile-33 w-clearfix">
              <div className="form-block"><label htmlFor="Acct-info---Company-Info-Company-Zip">Zip *</label><input className="text-input w-input" data-name="Acct info - Company Info Company Zip" id="Acct-info---Company-Info-Company-Zip" maxLength="256" name="Acct-info---Company-Info-Company-Zip" required="required" type="text" /></div>
            </div>
          </div>
          <div className="form-section w-clearfix">
            <div className="section-title"><img height="30" src="images/angle.png" />
              <div className="form-section-number">
                <div>3</div>
              </div>
              <div className="title-bg">
                <div className="form-section-title">Billing Information</div>
              </div>
            </div>
            <div className="form-block"><label htmlFor="Acct-info---Billing-Info-Address">Billing Address *</label><textarea className="text-input w-input" data-name="Acct info - Billing Info Address" id="Acct-info---Billing-Info-Address" maxLength="5000" name="Acct-info---Billing-Info-Address" required="required"></textarea></div>
            <div className="col-third w-clearfix">
              <div className="form-block"><label htmlFor="Acct-info---Billing-Info-City">City *</label><input className="text-input w-input" data-name="Acct info - Billing Info City" id="Acct-info---Billing-Info-City" maxLength="256" name="Acct-info---Billing-Info-City" required="required" type="text" /></div>
            </div>
            <div className="col-third mobile-66 w-clearfix">
              <div className="form-block"><label htmlFor="Acct-info---Billing-Info-State">State *</label><select className="select-override w-select" data-name="Acct info - Billing Info State" id="Acct-info---Billing-Info-State" name="Acct-info---Billing-Info-State" required="required"><option value="">Select State…</option>
  <option value="AL">AL - Alabama</option>
  <option value="AK">AK - Alaska</option>
  <option value="AZ">AZ - Arizona</option>
  <option value="ETC">The other states</option></select></div>
            </div>
            <div className="col-third mobile-33 w-clearfix">
              <div className="form-block"><label htmlFor="Acct-info---Billing-Info-Zip">Zip *</label><input className="text-input w-input" data-name="Acct info - Billing Info Zip" id="Acct-info---Billing-Info-Zip" maxLength="256" name="Acct-info---Billing-Info-Zip" required="required" type="text" /></div>
            </div>
            <div className="form-element-repeat w-clearfix">
              <div className="col-twothirds">
                <div className="form-block"><label htmlFor="Acct-info---Billing-Info-Email">Billing Email *</label><input className="text-input w-input" data-name="Acct info - Billing Info Email" id="Acct-info---Billing-Info-Email" maxLength="256" name="Acct-info---Billing-Info-Email" required="required" type="email" /></div>
              </div>
            </div>
            <div className="form-element-repeat w-clearfix">
              <div className="col-twothirds">
                <div className="form-block"><label htmlFor="Acct-info---Billing-Info-Email-Alt">Alt Email</label><input className="text-input w-input" data-name="Acct info - Billing Info Email Alt" id="Acct-info---Billing-Info-Email-Alt" maxLength="256" name="Acct-info---Billing-Info-Email-Alt" required="required" type="email" /></div>
              </div>
              <div className="col-third">
                <div className="form-block"><a className="layout-center-vertically text-link" href="#">Remove</a></div>
              </div>
            </div>
            <div className="form-block w-clearfix"><a className="btn edit-form-element w-button" href="#">Add Email</a></div>
            <div className="notice">
              <div><strong>Note</strong>: We will only send invoices via email unless otherwise established with your AE or accounting.</div>
            </div>
          </div>
          <div className="form-button-wrapper"><a className="btn btn-neutral w-button" href="dashboard.html">Cancel</a><a className="btn btn-success w-button" href="dashboard.html">Save Changes</a><input className="btn btn-neutral hidden w-button w-hidden-main w-hidden-medium w-hidden-small w-hidden-tiny" type="submit" value="Cancel" /><input className="btn btn-success w-button w-hidden-main w-hidden-medium w-hidden-small w-hidden-tiny" type="submit" value="Save changes" /></div>
        </form>
        <div className="success w-form-done">
          <div>Thank you! Your order has been received.</div>
          <div className="social-block">
            <div>In the meantime, connect with us on social to stay up to date on the latest tours:</div><a className="social w-inline-block" href="https://www.facebook.com/byp" target="_blank"><img src="images/icon-facebook.png" width="20" /></a><a className="social w-inline-block" href="https://twitter.com/bypconcerts" target="_blank"><img src="images/icon-twitter.png" width="20" /></a><a className="social w-inline-block" href="https://www.instagram.com/bypconcerts/" target="_blank"><img src="images/icon-instagram.png" width="20" /></a></div>
        </div>
        <div className="w-form-fail">
          <div>Oops! Something went wrong while submitting the form.</div>
        </div>
      </div>
    </section>
  </div>
)

export default Account
