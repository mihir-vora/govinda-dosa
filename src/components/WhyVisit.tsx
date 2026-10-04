import { highlights, restaurant } from "../data/restaurant";

const icons: Record<(typeof highlights)[number]["id"], string> = {
  variety:
    "M5 8.5h14M7 8.5c0 5 1.4 8 5 10 3.6-2 5-5 5-10M9 8.5V7a3 3 0 0 1 6 0v1.5",
  flavour: "M12 3.5c2.2 3.2 4.5 5.2 4.5 8.2a4.5 4.5 0 0 1-9 0c0-3 2.3-5 4.5-8.2Z",
  fresh: "M12 4.5v4M8.5 7.5l7 7M12 20.5a6.5 6.5 0 0 0 4.8-10.8C14.5 7 12 4.5 12 4.5S9.5 7 7.2 9.7A6.5 6.5 0 0 0 12 20.5Z",
  passion: "M12 19s-6.2-3.7-6.2-8.2A3.4 3.4 0 0 1 12 8.2a3.4 3.4 0 0 1 6.2 2.6C18.2 15.3 12 19 12 19Z",
  service: "M8 14.5a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm8 .5a3.2 3.2 0 1 0-2.4-5.3M4.5 19.5c.6-2.4 2.4-3.6 5.5-3.6s4.9 1.2 5.5 3.6M14 16.2c1.6-.2 3 .4 4.2 1.8",
  reach: "M12 20.5s6-4.8 6-9.4a6 6 0 1 0-12 0c0 4.6 6 9.4 6 9.4Zm0-7.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z",
};

export function WhyVisit() {
  return (
    <section className="section why" aria-labelledby="why-title">
      <div className="container why-grid">
        <div className="why-photo reveal">
          <img
            src="/images/gallery/banana-leaf.jpg"
            alt="A dosa served on a banana leaf with chutney"
            width={1200}
            height={738}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div>
          <p className="kicker">Why Govinda Dosa</p>
          <h2 id="why-title" className="section-title">
            A dosa worth leaving home for.
          </h2>
          <div className="rule" />
          <p className="lede">
            Come for the crisp dosa, stay for the variety, and leave already thinking
            about the next visit to Nikol.
          </p>

          <ul className="why-list">
            {highlights.map((item, index) => (
              <li key={item.id} className="why-item reveal" style={{ animationDelay: `${index * 60}ms` }}>
                <span className="why-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none">
                    <path
                      d={icons[item.id]}
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="why-actions">
            <a className="btn btn-primary" href="#gallery">
              See Our Food
            </a>
            <a className="btn btn-ghost" href="#reels">
              Watch Our Reels
            </a>
            <a className="btn btn-ghost" href="#location">
              Visit Govinda Dosa
            </a>
          </div>
          <p className="fine-print">
            Call {restaurant.phoneDisplay} before you head out, or get directions on the way.
          </p>
        </div>
      </div>
    </section>
  );
}
