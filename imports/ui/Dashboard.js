import React, { Component } from 'react';
import Header from './Header';

class Dashboard extends Component {
  goTo(path) {
    const { history } = this.props
    history.push(path)
  }

  render() {
    return (
      <div>
      <Header title={'dashboard'}/>
      <main>
        <section className="action-bar content-wrapper">
          <a onClick={() => this.goTo('art-order')} className="btn w-button">NEW&nbsp;Art Order</a>
          <a onClick={() => this.goTo('av-order')} className="btn w-button">NEW AUDIO/VIDEO Order</a>
        </section>
      </main>
      <main>
        <section className="content-wrapper wide">
          <h4>orderS</h4>
          <div className="table-wrapper">
            <div className="table-header table-row w-clearfix">
              <a className="table-col table-header w-inline-block" data-ix="table-sort-show-hide" href="#">
                <div className="table-data">Event date</div>
                <div className="table-sort-icon" data-ix="table-sort-icon-initial-state">↓</div>
              </a>
              <a className="large table-col table-header w-inline-block" data-ix="table-sort-show-hide" href="#">
                <div className="table-data">Tour</div>
                <div className="table-sort-icon" data-ix="table-sort-icon-initial-state">↓</div>
              </a>
              <a className="col-market table-col table-header w-inline-block" data-ix="table-sort-show-hide" href="#">
                <div className="table-data">Market</div>
                <div className="table-sort-icon" data-ix="table-sort-icon-initial-state">↓</div>
              </a>
              <a className="col-venue med table-col table-header w-inline-block" data-ix="table-sort-show-hide" href="#">
                <div className="table-data">Venue</div>
                <div className="table-sort-icon" data-ix="table-sort-icon-initial-state">↓</div>
              </a>
              <a className="col-status table-col table-header w-inline-block" data-ix="table-sort-show-hide" href="#">
                <div className="table-data">Status</div>
                <div className="table-sort-icon" data-ix="table-sort-icon-initial-state">↓</div>
              </a>
              <a className="col-order-date table-col table-header w-inline-block" data-ix="table-sort-show-hide" href="#">
                <div className="table-data">Order Date</div>
                <div className="table-sort-icon" data-ix="table-sort-icon-initial-state">↓</div>
              </a>
              <a className="table-col table-header w-inline-block" data-ix="table-sort-show-hide" href="#">
                <div className="table-data">Type</div>
                <div className="table-sort-icon" data-ix="table-sort-icon-initial-state">↓</div>
              </a>
            </div>
            <div className="table-row w-clearfix">
              <div className="col-event-date table-col">
                <div>Sep 28, 2017</div>
              </div>
              <div className="col-tour large table-col">
                <div>Alice In Chains</div>
              </div>
              <div className="col-market table-col">
                <div>Houston</div>
              </div>
              <div className="col-venue med table-col">
                <div>Bayou City Music Center</div>
              </div>
              <div className="col-status table-col">
                <div>Ordered</div>
              </div>
              <div className="col-order-date table-col">
                <div>Sep 28, 2017</div>
              </div>
              <div className="col-order-type table-col">
                <div>Audio/Video</div>
              </div>
              <div className="actions table-col"><a className="crud-action-icon-wrapper isci w-inline-block" data-ix="popover-show-hide" title="See ISCI codes for this order"><img alt="View order" src="images/isci.svg" width="22" /></a><a className="crud-action-icon-wrapper w-inline-block" href="view-order.html" title="View order"><img alt="View order" src="images/view.svg" width="22" /></a><a className="crud-action-icon-wrapper w-inline-block" href="audio-video-order.html" title="Make a revision to this order"><img src="images/revise.svg" width="16" /></a><a className="crud-action-icon-wrapper w-inline-block" href="audio-video-order.html" title="Copy this order"><img src="images/duplicate.svg" width="16" /></a><a className="crud-action-icon-wrapper w-inline-block" href="#" title="Download invoice"><img src="images/download.svg" width="14" /></a></div>
            </div>
            <div className="table-row w-clearfix">
              <div className="col-event-date table-col">
                <div>Sep 28, 2017</div>
              </div>
              <div className="col-tour large table-col">
                <div>Alice In Chains</div>
              </div>
              <div className="col-market table-col">
                <div>Houston</div>
              </div>
              <div className="col-venue med table-col">
                <div>Bayou City Music Center</div>
              </div>
              <div className="col-status table-col">
                <div>Ordered</div>
              </div>
              <div className="col-order-date table-col">
                <div>Sep 28, 2017</div>
              </div>
              <div className="col-order-type table-col">
                <div>Art (rev)</div>
              </div>
              <div className="actions table-col"><a className="crud-action-icon-wrapper w-inline-block" href="view-order.html"><img src="images/view.svg" width="22" /></a><a className="crud-action-icon-wrapper w-inline-block" href="audio-video-order.html"><img src="images/revise.svg" width="16" /></a><a className="crud-action-icon-wrapper w-inline-block" href="audio-video-order.html"><img src="images/duplicate.svg" width="16" /></a><a className="crud-action-icon-wrapper w-inline-block" href="#"><img src="images/download.svg" width="14" /></a></div>
            </div>
          </div>
        </section>
        <section className="content-wrapper wide">
          <h4>DraftS</h4>
          <div className="table-wrapper">
            <div className="table-header table-row w-clearfix">
              <a className="table-col table-header w-inline-block" data-ix="table-sort-show-hide" href="#">
                <div className="table-data">Event date</div>
                <div className="table-sort-icon" data-ix="table-sort-icon-initial-state">↓</div>
              </a>
              <a className="large table-col table-header w-inline-block" data-ix="table-sort-show-hide" href="#">
                <div className="table-data">Tour</div>
                <div className="table-sort-icon" data-ix="table-sort-icon-initial-state">↓</div>
              </a>
              <a className="col-market table-col table-header w-inline-block" data-ix="table-sort-show-hide" href="#">
                <div className="table-data">Market</div>
                <div className="table-sort-icon" data-ix="table-sort-icon-initial-state">↓</div>
              </a>
              <a className="med table-col table-header w-inline-block" data-ix="table-sort-show-hide" href="#">
                <div className="table-data">Venue</div>
                <div className="table-sort-icon" data-ix="table-sort-icon-initial-state">↓</div>
              </a>
              <a className="col-status table-col table-header w-inline-block" data-ix="table-sort-show-hide" href="#">
                <div className="table-data">Status</div>
                <div className="table-sort-icon" data-ix="table-sort-icon-initial-state">↓</div>
              </a>
              <a className="col-order-date table-col table-header w-inline-block" data-ix="table-sort-show-hide" href="#">
                <div className="table-data">Order Date</div>
                <div className="table-sort-icon" data-ix="table-sort-icon-initial-state">↓</div>
              </a>
              <a className="table-col table-header w-inline-block" data-ix="table-sort-show-hide" href="#">
                <div className="table-data">Type</div>
                <div className="table-sort-icon" data-ix="table-sort-icon-initial-state">↓</div>
              </a>
            </div>
            <div className="table-row w-clearfix">
              <div className="col-event-date table-col">
                <div>Sep 28, 2017</div>
              </div>
              <div className="col-tour large table-col">
                <div>Alice In Chains</div>
              </div>
              <div className="col-market table-col">
                <div>Houston</div>
              </div>
              <div className="col-venue med table-col">
                <div>Bayou City Music Center</div>
              </div>
              <div className="col-status table-col">
                <div>Draft</div>
              </div>
              <div className="col-order-date table-col">
                <div>-</div>
              </div>
              <div className="col-order-type table-col">
                <div>Audio/Video</div>
              </div>
              <div className="actions table-col"><a className="crud-action-icon-wrapper w-inline-block" href="view-order.html"><img src="images/view.svg" width="22" /></a><a className="crud-action-icon-wrapper w-inline-block" href="audio-video-order.html"><img src="images/revise.svg" width="16" /></a><a className="crud-action-icon-wrapper w-inline-block" href="audio-video-order.html"><img src="images/duplicate.svg" width="16" /></a></div>
            </div>
            <div className="table-row w-clearfix">
              <div className="col-event-date table-col">
                <div>Sep 28, 2017</div>
              </div>
              <div className="col-tour large table-col">
                <div>Alice In Chains</div>
              </div>
              <div className="col-market table-col">
                <div>Houston</div>
              </div>
              <div className="col-venue med table-col">
                <div>Bayou City Music Center</div>
              </div>
              <div className="col-status table-col">
                <div>Draft</div>
              </div>
              <div className="col-order-date table-col">
                <div>-</div>
              </div>
              <div className="col-order-type table-col">
                <div>Art</div>
              </div>
              <div className="actions table-col"><a className="crud-action-icon-wrapper w-inline-block" href="view-order.html"><img src="images/view.svg" width="22" /></a><a className="crud-action-icon-wrapper w-inline-block" href="audio-video-order.html"><img src="images/revise.svg" width="16" /></a><a className="crud-action-icon-wrapper w-inline-block" href="audio-video-order.html"><img src="images/duplicate.svg" width="16" /></a></div>
            </div>
          </div>
        </section>
      </main>
      </div>
    )
  }
}

export default Dashboard
