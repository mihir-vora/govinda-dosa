import { restaurant } from "../data/restaurant";

export function VisitCta() {
  return (
    <section className="visit-cta" aria-labelledby="visit-title">
      <div className="container visit-inner">
        <p className="kicker">Nikol, Ahmedabad</p>
        <h2 id="visit-title" className="section-title">
          Craving a Delicious Dosa?
        </h2>
        <p className="lede">Your next favourite dosa is waiting at Govinda Dosa.</p>
        <div className="hero-actions">
          <a
            className="btn btn-yellow"
            href={restaurant.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Directions
          </a>
          <a className="btn btn-line" href={restaurant.phoneTel}>
            Call Govinda Dosa
          </a>
        </div>
      </div>
    </section>
  );
}
