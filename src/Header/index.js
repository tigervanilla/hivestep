import './style.css';
import React from 'react';

const Index = () => {
    return (
        <>
            <div className="head1">
                <div className="head1box d-flex justify-content-between align-items-center">
                    <div>
                        <img src="images/envelope.svg" alt="email"/> <span className="me-3">Sales@hivesteps.com</span>
                        <img src="images/phone.svg" alt="phone"/> <span>+ 91-9560573049</span>
                    </div>
                    <div className="d-flex">
                        <div className="mx-2"><img src="images/facebook.svg" alt="facebook"/></div>
                        <div className="mx-2"><img src="images/twitter.svg" alt="twitter"/></div>
                        <div className="mx-2"><img src="images/youtube.svg" alt="youtube"/></div>
                        <div className="mx-2"><img src="images/linkedin.svg" alt="linkedin"/></div>
                        <div className="mx-2"><button className="login-btn">Sing in</button></div>
                    </div>
                </div>
            </div>

            <div className="head2">
                <nav className="navbar navbar-expand-lg bg-body-tertiary head2box">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">
                            <img src="images/brand.svg" alt="brand"/>
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <a className="nav-link active" aria-current="page" href="#">About</a>
                                <a className="nav-link" href="#">Values</a>
                                <a className="nav-link" href="#">Journey</a>
                                <a className="nav-link" href="#">Offerings</a>
                                <a className="nav-link" href="#">Why us?</a>
                                <a className="nav-link" href="#">FAQs</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>



            {/*<div className="d-flex header-1 justify-content-between align-items-center">*/}
            {/*    <div className="width-1036 mx-auto">*/}
            {/*        <div className="">*/}
            {/*            <span>Sales@hivesteps.com</span>*/}
            {/*            <span>+ 91-9560573049</span>*/}
            {/*        </div>*/}
            {/*        <div className="w-25 d-flex justify-content-around">*/}
            {/*            <div><img src="images/facebook.svg" alt="facebook"/></div>*/}
            {/*            <div><img src="images/twitter.svg" alt="twitter"/></div>*/}
            {/*            <div><img src="images/youtube.svg" alt="youtube"/></div>*/}
            {/*            <div><img src="images/linkedin.svg" alt="linkedin"/></div>*/}
            {/*            <div><button className="login-btn">Sing in</button></div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="header-2">*/}
            {/*    <div className="width-1036 mx-auto">*/}
            {/*        <nav className="navbar navbar-expand-lg bg-body-tertiary">*/}
            {/*            <div className="container-fluid">*/}
            {/*                <a className="navbar-brand" href="#">*/}
            {/*                    <img src="images/brand.svg" alt="brand" />*/}
            {/*                </a>*/}
            {/*                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"*/}
            {/*                        data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup"*/}
            {/*                        aria-expanded="false" aria-label="Toggle navigation">*/}
            {/*                    <span className="navbar-toggler-icon"></span>*/}
            {/*                </button>*/}
            {/*                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">*/}
            {/*                    <div className="navbar-nav">*/}
            {/*                        <a className="nav-link active" aria-current="page" href="#">About</a>*/}
            {/*                        <a className="nav-link" href="#">Values</a>*/}
            {/*                        <a className="nav-link" href="#">Journey</a>*/}
            {/*                        <a className="nav-link" href="#">Offerings</a>*/}
            {/*                        <a className="nav-link" href="#">Why us?</a>*/}
            {/*                        <a className="nav-link" href="#">FAQs</a>*/}
            {/*                    </div>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*        </nav>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    );
};

export default Index;