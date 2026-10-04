import { useState } from "react";
import { menuCategories, menuItems } from "../data/menu";
import { restaurant } from "../data/restaurant";

export function MenuSection() {
  const [category, setCategory] = useState<string>("All");
  const available = menuCategories.filter((name) =>
    menuItems.some((item) => item.category === name),
  );

  const visible = menuItems.filter(
    (item) => category === "All" || item.category === category,
  );

  if (menuItems.length === 0) {
    return (
      <section className="section menu-section" aria-labelledby="menu-title">
        <div className="container menu-empty">
          <p className="kicker">Menu</p>
          <h2 id="menu-title" className="section-title">
            The dosa menu lives on the table.
          </h2>
          <p className="lede">
            Govinda Dosa&apos;s dishes will be listed here. Until then, come in and ask
            what is fresh on the tawa.
          </p>
          <div className="hero-actions">
            <a
              className="btn btn-primary"
              href={restaurant.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Directions
            </a>
            <a className="btn btn-ghost" href={restaurant.phoneTel}>
              Call Now
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section menu-section" aria-labelledby="menu-title">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Full menu</p>
          <h2 id="menu-title" className="section-title">
            Browse the dosa table.
          </h2>
          <div className="rule" />
          <p className="lede">
            Look through the kinds of plates Govinda Dosa is here for. This is a
            menu to explore, not an order screen.
          </p>
        </div>

        <div className="chips" role="tablist" aria-label="Menu categories">
          {["All", ...available].map((name) => {
            const selected = category === name;
            return (
              <button
                key={name}
                type="button"
                role="tab"
                className={`chip${selected ? " is-on" : ""}`}
                aria-selected={selected}
                onClick={() => setCategory(name)}
              >
                {name}
              </button>
            );
          })}
        </div>

        <p className="visually-hidden" aria-live="polite">
          Showing {visible.length} {category === "All" ? "dishes" : `${category} dishes`}
        </p>

        <div className="menu-grid" id="menu-results" key={category}>
          {visible.map((item) => (
            <article key={item.id} className="menu-card">
              <div className="menu-media">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  width={item.width}
                  height={item.height}
                  loading="lazy"
                  decoding="async"
                />
                {item.placeholder ? <span className="sample">Sample</span> : null}
              </div>
              <div className="menu-body">
                <p className="card-cat">{item.category}</p>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                {item.price ? <p className="price">{item.price}</p> : null}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
