import React from "react";

// Styles
import "./style.css";

// Links
import footerLinks from "@/assets/links/footerLinks";
import socialLinks from "@/assets/links/socialLinks";

// Logo
import { NavLogo } from "@/assets/icons/logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <NavLogo fill="#fff" />
          <nav className="footer__nav">
            {footerLinks.map((section, index) => {
              return (
                <div key={index} className="footer__nav-section">
                  <h4 className="footer--title">{section.title}</h4>
                  <div>
                    {section.links.map((link, index) => (
                      <a className="link link--secondary" href={link.href} key={link.href}>
                        {link.name}
                      </a>
                    ))}
                  </div>
                </div>
              );
            })}
          </nav>
          <div className="footer__social">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                className="link link--secondary"
                href={social.href}
                aria-label={social.name}
              >
                {social.icon}
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
