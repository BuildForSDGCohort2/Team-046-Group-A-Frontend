import React, { Component } from 'react'
import PropTypes from 'prop-types'
import k1 from '../unnamed.jpg'
import k2 from '../unnamed.png'
import { Link } from 'react-router-dom'

class ChatPage extends Component {
  render() {
    return (
      <div class="row" style={{width:"75%"}}>


                <div class="col-md-4">
                  <div class="card">
                    <div class="card-header">
                      <h3 class="card-title">Latest Members</h3>

                      <div class="card-tools">
                        <span class="badge badge-danger">8 New Members</span>
                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                          <i class="fas fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-tool" data-card-widget="remove">
                          <i class="fas fa-times"></i>
                        </button>
                      </div>
                    </div>
                    <div class="card-body p-0">
                    <div class="au-inbox-wrap js-inbox-wrap">
                                    <div class="au-message js-list-load">

                                        <div class="au-message-list">

                                        <div class="au-message__item unread">
                 <div class="au-message__item-inner">
                     <Link class="au-message__item-text" to='#'>
                         <div class="avatar-wrap">
                             <div class="avatar">
                                 <img src={k1} alt=''/>
                             </div>
                         </div>
                         <div class="text">
                             <h5 class="name">Musa</h5>
                         </div>
                     </Link>
                 </div>
             </div>

                                        </div>

                                    </div>

                                </div>
                    </div>
                    <div class="card-footer text-center">
                      <a href="javascript:">View All Users</a>
                    </div>
                  </div>
                </div>
                <div class="col-md-8">
                  <div class="card direct-chat direct-chat-warning">
                    <div class="card-header">
                      <h3 class="card-title">Direct Chat</h3>

                      <div class="card-tools">
                        <span title="3 New Messages" class="badge badge-warning">3</span>
                        <button type="button" class="btn btn-tool" data-card-widget="collapse">
                          <i class="fas fa-minus"></i>
                        </button>
                        <button type="button" class="btn btn-tool" title="Contacts" data-widget="chat-pane-toggle">
                          <i class="fas fa-comments"></i>
                        </button>
                        <button type="button" class="btn btn-tool" data-card-widget="remove">
                          <i class="fas fa-times"></i>
                        </button>
                      </div>
                    </div>
                    <div class="card-body">
                      <div class="direct-chat-messages">
                        <div class="direct-chat-msg">
                          <div class="direct-chat-infos clearfix">
                            <span class="direct-chat-name float-left">Alexander Pierce</span>
                            <span class="direct-chat-timestamp float-right">23 Jan 2:00 pm</span>
                          </div>
                          <img class="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image"/>
                          <div class="direct-chat-text">
                            Is this template really for free? That's unbelievable!
                          </div>
                        </div>

                        <div class="direct-chat-msg right">
                          <div class="direct-chat-infos clearfix">
                            <span class="direct-chat-name float-right">Sarah Bullock</span>
                            <span class="direct-chat-timestamp float-left">23 Jan 2:05 pm</span>
                          </div>
                          <img class="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image"/>
                          <div class="direct-chat-text">
                            You better believe it!
                          </div>
                        </div>

                        <div class="direct-chat-msg">
                          <div class="direct-chat-infos clearfix">
                            <span class="direct-chat-name float-left">Alexander Pierce</span>
                            <span class="direct-chat-timestamp float-right">23 Jan 5:37 pm</span>
                          </div>
                          <img class="direct-chat-img" src="dist/img/user1-128x128.jpg" alt="message user image"/>
                          <div class="direct-chat-text">
                            Working with AdminLTE on a great new app! Wanna join?
                          </div>
                        </div>

                        <div class="direct-chat-msg right">
                          <div class="direct-chat-infos clearfix">
                            <span class="direct-chat-name float-right">Sarah Bullock</span>
                            <span class="direct-chat-timestamp float-left">23 Jan 6:10 pm</span>
                          </div>
                          <img class="direct-chat-img" src="dist/img/user3-128x128.jpg" alt="message user image"/>
                          <div class="direct-chat-text">
                            I would love to.
                          </div>
                        </div>

                      </div>


                    </div>
                    <div class="card-footer">
                      <form action="#" method="post">
                        <div class="input-group">
                          <input type="text" name="message" placeholder="Type Message ..." class="form-control"/>
                          <span class="input-group-append">
                            <button type="button" class="btn btn-warning">Send</button>
                          </span>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
    );
  }
}

export default ChatPage;
