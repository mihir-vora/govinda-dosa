const points = [
  {
    title: "Fresh off the tawa",
    text: "A dosa tastes best when it is still hot, crisp at the rim, and soft enough to tear.",
  },
  {
    title: "Room for everyone",
    text: "Come on your own, or bring the people you usually eat with. There is a plate for both.",
  },
  {
    title: "A Nikol table",
    text: "An Ahmedabad dosa house with a Surti heart, easy to reach from Ankur and New India Colony.",
  },
];

export function Experience() {
  return (
    <section className="section experience" aria-labelledby="experience-title">
      <div className="container experience-grid">
        <div className="experience-copy">
          <p className="kicker">The visit</p>
          <h2 id="experience-title" className="section-title">
            More Than Just a Dosa.
          </h2>
          <div className="rule" />
          <p className="lede">
            Come hungry, explore your favourite flavours, and enjoy a delicious dining
            experience at Govinda Dosa.
          </p>
          <ul className="experience-points">
            {points.map((point) => (
              <li key={point.title}>
                <h3>{point.title}</h3>
                <p>{point.text}</p>
              </li>
            ))}
          </ul>
          <a className="btn btn-yellow" href="#location">
            Visit Govinda Dosa
          </a>
        </div>
        <div className="experience-photo reveal">
          <img
            src="/images/gallery/golden-roll.jpg"
            alt="A golden dosa roll served with chutney and sambar"
            width={864}
            height={1152}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  );
}
