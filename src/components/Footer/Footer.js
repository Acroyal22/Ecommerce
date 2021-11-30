import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className="webintern-footer" style={{marginTop:"100px"}}>
  <div className="webintern-footer-inner">
  <div className="container">
  <div className="row">
  <div className="col-sm-6 col-md-3 ">
  <Link className="webintern-footer-logo" to="https://www.freelogodesign.org/img/logo-ex-4.pngttps://www.freelogodesign.org/img/logo-ex-4.png">
  <img className="img-responsive" src="https://www.freelogodesign.org/img/logo-ex-4.png" style={{width:"100px"}} alt="" />
  </Link>
  <div className="simple-text dark padding-sm">
  <p>Totam rem aperiam, eaque ipsa quae ab illo inv ent ore veritatis et quasi architecto beatae vitae dict eaque ipsa quae ab.</p>
  </div>
  <div className="empty-space xs-25 sm-25"></div>
  </div>
  <div className="col-sm-6 col-md-2 footer-2">
  
  <h4 className="webintern_footer_title h5"><small>Quick Links</small></h4>
  <ul className="webintern-footer-list">
  <li><Link to="/"  to="">Home</Link></li>
  <li><Link to="/about" >About Us</Link></li>
  <li><Link to="/email">Contact Us</Link></li>
  </ul>
  <div className="empty-space xs-25 sm-25"></div>
  </div>
  <div className="col-sm-6 col-md-3 footer-3">
  
  <h4 className="webintern_footer_title h5"><small> Our Catalogue </small></h4>
  <ul className="webintern-footer-list">
  <li><Link to="/more">FASHION </Link></li>
  <li><Link to="/more">ELECTRONICS </Link></li>
  <li><Link to="/more">GAMES</Link></li>
  <li><Link to="/more">ACCESSORIES</Link></li>
  <li><Link to="/more">PHONES</Link></li>
  <li><Link to="/more">OTHERS</Link></li>
  </ul>
  <div className="empty-space xs-25"></div>
  </div>
  <div className="col-xs-12 col-md-4 col-sm-6">
  <div className="marg-sm-b30"></div>
  
  <h4 className="webintern_footer_title h5"><small>Subscribe Newsletter</small></h4>
  <div className="empty-space marg-lg-b20"></div>
  
  <div className="simple-text last dark ">
  <p>Get latest updates and offers.</p>
  </div>
  
  <div className="empty-space marg-lg-b15"></div>
  
  <form method="post">
  <div className="tt-subscribe">
  <input type="email" required="" placeholder="Enter your email" />
  <div className="tt-subscribe-submit">
  <i className="fa fa-envelope" aria-hidden="true"></i>
  <input type="submit" value="" />
  </div>
  </div>
  </form>
  <div className="empty-space marg-lg-b30"></div>
  
 
  </div>
  </div>
  </div>
  </div>
  <div className="tt-copy">
  <div className="container">
  <div className="row">
  <div className="col-sm-6">
  <div className="tt-copy-left">Ac Royal Ecommerce {new Date().getFullYear()}. All rights reserved. </div>
  </div>
  <div className="col-sm-6">
  <div className="tt-copy-right">
  Created by: ACROYAL 
  </div>
  </div>
  </div>
  </div>
  </div>
  </footer>
    </div>
  );
}

export default Footer;
