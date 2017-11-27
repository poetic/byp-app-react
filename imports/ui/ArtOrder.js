import React from 'react';
import Header from './Header';

const ArtOrder = () => (
  <div>
    <Header title={'art order form'}/>
    <section className="no-print section">
      <div className="form-wrapper w-form">
        <form data-name="Order Form - Print" id="Order-Form---Print" name="wf-form-Order-Form---Print">
          <div className="form-section w-clearfix">
            <div className="section-title"><img height={30} src="images/angle.png" />
              <div className="form-section-number">
                <div>1</div>
              </div>
              <div className="title-bg">
                <div className="form-section-title">Due Date</div>
              </div>
            </div>
            <div className="col-half form-block"><label htmlFor="Needed-by">Needed by:</label><input className="date-picker text-input w-input" data-name="Needed by" id="Needed-by" maxLength={256} name="Needed-by" type="text" /></div>
            <div className="col-half form-block"><label htmlFor="name-53">Order Spot(s)</label>
              <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Radio Order 2" id="Radio-Order-2" name="Radio-Order-2" type="checkbox" /><label className="checkbox-label w-form-label warning" htmlFor="Radio-Order-2">Make this a rush order</label></div>
            </div>
            <div className="form-block">
              <p><strong>1hr turnaround for Internet Rush orders from 9am – 5pm CST</strong></p>
              <p>Standard orders begin processing at 1:30pm CST, with a 5pm cutoff.&nbsp;$35 service charge added for rush orders.</p>
              <p><strong>Orders received after 5pm will be marked as Rush when needed for the same day.</strong></p>
            </div>
          </div>
          <div className="form-section w-clearfix">
            <div className="section-title"><img height={30} src="images/angle.png" />
              <div className="form-section-number">
                <div>2</div>
              </div>
              <div className="title-bg">
                <div className="form-section-title">Client information</div>
              </div>
            </div>
            <div className="col-half form-block"><label htmlFor="Promoter-Contact-4">Company *</label><input className="text-input w-input" data-name="Promoter Contact 4" id="Promoter-Contact-4" maxLength={256} name="Promoter-Contact-4" type="text" /></div>
            <div className="col-half form-block"><label htmlFor="Promoter-Contact-5">Contact*</label><input className="text-input w-input" data-name="Promoter Contact 5" id="Promoter-Contact-5" maxLength={256} name="Promoter-Contact-5" type="text" /></div>
            <div className="col-half w-clearfix">
              <div className="col-twothirds form-block"><label htmlFor="Phone-No-5">Phone *</label><input className="text-input w-input" data-name="Phone No." id="Phone-No-5" maxLength={256} name="Phone-No" type="text" /></div>
              <div className="col-third form-block"><label htmlFor="Ext-4">Ext.</label><input className="text-input w-input" data-name="Ext 4" id="Ext-4" maxLength={256} name="Ext-4" type="text" /></div>
            </div>
            <div className="col-half form-block"><label htmlFor="Alt.-Phone-No-3">Fax</label><input className="text-input w-input" data-name="Alt. Phone No 3" id="Alt.-Phone-No-3" maxLength={256} name="Alt.-Phone-No-3" type="text" /></div>
            <div className="col-half form-block"><label htmlFor="Promoter-Email-3">Email</label><input className="text-input w-input" data-name="Promoter Email 3" id="Promoter-Email-3" maxLength={256} name="Promoter-Email-3" type="email" /></div>
            <div className="col-half form-block"><label htmlFor="Promoter-Company-3">Alt. Email</label><input className="text-input w-input" data-name="Promoter Company 3" id="Promoter-Company-3" maxLength={256} name="Promoter-Company-3" type="email" /></div>
            <div className="form-block"><label htmlFor="Ticket-Information-Locations-4">Address *</label><textarea className="text-input w-input" data-name="Ticket Information Locations 4" id="Ticket-Information-Locations-4" maxLength={5000} name="Ticket-Information-Locations-4" defaultValue={""} /></div>
            <div className="col-third form-block"><label htmlFor="Call-to-play-radio-13">City *</label><input className="text-input w-input" data-name="Call To Play Radio 13" id="Call-to-play-radio-13" maxLength={256} name="Call-to-play-radio-13" type="text" /></div>
            <div className="col-third form-block"><label htmlFor="State-3">State *</label><select className="select-override w-select" data-name="State 3" id="State-3" name="State-3" required="required"><option value>Select State…</option>
                <option value="AL">AL - Alabama</option>
                <option value="AK">AK - Alaska</option>
                <option value="AZ">AZ - Arizona</option>
                <option value="ETC">The other states</option></select></div>
            <div className="col-third form-block"><label htmlFor="Call-to-play-radio-14">Zip *</label><input className="text-input w-input" data-name="Call To Play Radio 14" id="Call-to-play-radio-14" maxLength={256} name="Call-to-play-radio-14" type="text" /></div>
          </div>
          <div className="form-section w-clearfix">
            <div className="section-title"><img height={30} src="images/angle.png" />
              <div className="form-section-number">
                <div>3</div>
              </div>
              <div className="title-bg">
                <div className="form-section-title">Delivery</div>
              </div>
            </div>
            <div className="col-half form-block"><label htmlFor="Promoter-Email-2">Email</label><input className="text-input w-input" data-name="Promoter Email 2" id="Promoter-Email-2" maxLength={256} name="Promoter-Email-2" type="email" /></div>
            <div className="col-half form-block"><label htmlFor="Promoter-Company-2">Alt. Email</label><input className="text-input w-input" data-name="Promoter Company 2" id="Promoter-Company-2" maxLength={256} name="Promoter-Company-2" type="email" /></div>
            <div className="form-block"><label className="form-subhead" htmlFor="Promoter-Contact">Additional Instructions</label>
              <div className="caption">Specify if needing any items BW instead of color</div>
            </div>
            <div className="form-block"><textarea className="text-input w-input" data-name="Ticket Information Locations 5" id="Ticket-Information-Locations-5" maxLength={5000} name="Ticket-Information-Locations-5" defaultValue={""} /></div>
          </div>
          <div className="form-section w-clearfix">
            <div className="section-title"><img height={30} src="images/angle.png" />
              <div className="form-section-number">
                <div>4</div>
              </div>
              <div className="title-bg">
                <div className="form-section-title">Market Information</div>
              </div>
            </div>
            <p className="form-block notice"><strong>List ALL markets to avoid using unapproved materials.</strong></p>
            <div className="form-block"><label className="form-subhead" htmlFor="Promoter-Contact">Primary Market</label><label htmlFor="Promoter-Contact">Headliner *</label><input className="text-input w-input" data-name="Promoter Contact" id="Promoter-Contact" maxLength={256} name="Promoter-Contact" type="text" /></div>
            <div className="form-block"><label htmlFor="Ticket-Information-Locations-2">Special Guest/s</label><textarea className="text-input w-input" data-name="Ticket Information Locations 2" id="Ticket-Information-Locations-2" maxLength={5000} name="Ticket-Information-Locations-2" defaultValue={""} /></div>
            <div className="col-third form-block"><label htmlFor="Call-to-play-radio-2">Market (City) *</label><input className="text-input w-input" data-name="Call To Play Radio 2" id="Call-to-play-radio-2" maxLength={256} name="Call-to-play-radio-2" type="text" /></div>
            <div className="col-third form-block"><label htmlFor="Call-to-play-radio-4">Venue</label><input className="text-input w-input" data-name="Call To Play Radio 4" id="Call-to-play-radio-4" maxLength={256} name="Call-to-play-radio-4" type="text" /></div>
            <div className="col-third form-block"><label htmlFor="Call-to-play-radio-3">Show Date/s *</label><input className="text-input w-input" data-name="Call To Play Radio 3" id="Call-to-play-radio-3" maxLength={256} name="Call-to-play-radio-3" type="text" /></div>
            <div className="repeatable-form-block w-clearfix">
              <div className="form-block w-clearfix"><label className="form-subhead" htmlFor="Promoter-Contact">Second Market</label><a className="text-link" href="#">Remove market</a></div>
              <div className="col-third form-block"><label htmlFor="Call-to-play-radio-5">Market (City)</label><input className="text-input w-input" data-name="Call To Play Radio 5" id="Call-to-play-radio-5" maxLength={256} name="Call-to-play-radio-5" type="text" /></div>
              <div className="col-third form-block"><label htmlFor="Call-to-play-radio-6">Venue</label><input className="text-input w-input" data-name="Call To Play Radio 6" id="Call-to-play-radio-6" maxLength={256} name="Call-to-play-radio-6" type="text" /></div>
              <div className="col-third form-block"><label htmlFor="Call-to-play-radio-7">Show Date/s&nbsp;</label><input className="text-input w-input" data-name="Call To Play Radio 7" id="Call-to-play-radio-7" maxLength={256} name="Call-to-play-radio-7" type="text" /></div>
            </div>
            <div className="form-block w-clearfix"><a className="btn edit-form-element w-button" href="#">Add Market</a></div>
            <div className="form-block"><label className="form-subhead" htmlFor="Promoter-Contact">Local Information</label></div>
            <div className="form-block">
              <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Radio Order 54" id="Radio-Order-54" name="Radio-Order-54" type="checkbox" /><label className="checkbox-label w-form-label" htmlFor="Radio-Order-54">Add local info to Admat (First Draft) $50. Additional changes $25.</label></div>
            </div>
            <div className="form-block"><label htmlFor="Ticket-Information-Locations-7">Local Info</label><textarea className="text-input w-input" data-name="Ticket Information Locations 7" id="Ticket-Information-Locations-7" maxLength={5000} name="Ticket-Information-Locations-7" defaultValue={""} /></div>
          </div>
          <div className="form-section">
            <div className="section-title"><img height={30} src="images/angle.png" />
              <div className="form-section-number">
                <div>5</div>
              </div>
              <div className="title-bg">
                <div className="form-section-title">Art Specs</div>
              </div>
            </div>
            <div className="product-item-section">
              <div className="form-block"><label className="form-subhead" htmlFor="Sponsor-Mention">SINGLE MARKET LICENSE PACKAGES</label>
                <div className="caption">North American Licensing Agreement: &nbsp;Single License art orders are approved for use in North America only within the market purchased from Bill Young Productions (BYP). &nbsp;By using this&nbsp;art, you agree not to distribute, modify or use this art in an unlicensed market. &nbsp;If you need to use art in multiple markets, please purchase one of our Multi-Market Buyout Packages.&nbsp;All materials are © Copyright 2017 BYP Bill Young Productions, Inc.</div>
              </div>
              <div className="form-product-item w-clearfix">
                <div className="col-threequarters form-block">
                  <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Radio Order 8" id="Radio-Order-8" name="Radio-Order-8" type="checkbox" /><label className="checkbox-label print-item w-form-label" htmlFor="Radio-Order-8"><span className="spec-title">Vertical Ad Template</span> • 9.625"w X 12.5"h • 300 dpi</label></div>
                </div>
                <div className="form-price-wrapper">
                  <div>$100</div>
                </div>
              </div>
              <div className="form-product-item w-clearfix">
                <div className="col-threequarters form-block">
                  <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Radio Order 14" id="Radio-Order-14" name="Radio-Order-14" type="checkbox" /><label className="checkbox-label print-item w-form-label" htmlFor="Radio-Order-14"><span className="spec-title">Horizontal Ad Template</span> • 12.5"w X 9.625"h • 300 dpi</label></div>
                </div>
                <div className="form-price-wrapper">
                  <div>$100</div>
                </div>
              </div>
              <div className="form-product-item w-clearfix">
                <div className="col-threequarters form-block">
                  <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Radio Order 10" id="Radio-Order-10" name="Radio-Order-10" type="checkbox" /><label className="checkbox-label print-item w-form-label" htmlFor="Radio-Order-10"><span className="spec-title">Both Ad Templates </span>• Vertical 9.625"w X 12.5"h • 300 dpi<br />+ Horizontal 12.5"w X 9.625"h • 300 dpi</label></div>
                </div>
                <div className="form-price-wrapper">
                  <div>$150</div>
                </div>
              </div>
              <div className="form-product-item w-clearfix">
                <div className="col-threequarters form-block">
                  <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Radio Order 60" id="Radio-Order-60" name="Radio-Order-60" type="checkbox" /><label className="checkbox-label print-item w-form-label" htmlFor="Radio-Order-60"><span className="spec-title">Static Web Banner Package </span>• RGB 72 dpi<br />Includes Medium Rectangle 300x250 px<br />Wide SkyScrape 160x600 px<br />Leaderboard 728x90 px, Mobile 320x50 px</label></div>
                </div>
                <div className="form-price-wrapper">
                  <div>$100</div>
                </div>
              </div>
              <div className="form-product-item w-clearfix">
                <div className="col-threequarters form-block">
                  <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Radio Order 59" id="Radio-Order-59" name="Radio-Order-59" type="checkbox" /><label className="checkbox-label print-item w-form-label" htmlFor="Radio-Order-59"><span className="spec-title">Social Media Package </span>• RGB 72 dpi<br />Includes Facebook 820x312 px &amp; 1200x630 px<br />Twitter 1500x500 px &amp; 900x450 px<br />Instagram 1080x1080 px</label></div>
                </div>
                <div className="form-price-wrapper">
                  <div>$200</div>
                </div>
              </div>
              <div className="form-product-item w-clearfix">
                <div className="col-threequarters form-block">
                  <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Radio Order 61" id="Radio-Order-61" name="Radio-Order-61" type="checkbox" /><label className="checkbox-label print-item w-form-label" htmlFor="Radio-Order-61"><span className="spec-title">Premium Package </span><br />Includes all the above packages</label></div>
                </div>
                <div className="form-price-wrapper">
                  <div>$350</div>
                </div>
              </div>
            </div>
            <div className="product-item-section w-clearfix">
              <div className="form-block"><label className="form-subhead" htmlFor="Sponsor-Mention">ALA CARTE / Custom Sizes</label>
                <div className="caption">Custom sizes of approved designs can be ordered here including Billboards, Digital Billboards, Flyers, Posters, Web, &amp; Social sizes. Additional time and approval may be needed for custom sizes.</div>
              </div>
              <div className="repeatable-form-block">
                <div className="form-product-item w-clearfix">
                  <div className="_30-40-50-100 form-block">
                    <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Radio Order 8" id="Radio-Order-8" name="Radio-Order-8" type="checkbox" /><label className="checkbox-label print-item w-form-label" htmlFor="Radio-Order-62"><span className="spec-title">Custom Size</span></label></div><a className="text-link" href="#">Remove custom size</a></div>
                  <div className="repeatable-form-block">
                    <div className="col-half form-block w-clearfix"><input className="print-dimension text-input w-input" data-name="Dimension 16" id="Dimension-16" maxLength={256} name="Dimension-16" type="text" /><label className="print-custom-size-x" htmlFor="Dimension-2">x</label><input className="print-dimension text-input w-input" data-name="Dimension" id="Dimension-2" maxLength={256} name="Dimension" type="text" /><select className="select-override unit-selector w-select" data-name="State 4" id="State-4" name="State-4" required="required"><option value>Unit...</option>
                        <option value="Inches">Inches</option>
                        <option value="Pixels">Pixels</option>
                        <option value="cm">cm</option>
                        <option value="mm">mm</option></select></div>
                  </div>
                  <div className="form-price-wrapper">
                    <div>$150</div>
                  </div>
                </div>
              </div>
              <div className="form-block w-clearfix"><a className="btn edit-form-element w-button" href="#">Add Custom Size</a></div>
              <div className="form-block"><label htmlFor="Ticket-Information-Locations-12">Additional Instructions</label><textarea className="text-input w-input" data-name="Ticket Information Locations 10" id="Ticket-Information-Locations-10" maxLength={5000} name="Ticket-Information-Locations-10" defaultValue={""} /></div>
              <div className="repeatable-form-block">
                <div className="form-product-item w-clearfix">
                  <div className="form-block">
                    <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Radio Order 8" id="Radio-Order-8" name="Radio-Order-8" type="checkbox" /><label className="checkbox-label print-item w-form-label" htmlFor="Radio-Order-62"><span className="spec-title">Custom Static Banner •<span className="text-span-2"> RGB 72 dpi</span></span></label></div><a className="text-link" href="#">Remove custom size</a></div>
                  <div className="repeatable-form-block w-clearfix">
                    <div className="col-half form-block w-clearfix"><input className="print-dimension text-input w-input" data-name="Dimension 17" id="Dimension-17" maxLength={256} name="Dimension-17" type="text" /><label className="print-custom-size-x" htmlFor="Dimension-2">x</label><input className="print-dimension text-input w-input" data-name="Dimension" id="Dimension-2" maxLength={256} name="Dimension" type="text" /><select className="select-override unit-selector w-select" data-name="State 5" id="State-5" name="State-5" required="required"><option value>Unit...</option>
                        <option value="Inches">Inches</option>
                        <option value="Pixels">Pixels</option>
                        <option value="cm">cm</option>
                        <option value="mm">mm</option></select></div>
                  </div>
                  <div className="form-price-wrapper">
                    <div>$50</div>
                  </div>
                </div>
              </div>
              <div className="form-block w-clearfix"><a className="btn edit-form-element w-button" href="#">Add Custom Banner</a></div>
              <div className="form-block"><label htmlFor="Ticket-Information-Locations-10">Additional Instructions</label><textarea className="text-input w-input" data-name="Ticket Information Locations 10" id="Ticket-Information-Locations-10" maxLength={5000} name="Ticket-Information-Locations-10" defaultValue={""} /></div>
            </div>
            <div className="product-item-section w-clearfix">
              <div className="form-block"><label className="form-subhead" htmlFor="Sponsor-Mention">Animated Banners</label></div>
              <div className="form-product-item w-clearfix">
                <div className="col-twothirds form-block">
                  <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Radio Order 23" id="Radio-Order-23" name="Radio-Order-23" type="checkbox" /><label className="checkbox-label print-item w-form-label" htmlFor="Radio-Order-23"><span className="spec-title">Animated GIF Web Banner Package</span>&nbsp;• RGB 72 dpi<br />Includes localization and click tags<br />Medium Rectangle 300x250 px<br />Wide SkyScrape 160x600px<br />Leaderboard 728x90 px, Mobile 320x50 px</label></div>
                </div>
                <div className="form-price-wrapper">
                  <div>$200</div>
                </div>
              </div>
              <div className="form-product-item w-clearfix">
                <div className="col-twothirds form-block">
                  <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Radio Order 24" id="Radio-Order-24" name="Radio-Order-24" type="checkbox" /><label className="checkbox-label print-item w-form-label" htmlFor="Radio-Order-24"><strong>Animated HTML5 Web Banner Package • </strong>RGB 72 dpi <br />Includes localization and click tags<br />Medium Rectangle 300x250 px<br />Wide SkyScrape 160x600px<br />Leaderboard 728x90 px, Mobile 320x50 px</label></div>
                </div>
                <div className="form-price-wrapper">
                  <div>$250</div>
                </div>
              </div>
              <div className="repeatable-form-block w-clearfix">
                <div className="repeatable-form-block">
                  <div className="form-product-item w-clearfix">
                    <div className="_30-40-50-100 form-block">
                      <div className="checkbox-field w-checkbox w-clearfix"><input className="display-none w-checkbox-input" data-name="Radio Order 8" id="Radio-Order-8" name="Radio-Order-8" type="checkbox" /><label className="checkbox-label print-item w-form-label" htmlFor="Radio-Order-62"><span className="spec-title">Custom Size</span></label></div><a className="text-link" href="#">Remove custom size</a></div>
                    <div className="repeatable-form-block">
                      <div className="col-half form-block w-clearfix"><input className="print-dimension text-input w-input" data-name="Dimension 16" id="Dimension-16" maxLength={256} name="Dimension-16" type="text" /><label className="print-custom-size-x" htmlFor="Dimension-18">x</label><input className="print-dimension text-input w-input" data-name="Dimension 18" id="Dimension-18" maxLength={256} name="Dimension-18" type="text" /><select className="select-override unit-selector w-select" data-name="State 4" id="State-4" name="State-4" required="required"><option value>Unit...</option>
                          <option value="Inches">Inches</option>
                          <option value="Pixels">Pixels</option>
                          <option value="cm">cm</option>
                          <option value="mm">mm</option></select></div>
                    </div>
                    <div className="form-price-wrapper">
                      <div>$150</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-block w-clearfix"><a className="btn edit-form-element w-button" href="#">Add Custom Size</a></div>
              <div className="form-block"><label htmlFor="Ticket-Information-Locations-11">Additional Instructions</label><textarea className="text-input w-input" data-name="Ticket Information Locations 11" id="Ticket-Information-Locations-11" maxLength={5000} name="Ticket-Information-Locations-11" defaultValue={""} /></div>
            </div>
          </div>
          <div className="fixed-bar form-button-wrapper no-print">
            <div className="running-total-wrapper">
              <h4>Current Order/Revision Total: $125.00</h4>
            </div><a className="btn btn-disabled btn-neutral w-button" href="#">Save draft</a><a className="btn btn-neutral w-button" href="#">Save draft</a><input className="btn btn-warning w-button"  defaultValue="Submit Revision" /><input className="btn w-button"  defaultValue="Submit Order" /><input className="btn w-button"  defaultValue="Preview Order" /></div>
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
  </div>
)

export default ArtOrder
