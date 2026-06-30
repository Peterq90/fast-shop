export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="heroCopy">
        <p className="eyebrow">Premium Dropshipping Store</p>
        <h1>
          FUTURE ALWAYS
          <br />
          STARTS <span>TODAY.</span>
        </h1>
        <p className="heroText">
          Entdecke innovative Produkte für deinen Alltag – sorgfältig ausgewählt,
          sicher bestellt und direkt zu dir geliefert.
        </p>
        <div className="heroActions">
          <a className="primaryButton" href="#shop">Shop Now →</a>
          <a className="secondaryButton" href="#categories">Explore Categories</a>
        </div>
      </div>

      <div className="heroVisual" aria-label="FAST hero product visual">
        <div className="speedBeam" />
        <div className="glowBall" />
        <div className="heroProduct">🎧</div>
        <div className="floatingCard">
          <strong>FAST DEAL</strong>
          <span>Smart products. Better prices.</span>
        </div>
      </div>
    </section>
  );
}
