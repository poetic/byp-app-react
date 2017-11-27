import React from 'react';

const AudioVideoOrder = () => (
  <section className="section">
    <div className="form-wrapper w-form">
      <form data-name="Order Form - Radio TV" id="Order-Form---Radio-TV" name="wf-form-Order-Form---Radio-TV">
        <div className="form-section w-clearfix">
          <div className="section-title"><img height={30} src="images/angle.png" />
            <div className="form-section-number">
              <div>1</div>
            </div>
            <div className="title-bg">
              <div className="form-section-title">Promoter information</div>
            </div>
          </div>
          <div className="form-block"><label htmlFor="Promoter-Contact-2">Promoter Contact</label><input className="text-input w-input" data-name="Promoter Contact 2" id="Promoter-Contact-2" maxLength={256} name="Promoter-Contact-2" type="text" /></div>
          <div className="col-half w-clearfix">
            <div className="col-twothirds form-block"><label htmlFor="Phone-No-5">Phone No.</label><input className="text-input w-input" data-name="Phone No." id="Phone-No-5" maxLength={256} name="Phone-No" type="text" /></div>
            <div className="col-third form-block"><label htmlFor="Ext-3">Ext.</label><input className="text-input w-input" data-name="Ext 3" id="Ext-3" maxLength={256} name="Ext-3" type="text" /></div>
          </div>
          <div className="col-half w-clearfix">
            <div className="col-twothirds form-block"><label htmlFor="Alt.-Phone-No-2">Alt. Phone No.</label><input className="text-input w-input" data-name="Alt. Phone No 2" id="Alt.-Phone-No-2" maxLength={256} name="Alt.-Phone-No-2" type="text" /></div>
            <div className="col-third form-block"><label htmlFor="Ext-2">Ext.</label><input className="text-input w-input" data-name="Ext." id="Ext-2" maxLength={256} name="Ext" type="text" /></div>
          </div>
          <div className="col-half form-block"><label htmlFor="Promoter-Email-26">Promoter Email</label><input className="text-input w-input" data-name="Promoter Email 26" id="Promoter-Email-26" maxLength={256} name="Promoter-Email-26" required="required" type="email" /></div>
          <div className="col-half form-block"><label htmlFor="Promoter-Company-2">Promoter Company</label><input className="text-input w-input" data-name="Promoter Company 2" id="Promoter-Company-2" maxLength={256} name="Promoter-Company-2" required="required" type="text" /></div>
        </div>
        <div className="form-section w-clearfix">
          <div className="section-title"><img height={30} src="images/angle.png" />
            <div className="form-section-number">
              <div>2</div>
            </div>
            <div className="title-bg">
              <div className="form-section-title">Order details</div>
            </div>
          </div>
          <div className="col-half form-block"><label htmlFor="Purchase-Order-Number">Purchase Order #</label><input className="text-input w-input" data-name="Purchase Order Number" id="Purchase-Order-Number" maxLength={256} name="Purchase-Order-Number" type="text" /></div>
          <div className="form-block"><label className="form-subhead" htmlFor="name-53">Order Spot(s)</label></div>
          <div className="form-block"><label htmlFor="Today-s-Date">Today's Date</label>
            <p>Wed March 5, 2017</p>
          </div>
          <div className="clearfix col-half">
            <div className="form-block">
              <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Radio Order 55" id="Radio-Order-55" name="Radio-Order-55" type="checkbox" /><label className="checkbox-label w-form-label" htmlFor="Radio-Order-55">Audio Order</label></div>
              <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Radio Order 56" id="Radio-Order-56" name="Radio-Order-56" type="checkbox" /><label className="checkbox-label w-form-label warning" htmlFor="Radio-Order-56">rush order ($125)</label></div>
            </div>
            <div className="form-block"><label htmlFor="Radio-must-be-received-by">Audio must be received by</label><input className="date-picker text-input w-input" data-name="Radio must be received by" id="Radio-must-be-received-by" maxLength={256} name="Radio-must-be-received-by" type="text" /></div>
            <div className="form-block">
              <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Radio Order 58" id="Radio-Order-58" name="Radio-Order-58" type="checkbox" /><label className="checkbox-label w-form-label" data-ix="notice-do-not-ship-without-approval" htmlFor="Radio-Order-58">Do not ship audio spot without approval</label></div>
            </div>
          </div>
          <div className="col-half">
            <div className="form-block">
              <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Tv Order 5" id="TV-Order-5" name="TV-Order-5" type="checkbox" /><label className="checkbox-label w-form-label" htmlFor="TV-Order-5">Video Order</label></div>
              <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Radio Order 62" id="Radio-Order-62" name="Radio-Order-62" type="checkbox" /><label className="checkbox-label w-form-label warning" htmlFor="Radio-Order-62">rush order ($150)</label></div>
            </div>
            <div className="form-block"><label htmlFor="TV-must-be-received-by-3">Video must be received by</label><input className="date-picker text-input w-input" data-name="Tv Must Be Received By 3" id="TV-must-be-received-by-3" maxLength={256} name="TV-must-be-received-by-3" type="text" /></div>
            <div className="form-block">
              <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Radio Order 63" id="Radio-Order-63" name="Radio-Order-63" type="checkbox" /><label className="checkbox-label w-form-label" data-ix="notice-do-not-ship-without-approval" htmlFor="Radio-Order-63">Do not ship video spot without approval</label></div>
            </div>
          </div>
          <div className="do-not-ship-without-approval notice">
            <div>By choosing this option your production will be emailed to you for approval. Your spots will not ship without your approval. This can delay your delivery by up to 24 hours depending on when approved. Any changes will incur revision charges. Any change to same day delivery will incur rush delivery charges.</div>
          </div>
          <div className="notice">
            <div><strong>Note</strong>: Orders received after 3:30 PM Central or which require same day turnaround incur rush charges!</div>
          </div>
        </div>
        <div className="form-section w-clearfix">
          <div className="section-title"><img height={30} src="images/angle.png" />
            <div className="form-section-number">
              <div>3</div>
            </div>
            <div className="title-bg">
              <div className="form-section-title">Event information</div>
            </div>
          </div>
          <div className="col-twothirds form-block"><label htmlFor="Tour-Headliner-Support-2">Tour / Event / Headliner <span className="form-reqd-label">*</span></label><textarea className="w-input" data-name="Tour / Headliner / Support" id="Tour-Headliner-Support-2" maxLength={5000} name="Tour-Headliner-Support" placeholder="Type to search for a tour or specifiy a new tour" required="required" defaultValue={""} /></div>
          <div className="col-twothirds form-block"><label htmlFor="Venue">Venue</label><input className="text-input w-input" data-name="Venue" id="Venue" maxLength={256} name="Venue" type="text" />
            <div className="caption">Note: we will only say market if it's written in Venue Section</div>
          </div>
          <div className="col-third form-block"><label htmlFor="name-34">Mention <em>"The"</em> in Venue Name?</label>
            <div className="radio-field w-clearfix w-radio"><input className="display-none w-radio-input" data-name="Venue Name" id="Venue Name - Yes" name="Venue-Name" type="radio" defaultValue="Venue Name - Yes" /><label className="radio-label w-form-label" htmlFor="Venue Name - Yes">Yes</label></div>
            <div className="radio-field w-clearfix w-radio"><input className="display-none w-radio-input" data-name="Venue Name" id="Venue Name - No" name="Venue-Name" type="radio" defaultValue="Venue Name - No" /><label className="radio-label w-form-label" htmlFor="Venue Name - No">No</label></div>
          </div>
          <div className="col-twothirds form-block"><label htmlFor="City-Market-2">City/Market</label><input className="text-input w-input" data-name="City Market 2" id="City-Market-2" maxLength={256} name="City-Market-2" type="text" /></div>
          <div className="form-element-repeat w-clearfix">
            <div className="col-third form-block"><label htmlFor="Date">Date</label><input className="date-picker text-input w-input" data-name="Date" id="Date" maxLength={256} name="Date" type="text" /></div>
            <div className="col-third form-block"><label htmlFor="Time">Time/s</label><input className="text-input w-input" data-name="Time" id="Time" maxLength={256} name="Time" type="text" /></div>
          </div>
          <div className="form-element-repeat w-clearfix">
            <div className="col-third form-block"><label htmlFor="Date-2">Date</label><input className="date-picker text-input w-input" data-name="Date 2" id="Date-2" maxLength={256} name="Date-2" type="text" /></div>
            <div className="col-third form-block"><label htmlFor="Time-2">Time/s</label><input className="text-input w-input" data-name="Time 2" id="Time-2" maxLength={256} name="Time-2" type="text" /></div>
            <div className="col-third form-block"><a className="layout-center-vertically text-link" href="#">Remove date</a></div>
          </div>
          <div className="form-block w-clearfix"><a className="btn edit-form-element w-button" href="#">Add Date</a></div>
          <div className="col-twothirds form-block"><label htmlFor="Custom-dates">Custom string of dates</label>
            <div className="caption">Type residency or other custom dates</div><textarea className="w-input" data-name="Custom dates" id="Custom-dates" maxLength={5000} name="Custom-dates" placeholder="Example: Two shows every Friday in July, at 5pm and 8pm" defaultValue={""} /></div>
          <div className="form-element-repeat w-clearfix" data-ix="combo-order-initial-state">
            <div className="col-twothirds form-block w-clearfix"><label className="display-inline-block" htmlFor="Venue-2">Venue #2 (combo order)</label><a className="text-link" href="#">Remove this venue</a><input className="text-input w-input" data-name="Venue 2" id="Venue-2" maxLength={256} name="Venue-2" type="text" />
              <div className="caption">Note: we will only say market if it's written in Venue Section</div>
            </div>
            <div className="col-third form-block"><label htmlFor="name-34">Mention <em>"The"</em> in Venue Name?</label>
              <div className="radio-field w-clearfix w-radio"><input className="display-none w-radio-input" data-name="Venue Name" id="Venue Name - Yes" name="Venue-Name" type="radio" defaultValue="Venue Name - Yes" /><label className="radio-label w-form-label" htmlFor="Venue Name - Yes">Yes</label></div>
              <div className="radio-field w-clearfix w-radio"><input className="display-none w-radio-input" data-name="Venue Name" id="Venue Name - No" name="Venue-Name" type="radio" defaultValue="Venue Name - No" /><label className="radio-label w-form-label" htmlFor="Venue Name - No">No</label></div>
            </div>
            <div className="form-element-repeat w-clearfix">
              <div className="col-third form-block"><label htmlFor="Date-3">Date</label><input className="date-picker text-input w-input" data-name="Date 3" id="Date-3" maxLength={256} name="Date-3" type="text" /></div>
              <div className="col-third form-block"><label htmlFor="Time-3">Time/s</label><input className="text-input w-input" data-name="Time 3" id="Time-3" maxLength={256} name="Time-3" type="text" /></div>
            </div>
            <div className="form-block w-clearfix"><a className="btn edit-form-element w-button" href="#">Add Date</a></div>
            <div className="col-twothirds form-block"><label htmlFor="Custom-dates">Custom string of dates</label>
              <div className="caption">Type residency or other custom dates</div><textarea className="w-input" data-name="Custom Dates 2" id="Custom-dates-2" maxLength={5000} name="Custom-dates-2" placeholder="Example: Two shows every Friday in July, at 5pm and 8pm" defaultValue={""} /></div>
          </div>
          <div className="form-block w-clearfix"><a className="btn edit-form-element w-button" data-ix="combo-order-show" href="#">Add Venue (Combo order)</a>
            <div className="display-inline-block notice">
              <div><strong>Note</strong>: Combo orders incur a $100 fee per additional venue</div>
            </div>
          </div>
          <div className="notice text-left">
            <div><strong>Note:</strong> We only mention Fri/Sat in spots unless requested. Time is only mentioned in week of/day of cuts unless requested. Make your request in special instructions section below.</div>
          </div>
        </div>
        <div className="form-section">
          <div className="section-title"><img height={30} src="images/angle.png" />
            <div className="form-section-number">
              <div>4</div>
            </div>
            <div className="title-bg">
              <div className="form-section-title">Local copy</div>
            </div>
          </div>
          <div className="form-block"><label htmlFor="Intro-Line">Intro Line</label><textarea className="w-input" data-name="Intro Line" id="Intro-Line-2" maxLength={5000} name="Intro-Line" defaultValue={""} /></div>
          <div className="form-block"><label htmlFor="Outro-Line">Outro Line</label><textarea className="w-input" data-name="Outro Line" id="Outro-Line" maxLength={5000} name="Outro-Line" defaultValue={""} /></div>
          <div className="form-block"><label htmlFor="Produced-By">Produced By</label><textarea className="w-input" data-name="Produced By" id="Produced-By-2" maxLength={5000} name="Produced-By" defaultValue={""} /></div>
          <div className="w-clearfix">
            <div className="col-half">
              <div className="form-block"><label htmlFor="Radio-IDs">Audio ID(s)</label><textarea className="w-input" data-name="Radio IDs" id="Radio-IDs-2" maxLength={5000} name="Radio-IDs" required="required" defaultValue={""} /></div>
              <div className="notice text-left">
                <div><strong>Note:</strong>&nbsp;Please type out exactly how you want your station mentioned. If you include a "." (point) in the station ID "point" will be said</div>
              </div>
              <div className="form-block"><label htmlFor="Promoter-Mention">Audio Version (required)</label>
                <div className="radio-field w-clearfix w-radio"><input defaultChecked="checked" className="display-none w-radio-input" data-name="Radio ID Version" id="Radio ID Version ONLY" name="Radio-ID-Version" required="required" type="radio" defaultValue="Radio ID Version ONLY" /><label className="radio-label w-form-label" htmlFor="Radio ID Version ONLY">Produce Audio ID version only</label></div>
                <div className="radio-field w-clearfix w-radio"><input className="display-none w-radio-input" data-name="Radio ID Version" id="Radio ID + Generic Version" name="Radio-ID-Version" required="required" type="radio" defaultValue="Radio ID + Generic Version" /><label className="radio-label w-form-label" htmlFor="Radio ID + Generic Version">Produce Audio ID + Generic version</label></div>
              </div>
              <div className="form-block"><label htmlFor="Promoter-Mention">Prefix</label>
                <div className="display-block radio-field w-clearfix w-radio"><input className="display-none w-radio-input" data-name="Radio Prefix" id="Welcomes Radio Prefix" name="Radio-Prefix" required="required" type="radio" defaultValue="Welcomes Radio Prefix" /><label className="radio-label w-form-label" htmlFor="Welcomes Radio Prefix">Use "Welcomes"</label></div>
                <div className="display-block radio-field w-clearfix w-radio"><input className="display-none w-radio-input" data-name="Radio Prefix" id="Presents Radio Prefix" name="Radio-Prefix" required="required" type="radio" defaultValue="Presents Radio Prefix" /><label className="radio-label w-form-label" htmlFor="Presents Radio Prefix">Use "Presents"</label></div>
              </div>
            </div>
            <div className="col-half">
              <div className="form-block"><label htmlFor="TV-IDs">Video ID(s)</label><textarea className="w-input" data-name="TV IDs" id="TV-IDs-2" maxLength={5000} name="TV-IDs" required="required" defaultValue={""} /></div>
              <div className="notice text-left">
                <div><strong>Note:</strong>&nbsp;Please type out exactly how you want your station mentioned. If you include a "." (point) in the station ID "point" will be said</div>
              </div>
              <div className="form-block"><label htmlFor="Promoter-Mention">Video Version (required)</label>
                <div className="radio-field w-clearfix w-radio"><input defaultChecked="checked" className="display-none w-radio-input" data-name="TV ID Version" id="TV ID Version ONLY" name="TV-ID-Version" required="required" type="radio" defaultValue="TV ID Version ONLY" /><label className="radio-label w-form-label" htmlFor="TV ID Version ONLY">Produce Video ID version only</label></div>
                <div className="radio-field w-clearfix w-radio"><input className="display-none w-radio-input" data-name="TV ID Version" id="TV ID + Generic Version" name="TV-ID-Version" required="required" type="radio" defaultValue="TV ID + Generic Version" /><label className="radio-label w-form-label" htmlFor="TV ID + Generic Version">Produce Video ID + Generic version</label></div>
              </div>
              <div className="form-block"><label htmlFor="Promoter-Mention">Prefix</label>
                <div className="display-block radio-field w-clearfix w-radio"><input className="display-none w-radio-input" data-name="TV Prefix" id="Welcomes TV prefix" name="TV-Prefix" required="required" type="radio" defaultValue="Welcomes TV prefix" /><label className="radio-label w-form-label" htmlFor="Welcomes TV prefix">Use "Welcomes"</label></div>
                <div className="display-block radio-field w-clearfix w-radio"><input className="display-none w-radio-input" data-name="TV Prefix" id="Presents TV prefix" name="TV-Prefix" required="required" type="radio" defaultValue="Presents TV prefix" /><label className="radio-label w-form-label" htmlFor="Presents TV prefix">Use "Presents"</label></div>
              </div>
            </div>
            <div className="form-block"><label htmlFor="Logos-required">List all logos required (send to AE)</label><input className="text-input w-input" data-name="Logos required" id="Logos-required" maxLength={256} name="Logos-required" type="text" /></div>
          </div>
        </div>
        <div className="form-section w-clearfix">
          <div className="section-title"><img height={30} src="images/angle.png" />
            <div className="form-section-number">
              <div>5</div>
            </div>
            <div className="title-bg">
              <div className="form-section-title">Ticket information</div>
            </div>
          </div>
          <div className="notice">
            <div><strong>Note:</strong>&nbsp;:30, :15, :10 spots have limited time for ticket information</div>
          </div>
          <div className="col-half form-block"><label htmlFor="On-Sale-Day-Time">On Sale Day/Time</label><input className="w-input" data-name="On Sale Day/Time" id="On-Sale-Day-Time" maxLength={256} name="On-Sale-Day-Time" type="text" />
            <div className="caption">Note: <strong>Only</strong>&nbsp;list date if required. Otherwise, only day and time will be mentioned in pre-sale spot.</div>
          </div>
          <div className="col-half form-block"><label htmlFor="name-34">Mention Reserved Seats</label>
            <div className="radio-field w-clearfix w-radio"><input className="display-none w-radio-input" data-name="Reserved Seats" id="Reserved Seats - Yes" name="Reserved-Seats" type="radio" defaultValue="Reserved Seats - Yes" /><label className="radio-label w-form-label" htmlFor="Reserved Seats - Yes">Yes</label></div>
            <div className="radio-field w-clearfix w-radio"><input className="display-none w-radio-input" data-name="Reserved Seats" id="Reserved Seats - No" name="Reserved-Seats" type="radio" defaultValue="Reserved Seats - No" /><label className="radio-label w-form-label" htmlFor="Reserved Seats - No">No</label></div>
          </div>
          <div className="form-block"><label htmlFor="Ticket-Information-Locations">Ticket Information/Locations</label><textarea className="text-input w-input" data-name="Ticket Information/Locations" id="Ticket-Information-Locations" maxLength={5000} name="Ticket-Information-Locations" defaultValue={""} /></div>
        </div>
        <div className="form-section">
          <div className="section-title"><img height={30} src="images/angle.png" />
            <div className="form-section-number">
              <div>6</div>
            </div>
            <div className="title-bg">
              <div className="form-section-title">Special instructions</div>
            </div>
          </div>
          <div className="form-block"><label className="form-subhead" htmlFor="field">Special Instructions</label>
            <div className="caption">Note: &nbsp;Pronunciations are your responsibility! &nbsp;If there is a doubt please provide guidance!</div><textarea className="large text-input w-input" data-name="Special Instructions" id="Special-Instructions" maxLength={5000} name="Special-Instructions" defaultValue={""} /></div>
        </div>
        <div className="form-section">
          <div className="section-title"><img height={30} src="images/angle.png" />
            <div className="form-section-number">
              <div>7</div>
            </div>
            <div className="title-bg">
              <div className="form-section-title">Spot information</div>
            </div>
          </div>
          <div className="notice">
            <div><strong>Note:</strong> &nbsp;:10's and :15's spots may not be available for all tours.</div>
          </div>
          <div className="form-block spot-container w-clearfix">
            <div className="col-half"><label className="form-subhead" htmlFor="name-53">AUDIO</label>
              <div className="form-block spots">
                <div className="spot-block w-clearfix">
                  <div className="inline"><label htmlFor="name-53">Presale</label></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Presale 60" id="Presale" name="Presale-60" type="checkbox" /><label className="checkbox-label sixty w-form-label" htmlFor="Presale" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Presale 30" id="Presale-2" name="Presale-30" type="checkbox" /><label className="checkbox-label thirty w-form-label" htmlFor="Presale-2" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Presale 15" id="Presale-3" name="Presale-15" type="checkbox" /><label className="checkbox-label fifteen w-form-label" htmlFor="Presale-3" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Presale 10" id="Presale-7" name="Presale-10" type="checkbox" /><label className="checkbox-label ten w-form-label" htmlFor="Presale-7" /></div>
                </div>
              </div>
              <div className="form-block spots">
                <div className="spot-block w-clearfix">
                  <div className="inline"><label htmlFor="name-53">On Sale Now</label></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="On Sale Now 60" id="On-Sale-Now" name="On-Sale-Now-60" type="checkbox" /><label className="checkbox-label sixty w-form-label" htmlFor="On-Sale-Now" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="On Sale Now 30" id="On-Sale-Now-2" name="On-Sale-Now-30" type="checkbox" /><label className="checkbox-label thirty w-form-label" htmlFor="On-Sale-Now-2" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="On Sale Now 15" id="On-Sale-Now-3" name="On-Sale-Now-15" type="checkbox" /><label className="checkbox-label fifteen w-form-label" htmlFor="On-Sale-Now-3" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="On Sale Now 10" id="On-Sale-Now-8" name="On-Sale-Now-10" type="checkbox" /><label className="checkbox-label ten w-form-label" htmlFor="On-Sale-Now-8" /></div>
                </div>
              </div>
              <div className="form-block spots">
                <div className="spot-block w-clearfix">
                  <div className="inline"><label htmlFor="name-53">Week Of</label></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Week Of 60" id="Week-Of" name="Week-Of-60" type="checkbox" /><label className="checkbox-label sixty w-form-label" htmlFor="Week-Of" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Week Of 30" id="Week-Of-2" name="Week-Of-30" type="checkbox" /><label className="checkbox-label thirty w-form-label" htmlFor="Week-Of-2" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Week Of 15" id="Week-Of-3" name="Week-Of-15" type="checkbox" /><label className="checkbox-label fifteen w-form-label" htmlFor="Week-Of-3" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Week Of 10" id="Week-Of-7" name="Week-Of-10" type="checkbox" /><label className="checkbox-label ten w-form-label" htmlFor="Week-Of-7" /></div>
                </div>
              </div>
              <div className="form-block spots">
                <div className="spot-block w-clearfix">
                  <div className="inline"><label htmlFor="name-53">Day Prior</label></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Day Prior 60" id="Day-Prior" name="Day-Prior-60" type="checkbox" /><label className="checkbox-label sixty w-form-label" htmlFor="Day-Prior" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Day Prior 30" id="Day-Prior-2" name="Day-Prior-30" type="checkbox" /><label className="checkbox-label thirty w-form-label" htmlFor="Day-Prior-2" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Day Prior 15" id="Day-Prior-3" name="Day-Prior-15" type="checkbox" /><label className="checkbox-label fifteen w-form-label" htmlFor="Day-Prior-3" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Day Prior 10" id="Day-Prior-7" name="Day-Prior-10" type="checkbox" /><label className="checkbox-label ten w-form-label" htmlFor="Day-Prior-7" /></div>
                </div>
              </div>
              <div className="form-block spots">
                <div className="spot-block w-clearfix">
                  <div className="inline"><label htmlFor="name-53">Day Of</label></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Day Of 60" id="Day-Of" name="Day-Of-60" type="checkbox" /><label className="checkbox-label sixty w-form-label" htmlFor="Day-Of" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Day Of 30" id="Day-Of-2" name="Day-Of-30" type="checkbox" /><label className="checkbox-label thirty w-form-label" htmlFor="Day-Of-2" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Day Of 15" id="Day-Of-3" name="Day-Of-15" type="checkbox" /><label className="checkbox-label fifteen w-form-label" htmlFor="Day-Of-3" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Day Of 10" id="Day-Of-7" name="Day-Of-10" type="checkbox" /><label className="checkbox-label ten w-form-label" htmlFor="Day-Of-7" /></div>
                </div>
              </div>
              <div className="form-block spots">
                <div className="spot-block w-clearfix">
                  <div className="inline"><label htmlFor="name-53">Now Thru</label></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Now Thru 60" id="Now-Thru" name="Now-Thru-60" type="checkbox" /><label className="checkbox-label sixty w-form-label" htmlFor="Now-Thru" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Now Thru 30" id="Now-Thru-2" name="Now-Thru-30" type="checkbox" /><label className="checkbox-label thirty w-form-label" htmlFor="Now-Thru-2" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Now Thru 15" id="Now-Thru-3" name="Now-Thru-15" type="checkbox" /><label className="checkbox-label fifteen w-form-label" htmlFor="Now-Thru-3" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Now Thru 10" id="Now-Thru-7" name="Now-Thru-10" type="checkbox" /><label className="checkbox-label ten w-form-label" htmlFor="Now-Thru-7" /></div>
                </div>
              </div>
            </div>
            <div className="col-half"><label className="form-subhead" htmlFor="name-53">VIDEO</label>
              <div className="form-block spots">
                <div className="spot-block w-clearfix">
                  <div className="inline"><label htmlFor="name-53">Presale</label></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Presale 30" id="Presale-4" name="Presale-30" type="checkbox" /><label className="checkbox-label thirty w-form-label" htmlFor="Presale-4" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Presale 15" id="Presale-5" name="Presale-15" type="checkbox" /><label className="checkbox-label fifteen w-form-label" htmlFor="Presale-5" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Presale 10" id="Presale-6" name="Presale-10" type="checkbox" /><label className="checkbox-label ten w-form-label" htmlFor="Presale-6" /></div>
                </div>
              </div>
              <div className="form-block spots">
                <div className="spot-block w-clearfix">
                  <div className="inline"><label htmlFor="name-53">On Sale Now</label></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="On Sale Now 30" id="On-Sale-Now-4" name="On-Sale-Now-30" type="checkbox" /><label className="checkbox-label thirty w-form-label" htmlFor="On-Sale-Now-4" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="On Sale Now 15" id="On-Sale-Now-5" name="On-Sale-Now-15" type="checkbox" /><label className="checkbox-label fifteen w-form-label" htmlFor="On-Sale-Now-5" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="On Sale Now 10" id="On-Sale-Now-6" name="On-Sale-Now-10" type="checkbox" /><label className="checkbox-label ten w-form-label" htmlFor="On-Sale-Now-6" /></div>
                </div>
              </div>
              <div className="form-block spots">
                <div className="spot-block w-clearfix">
                  <div className="inline"><label htmlFor="name-53">Week Of</label></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Week Of 30" id="Week-Of-4" name="Week-Of-30" type="checkbox" /><label className="checkbox-label thirty w-form-label" htmlFor="Week-Of-4" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Week Of 15" id="Week-Of-5" name="Week-Of-15" type="checkbox" /><label className="checkbox-label fifteen w-form-label" htmlFor="Week-Of-5" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Week Of 10" id="Week-Of-6" name="Week-Of-10" type="checkbox" /><label className="checkbox-label ten w-form-label" htmlFor="Week-Of-6" /></div>
                </div>
              </div>
              <div className="form-block spots">
                <div className="spot-block w-clearfix">
                  <div className="inline"><label htmlFor="name-53">Day Prior</label></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Day Prior 30" id="Day-Prior-4" name="Day-Prior-30" type="checkbox" /><label className="checkbox-label thirty w-form-label" htmlFor="Day-Prior-4" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Day Prior 15" id="Day-Prior-5" name="Day-Prior-15" type="checkbox" /><label className="checkbox-label fifteen w-form-label" htmlFor="Day-Prior-5" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Day Prior 10" id="Day-Prior-6" name="Day-Prior-10" type="checkbox" /><label className="checkbox-label ten w-form-label" htmlFor="Day-Prior-6" /></div>
                </div>
              </div>
              <div className="form-block spots">
                <div className="spot-block w-clearfix">
                  <div className="inline"><label htmlFor="name-53">Day Of</label></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Day Of 30" id="Day-Of-4" name="Day-Of-30" type="checkbox" /><label className="checkbox-label thirty w-form-label" htmlFor="Day-Of-4" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Day Of 15" id="Day-Of-5" name="Day-Of-15" type="checkbox" /><label className="checkbox-label fifteen w-form-label" htmlFor="Day-Of-5" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Day Of 10" id="Day-Of-6" name="Day-Of-10" type="checkbox" /><label className="checkbox-label ten w-form-label" htmlFor="Day-Of-6" /></div>
                </div>
              </div>
              <div className="form-block spots">
                <div className="spot-block w-clearfix">
                  <div className="inline"><label htmlFor="name-53">Now Thru</label></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Now Thru 30" id="Now-Thru-4" name="Now-Thru-30" type="checkbox" /><label className="checkbox-label thirty w-form-label" htmlFor="Now-Thru-4" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Now Thru 15" id="Now-Thru-5" name="Now-Thru-15" type="checkbox" /><label className="checkbox-label fifteen w-form-label" htmlFor="Now-Thru-5" /></div>
                  <div className="checkbox-field spot w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Now Thru 10" id="Now-Thru-6" name="Now-Thru-10" type="checkbox" /><label className="checkbox-label ten w-form-label" htmlFor="Now-Thru-6" /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-block"><label htmlFor="To-ship-all-Radio-to-Promoter-via-PDQ-enter-email-address-here-3">Custom ISCI code if required</label><input className="text-input w-input" data-name="To Ship All Radio To Promoter Via Pdq Enter Email Address Here 3" id="To-ship-all-Radio-to-Promoter-via-PDQ-enter-email-address-here-3" maxLength={256} name="To-ship-all-Radio-to-Promoter-via-PDQ-enter-email-address-here-3" type="email" /></div>
        </div>
        <div className="form-section w-clearfix">
          <div className="section-title"><img height={30} src="images/angle.png" />
            <div className="form-section-number">
              <div>8</div>
            </div>
            <div className="title-bg">
              <div className="form-section-title">Shipping</div>
            </div>
          </div>
          <div className="notice">
            <div>All cuts ordered will be delivered via your chosen delivery method unless otherwise stated in special instructions.</div>
          </div>
          <div className="form-block"><label className="form-subhead" htmlFor="Sponsor-Mention">AUDIO Delivery</label></div>
          <div className="col-third form-block">
            <p>All Audio sent PDQ for client to distribution</p>
          </div>
          <div className="col-twothirds form-block"><label htmlFor="Promoter-Email-27">Promoter Email</label><textarea className="w-input" data-name="Promoter Email 12" id="Promoter-Email-27" maxLength={5000} name="Promoter-Email-12" defaultValue={""} /></div>
          <div className="form-block"><label className="form-subhead" htmlFor="Sponsor-Mention">Video Delivery Options</label></div>
          <div className="w-clearfix">
            <div className="col-third form-block">
              <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Shipping - TV Comcast" id="Shipping---TV-Comcast" name="Shipping---TV-Comcast" type="checkbox" /><label className="checkbox-label w-form-label" data-ix="show-hide-block-tv-comcast-hdsd-options" htmlFor="Shipping---TV-Comcast">Comcast Ad Delivery</label></div>
            </div>
          </div>
          <div className="comcast-hdsd-options w-clearfix" data-ix="initial-state-display-none">
            <div className="col-third">
              <div className="form-block">
                <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Shipping - TV HD" id="Shipping---TV-HD" name="Shipping---TV-HD" type="checkbox" /><label className="checkbox-label w-form-label" data-ix="show-hide-block-tv-hd" htmlFor="Shipping---TV-HD">HD Delivery</label></div>
              </div>
            </div>
            <div className="col-twothirds">
              <div className="form-block">
                <div className="show-hide-block-tv-hd" data-ix="show-hide-form-block-initial-state"><label htmlFor="Promoter-Email-14">Station</label><input className="text-input w-input" data-name="Promoter Email 14" id="Promoter-Email-14" maxLength={256} name="Promoter-Email-14" type="text" />
                  <div className="caption">Please enter call letters for broadcast stations and SYS Code for cable stations.</div>
                  <div className="checkbox-field display-block w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Tv Order 14" id="TV-Order-14" name="TV-Order-14" type="checkbox" /><label className="checkbox-label w-form-label" htmlFor="TV-Order-14">Standard overnight : &nbsp;$85 per cut per station</label></div>
                  <div className="checkbox-field display-block w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Tv Order 13" id="TV-Order-13" name="TV-Order-13" type="checkbox" /><label className="checkbox-label w-form-label" htmlFor="TV-Order-13">1 hour $150 per cut per station</label></div>
                  <div className="checkbox-field display-block w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Tv Order 18" id="TV-Order-18" name="TV-Order-18" type="checkbox" /><label className="checkbox-label w-form-label" htmlFor="TV-Order-18">Closed Caption $150 per cut</label></div>
                  <div className="separator-line" />
                </div>
              </div>
            </div>
          </div>
          <div className="comcast-hdsd-options w-clearfix" data-ix="initial-state-display-none">
            <div className="col-third">
              <div className="form-block">
                <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Shipping - TV SD" id="Shipping---TV-SD" name="Shipping---TV-SD" type="checkbox" /><label className="checkbox-label w-form-label" data-ix="show-hide-block-tv-sd" htmlFor="Shipping---TV-SD">SD Delivery</label></div>
              </div>
            </div>
            <div className="col-twothirds">
              <div className="form-block">
                <div className="show-hide-block-tv-sd" data-ix="show-hide-form-block-initial-state"><label htmlFor="Promoter-Email-19">Station</label><input className="text-input w-input" data-name="Promoter Email 19" id="Promoter-Email-19" maxLength={256} name="Promoter-Email-19" type="text" />
                  <div className="caption">Please enter call letters for broadcast stations and SYS Code for cable stations.</div>
                  <div className="checkbox-field display-block w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Tv Order 16" id="TV-Order-16" name="TV-Order-16" type="checkbox" /><label className="checkbox-label w-form-label" htmlFor="TV-Order-16">Standard: &nbsp;First 2 Cuts $85 / Any additional cut $20 per cut per station</label></div>
                  <div className="checkbox-field display-block w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Tv Order 17" id="TV-Order-17" name="TV-Order-17" type="checkbox" /><label className="checkbox-label w-form-label" htmlFor="TV-Order-17">1 Hour $150 1st cut $85 / Any additional per cut per station after</label></div>
                  <div className="checkbox-field display-block w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Tv Order 19" id="TV-Order-19" name="TV-Order-19" type="checkbox" /><label className="checkbox-label w-form-label" htmlFor="TV-Order-19">Closed Caption $150 per cut</label></div>
                  <div className="separator-line" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-clearfix">
            <div className="col-third">
              <div className="form-block">
                <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Shipping - TV Broadcast Link" id="Shipping---TV-Broadcast-Link" name="Shipping---TV-Broadcast-Link" type="checkbox" /><label className="checkbox-label w-form-label" data-ix="show-hide-block-tv-broadcastlink-2" htmlFor="Shipping---TV-Broadcast-Link">Broadcast Link</label></div>
              </div>
            </div>
            <div className="col-twothirds">
              <div className="form-block">
                <div className="show-hide-block-tv-broadcastlink" data-ix="show-hide-form-block-initial-state">
                  <p>Cost $250 for first 2 cuts / $75 per cut after</p><label htmlFor="Promoter-Email-20">Email address to receive link</label><input className="text-input w-input" data-name="Promoter Email 20" id="Promoter-Email-20" maxLength={256} name="Promoter-Email-20" type="email" />
                  <div className="caption">BYP Broadcast link file specs .mov 1920 x 1080 avid DNX HD. If another file type is needed other than above please enter below.</div><label htmlFor="Promoter-Email-21">Custom File Specification</label><input className="text-input w-input" data-name="Promoter Email 21" id="Promoter-Email-21" maxLength={256} name="Promoter-Email-21" type="email" />
                  <div className="separator-line" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-clearfix">
            <div className="col-third">
              <div className="form-block">
                <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Shipping - TV Web Dub" id="Shipping---TV-Web-Dub" name="Shipping---TV-Web-Dub" type="checkbox" /><label className="checkbox-label w-form-label" data-ix="show-hide-block-tv-webdub" htmlFor="Shipping---TV-Web-Dub">Web Dub</label></div>
              </div>
            </div>
            <div className="col-twothirds">
              <div className="form-block">
                <div className="show-hide-block-tv-webdub" data-ix="show-hide-form-block-initial-state">
                  <p>Cost $125 for first cut / $75 per cut after</p><label htmlFor="Promoter-Email-22">Email address to receive link</label><input className="text-input w-input" data-name="Promoter Email 22" id="Promoter-Email-22" maxLength={256} name="Promoter-Email-22" type="email" />
                  <div className="caption">‘BYP web dub file specs .mp4 1080 h.264 rate 4–5mbps. If another file type is needed other than above please enter below.</div><label htmlFor="Promoter-Email-23">Custom File Specification</label><input className="text-input w-input" data-name="Promoter Email 23" id="Promoter-Email-23" maxLength={256} name="Promoter-Email-23" type="email" />
                  <div className="separator-line" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-clearfix">
            <div className="col-third">
              <div className="form-block">
                <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Shipping - TV Venue Files" id="Shipping---TV-Venue-Files" name="Shipping---TV-Venue-Files" type="checkbox" /><label className="checkbox-label w-form-label" data-ix="show-hide-block-tv-venuefiles" htmlFor="Shipping---TV-Venue-Files">Venue Files</label></div>
              </div>
            </div>
            <div className="col-twothirds">
              <div className="form-block">
                <div className="show-hide-block-tv-venuefiles" data-ix="show-hide-form-block-initial-state">
                  <p>Cost $150 for first cut / $75 per cut after</p><label htmlFor="Promoter-Email-24">Email address to receive link for broadcast distribution</label><input className="text-input w-input" data-name="Promoter Email 24" id="Promoter-Email-24" maxLength={256} name="Promoter-Email-24" type="email" />
                  <div className="caption">BYP venue file specs .mov 1920 x 1080 avid DNX HD. If another file type is needed other than above please enter below.</div><label htmlFor="Promoter-Email-25">Custom File Specification</label><input className="text-input w-input" data-name="Promoter Email 25" id="Promoter-Email-25" maxLength={256} name="Promoter-Email-25" type="email" />
                  <div className="separator-line" />
                </div>
              </div>
            </div>
          </div>
          <div className="w-clearfix">
            <div className="col-third">
              <div className="form-block">
                <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Shipping - TV Hard Dub" id="Shipping---TV-Hard-Dub" name="Shipping---TV-Hard-Dub" type="checkbox" /><label className="checkbox-label w-form-label" data-ix="show-hide-block-tv-harddub" htmlFor="Shipping---TV-Hard-Dub">Hard Dub</label></div>
              </div>
            </div>
            <div className="col-twothirds">
              <div className="form-block">
                <div className="show-hide-block-tv-harddub" data-ix="show-hide-form-block-initial-state"><label htmlFor="field-5">Hard Dub Shipping/Format Info</label><textarea className="large w-input" data-name="Field 5" id="field-5" maxLength={5000} name="field-5" placeholder="List Name, Company, Address, Phone, How many copies  you require and dub type(s): DVD, Blu Ray, Digi Beta, Beta" defaultValue={""} />
                  <div className="separator-line" />
                </div>
              </div>
            </div>
          </div>
          <div className="form-block"><label htmlFor="Shipping-Special-Instructions">Special Instructions for Shipping</label><textarea className="large w-input" data-name="Shipping Special Instructions" id="Shipping-Special-Instructions" maxLength={5000} name="Shipping-Special-Instructions" placeholder="Special instructions for shipping" defaultValue={""} /></div>
          <div className="notice">
            <div>All cuts ordered will be delivered via your chosen delivery method unless otherwise stated in special instructions.</div>
          </div>
          <div className="notice special">
            <div>For more information call us at 281-240-7400.</div>
          </div>
        </div>
        <div className="form-section original-order special">
          <div className="section-title"><img height={30} src="images/angle.png" />
            <div className="form-section-number">
              <div>O</div>
            </div>
            <div className="original-order title-bg w-clearfix">
              <div className="form-section-title">Original Order</div>
              <div className="float-right form-section-title">11/03/2017</div>
            </div>
          </div>
          <div className="product-item-section revision">
            <div className="category-title form-product-item">
              <div className="text-block">Products ORDERED</div>
            </div>
            <div className="form-product-item w-clearfix">
              <div className="col-twothirds form-block">
                <div>Add local info to Admat (First Draft)</div>
              </div>
              <div className="form-price-wrapper revision">
                <div>$50</div>
              </div>
            </div>
            <div className="form-product-item w-clearfix">
              <div className="col-twothirds form-block">
                <div>Quat. Page Tabloid (4.8125" x 6.25")</div>
              </div>
              <div className="form-price-wrapper revision">
                <div>$60</div>
              </div>
            </div>
            <div className="form-product-item w-clearfix">
              <div className="col-twothirds form-block">
                <div>Static Web Banner Package</div>
              </div>
              <div className="form-price-wrapper revision">
                <div>$135</div>
              </div>
            </div>
            <div className="form-product-item w-clearfix">
              <div className="col-twothirds form-block">
                <div>Billboard 14' x 40'</div>
              </div>
              <div className="form-price-wrapper revision">
                <div>$60</div>
              </div>
            </div>
            <div className="form-product-item order-total original-order w-clearfix">
              <div className="form-price-wrapper revision total-label">
                <div>$305</div>
              </div>
              <div className="form-price-wrapper revision total-label">
                <div>TOTAL</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-section revision special">
          <div className="section-title"><img height={30} src="images/angle.png" />
            <div className="form-section-number">
              <div>R1</div>
            </div>
            <div className="revision title-bg w-clearfix">
              <div className="form-section-title">Revision #1</div>
              <div className="float-right form-section-title">11/04/2017</div>
            </div>
          </div>
          <div className="product-item-section revision">
            <div className="category-title form-product-item">
              <div className="text-block">Products Added</div>
            </div>
            <div className="form-product-item w-clearfix">
              <div className="col-twothirds form-block">
                <div>Add local info to Admat (First Draft)</div>
              </div>
              <div className="form-price-wrapper revision">
                <div>$50</div>
              </div>
            </div>
            <div className="form-product-item w-clearfix">
              <div className="col-twothirds form-block">
                <div>Quat. Page Tabloid (4.8125" x 6.25")</div>
              </div>
              <div className="form-price-wrapper revision">
                <div>$60</div>
              </div>
            </div>
            <div className="form-product-item w-clearfix">
              <div className="col-twothirds form-block">
                <div>Static Web Banner Package</div>
              </div>
              <div className="form-price-wrapper revision">
                <div>$135</div>
              </div>
            </div>
            <div className="form-product-item w-clearfix">
              <div className="col-twothirds form-block">
                <div>Billboard 14' x 40'</div>
              </div>
              <div className="form-price-wrapper revision">
                <div>$60</div>
              </div>
            </div>
            <div className="form-product-item order-total w-clearfix">
              <div className="form-price-wrapper revision total-label">
                <div>$305</div>
              </div>
              <div className="form-price-wrapper revision total-label">
                <div>TOTAL</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-section revision special">
          <div className="section-title"><img height={30} src="images/angle.png" />
            <div className="form-section-number">
              <div>R2</div>
            </div>
            <div className="revision title-bg w-clearfix">
              <div className="form-section-title">Revision #2</div>
              <div className="float-right form-section-title">11/11/2017</div>
            </div>
          </div>
          <div className="product-item-section revision">
            <div className="category-title form-product-item">
              <div className="text-block">Products Added</div>
            </div>
            <div className="form-product-item w-clearfix">
              <div className="col-twothirds form-block">
                <div>Add local info to Admat (First Draft)</div>
              </div>
              <div className="form-price-wrapper revision">
                <div>$50</div>
              </div>
            </div>
            <div className="form-product-item w-clearfix">
              <div className="col-twothirds form-block">
                <div>Quat. Page Tabloid (4.8125" x 6.25")</div>
              </div>
              <div className="form-price-wrapper revision">
                <div>$60</div>
              </div>
            </div>
            <div className="form-product-item w-clearfix">
              <div className="col-twothirds form-block">
                <div>Static Web Banner Package</div>
              </div>
              <div className="form-price-wrapper revision">
                <div>$135</div>
              </div>
            </div>
            <div className="category-title form-product-item">
              <div>Revisions</div>
            </div>
            <div className="form-product-item w-clearfix">
              <div className="col-twothirds form-block">
                <div><strong>Show Information &gt; Primary Market &gt; Headliner - changed to:</strong> &nbsp;&nbsp;<br />Alice In Chains</div>
              </div>
              <div className="form-price-wrapper revision">
                <div>$25</div>
              </div>
            </div>
            <div className="form-product-item w-clearfix">
              <div className="col-twothirds form-block">
                <div><strong>Shipping &gt; Additional Instructions - changed to:</strong><br />I need it shipped to Bob over at Toyota Stadium, email address is bob@toyotamusic.com</div>
              </div>
              <div className="form-price-wrapper revision">
                <div>No charge</div>
              </div>
            </div>
            <div className="form-product-item order-total w-clearfix">
              <div className="form-price-wrapper revision total-label">
                <div>$270</div>
              </div>
              <div className="form-price-wrapper revision total-label">
                <div>TOTAL</div>
              </div>
            </div>
          </div>
        </div>
        <div className="form-section revision special">
          <div className="section-title"><img height={30} src="images/angle.png" />
            <div className="form-section-number">
              <div>R3</div>
            </div>
            <div className="current revision title-bg w-clearfix">
              <div className="form-section-title">Current Revision</div>
              <div className="float-right form-section-title">11/14/2017</div>
            </div>
          </div>
          <div className="product-item-section revision">
            <div className="category-title form-product-item">
              <div className="text-block">Products Added</div>
            </div>
            <div className="form-product-item w-clearfix">
              <div className="col-twothirds form-block">
                <div>Add local info to Admat (First Draft)</div>
              </div>
              <div className="form-price-wrapper revision">
                <div>$50</div>
              </div>
            </div>
            <div className="form-product-item w-clearfix">
              <div className="col-twothirds form-block">
                <div>Quat. Page Tabloid (4.8125" x 6.25")</div>
              </div>
              <div className="form-price-wrapper revision">
                <div>$60</div>
              </div>
            </div>
            <div className="form-product-item w-clearfix">
              <div className="col-twothirds form-block">
                <div>Static Web Banner Package</div>
              </div>
              <div className="form-price-wrapper revision">
                <div>$135</div>
              </div>
            </div>
            <div className="category-title form-product-item">
              <div>Revisions</div>
            </div>
            <div className="form-product-item w-clearfix">
              <div className="col-twothirds form-block">
                <div><strong>Show Information &gt; Primary Market &gt; Headliner - changed to:</strong> &nbsp;&nbsp;<br />Alice In Chains</div>
              </div>
              <div className="form-price-wrapper revision">
                <div>$25</div>
              </div>
            </div>
            <div className="form-product-item w-clearfix">
              <div className="col-twothirds form-block">
                <div><strong>Shipping &gt; Additional Instructions - changed to:</strong><br />I need it shipped to Bob over at Toyota Stadium, email address is bob@toyotamusic.com</div>
              </div>
              <div className="form-price-wrapper revision">
                <div>No charge</div>
              </div>
            </div>
            <div className="form-product-item order-total w-clearfix">
              <div className="form-price-wrapper revision total-label">
                <div>$270</div>
              </div>
              <div className="form-price-wrapper revision total-label">
                <div>TOTAL</div>
              </div>
            </div>
          </div>
        </div>
        <div className="fixed-bar form-button-wrapper no-print">
          <div className="running-total-wrapper">
            <h4>Current Order/Revision Total: $125.00</h4>
          </div><a className="btn btn-disabled btn-neutral w-button" href="#">Save draft</a><a className="btn btn-neutral w-button" href="#">Save draft</a><input className="btn btn-warning w-button" type="submit" defaultValue="Submit Revision" /><input className="btn w-button" type="submit" defaultValue="Submit Order" /><input className="btn w-button" type="submit" defaultValue="Preview Order" /></div>
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

export default AudioVideoOrder
