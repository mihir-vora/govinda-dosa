import { menuItems } from "../data/menu";

export function FeaturedMenu() {
  const featured = menuItems.filter((item) => item.featured);
  if (featured.length === 0) return null;

  const samples = featured.some((item) => item.placeholder);

  return (
    <section className="section featured" aria-labelledby="featured-title">
      <div className="container">
        <div className="section-head">
          <p className="kicker">Signature dosa</p>
          <h2 id="featured-title" className="section-title">
            Plates that make you hungry.
          </h2>
          <div className="rule" />
          <p className="lede">
            A dosa-focused table in Nikol, with room to wander through specials,
            South Indian plates, and a cup of something hot.
          </p>
          {samples ? (
            <p className="note">
              Sample dishes for now. Swap in Govinda Dosa&apos;s real menu and prices
              whenever they are ready. Empty prices stay hidden.
            </p>
          ) : null}
        </div>

        <div className="feature-grid">
          {featured.map((item, index) => (
            <article
              key={item.id}
              className="feature-card reveal"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="feature-media">
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
              <div className="feature-body">
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
