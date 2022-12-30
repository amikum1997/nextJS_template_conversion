import Link from 'next/link'
import React, { Fragment } from 'react'

const Header = () => {
    return (
        <Fragment>
            <header>
                <div className="header-top-bar">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <ul className="top-bar-info list-inline-item pl-0 mb-0">
                                    <li className="list-inline-item"><a href="mailto:support@gmail.com"><i className="icofont-support-faq mr-2" />support@novena.com</a></li>
                                    <li className="list-inline-item"><i className="icofont-location-pin mr-2" />Address Ta-134/A, New York, USA </li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <div className="text-lg-right top-right-bar mt-2 mt-lg-0">
                                    <a href="tel:+23-345-67890">
                                        <span>Call Now : </span>
                                        <span className="h4">823-4565-13456</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navigation" id="navbar">
                    <div className="container">
                        <a className="navbar-brand" href="index.html">
                            <img src="images/logo.png" alt="" className="img-fluid" />
                        </a>
                        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarmain" aria-controls="navbarmain" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="icofont-navigation-menu" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarmain">
                            <ul className="navbar-nav ml-auto">
                                <Link href={`/`}><li className={`nav-item active`}><a className="nav-link" href="index.html">Home</a></li></Link>
                                <Link href={`/aboutUs`}><li className={`nav-item`}><a className="nav-link" href="about.html">About</a></li></Link>
                                <Link href={`/services`}><li className={`nav-item`}><a className="nav-link" href="service.html">Services</a></li></Link>
                                <Link href={`/products`}><li className={`nav-item`}><a className="nav-link" href="service.html">Products</a></li></Link>
                                <Link href={`/blogs`}><li className={`nav-item`}><a className="nav-link" href="service.html">Blogs</a></li></Link>
                                <Link href={`/contactUs`}><li className={`nav-item`}><a className="nav-link" href="contact.html">Contact</a></li></Link>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>

        </Fragment>
    )
}

export default Header