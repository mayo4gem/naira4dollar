import React, { Component } from 'react'

class footer extends Component {
    render() {
        return (
            <div className="footer1">
                {/* <!-- Copyright Footer --> */}
                <div class="me-footer-copyright">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div class="me-copyright-block">
                                    <p>&copy; 2020 copyright all right reserved by <a href="javascript:;">mayor coin</a></p>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="me-copyright-block">
                                    <ul>
                                        <li><a href="javascript:;">privacy policy</a></li>
                                        <li><a href="javascript:;">Terms & condition</a></li>
                                        <li><a href="javascript:;">faq</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default footer
