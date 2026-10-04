import { addressLines, restaurant } from "../data/restaurant";
import { IconPhone, IconPin } from "./Icons";

export function Location() {
  return (
    <section className="section location" id="location" aria-labelledby="location-title">
      <div className="container location-grid">
        <div>
          <p className="kicker">Find us</p>
          <h2 id="location-title" className="section-title">
            Come Visit Govinda Dosa
          </h2>
          <div className="rule" />
          <address className="address-block">
            <strong>{restaurant.name}</strong>
            {addressLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </address>
          <p className="location-phone">
            <a href={restaurant.phoneTel}>{restaurant.phoneDisplay}</a>
          </p>
          <div className="location-actions">
            <a
              className="btn btn-primary"
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconPin className="btn-icon" />
              Get Directions
            </a>
            <a className="btn btn-ghost" href={restaurant.phoneTel}>
              <IconPhone className="btn-icon" />
              Call Now
            </a>
          </div>
        </div>

        <div className="map-frame">
          <iframe
            title="Map showing Govinda Dosa in Nikol, Ahmedabad"
            src={restaurant.mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
