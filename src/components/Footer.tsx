import { photoCredits } from "../data/gallery";
import {
  footerAddressLines,
  navLinks,
  restaurant,
  socialLinks,
} from "../data/restaurant";
import { IconFacebook, IconInstagram, IconYouTube } from "./Icons";

const socialIcons: Record<(typeof socialLinks)[number]["name"], typeof IconInstagram> = {
  Instagram: IconInstagram,
  YouTube: IconYouTube,
  Facebook: IconFacebook,
};

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <img src="/images/logo.png" alt="Govinda Dosa" width={982} height={168} />
          <p>{restaurant.shortDescription}</p>
        </div>

        <div>
          <h2>Quick links</h2>
          <ul className="footer-links">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2>Contact</h2>
          <p>
            <a href={restaurant.phoneTel}>{restaurant.phoneDisplay}</a>
          </p>
          <address>
            {footerAddressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
        </div>

        <div>
          <h2>Social</h2>
          <ul className="socials">
            {socialLinks.map((link) => {
              const Icon = socialIcons[link.name];
              if (!link.href) {
                return (
                  <li key={link.name}>
                    <span className="social-link is-pending">
                      <Icon />
                      {link.name}
                      <span className="visually-hidden"> link not added yet</span>
                    </span>
                  </li>
                );
              }
              return (
                <li key={link.name}>
                  <a
                    className="social-link"
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon />
                    {link.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="container credits">
        <p>Food photographs are stand-ins and were resized for this page.</p>
        <ul>
          {photoCredits.map((credit) => (
            <li key={credit.id}>
              <a href={credit.href} target="_blank" rel="noopener noreferrer">
                {credit.author}
              </a>
              <span> · {credit.license}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="container legal">
        <p>© 2026 Govinda Dosa. All rights reserved.</p>
      </div>
    </footer>
  );
}
