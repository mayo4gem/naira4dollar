import React, { Component }  from 'react';

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <div class="me-top-header">
                    <div class="container">
                        <div class="me-top-head">
                            <div class="me-top-header-left">
                                <ul>
                                    <li>Follow Me:</li>
                                    <li><a href="http://facebook.com/"><i class="fa fa-facebook fa-lg"></i></a></li>
                                    <li><a href="http://instagram.com/"><i class="fa fa-instagram fa-lg"></i></a></li>
                                </ul>
                            </div>
                            <div class="me-top-header-right">
                                <ul>
                                    <li>
                                        <i class="fa fa-envelope-open"></i> mayo4gem@gmail.com</li>
                                    <li>
                                        <i class="fa fa-mobile"></i> +1(215)-452-1232
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- main header --> */}
                <div class="me-main-header">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-3 col-7">
                                <div class="me-logo">
                                    <a href="index.html"><img src="/images/logo.svg" alt="logo" class="img-fluid"/></a>
                                </div>
                            </div>
                            <div class="col-sm-9 col-5">
                                <div class="me-menu">
                                    <ul>
                                        <li><a href="about.html">About me</a></li>
                                        <li><a href="service.html">Service</a></li>
                                        <li><a href="service.html">Blog</a></li>
                                        {/* <li class="me-menu-children"><a href="javascript:;">Blog</a>
                                            <ul class="me-sub-menu">
                                                <li><a href="blog.html">Blog Grid</a></li>
                                                <li><a href="blog-single.html">Blog Detail</a></li>
                                            </ul>
                                        </li> */}
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                    <div class="me-toggle-nav">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <a href="javascript:;" class="me-login-menu" data-toggle="modal" data-target="#meLogin">Login</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Header;