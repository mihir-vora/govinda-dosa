import { restaurant } from "../data/restaurant";

export function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" />
            {restaurant.tagline} · {restaurant.cityLine}
          </p>
          <h1 id="hero-title" className="hero-title">
            <span>Hot.</span>
            <span>Crispy.</span>
            <span className="accent">Delicious.</span>
          </h1>
          <p className="subhead">Authentic Dosa, Made to Make You Come Back.</p>
          <p className="support">
            Discover delicious dosas, exciting varieties, and authentic Indian flavours
            at Govinda Dosa, Nikol, Ahmedabad.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#menu">
              Explore Menu
            </a>
            <a
              className="btn btn-ghost"
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
          </div>
        </div>

        <div className="hero-stage">
          <div className="hero-ring" aria-hidden="true" />
          <div className="hero-arch">
            <img
              src="/images/hero-dosa.jpg"
              alt="Two crisp dosas on a banana leaf with chutneys"
              width={1000}
              height={1313}
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <figure className="float-card">
            <img
              src="/images/hero-closeup.jpg"
              alt=""
              width={1400}
              height={1050}
              decoding="async"
            />
            <figcaption>
              <strong>Crisp from the tawa</strong>
              <span>Nikol, Ahmedabad</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
