export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="heroCopy">
        <p className="eyebrow">Deutscher Premium-Onlineshop</p>
        <h1>
          DIE ZUKUNFT
          <br />
          STARTET <span>HEUTE.</span>
        </h1>
        <p className="heroText">
          Entdecke smarte Produkte, praktische Alltagshelfer und aktuelle Bestseller –
          modern ausgewählt, sicher bestellt und bequem zu dir geliefert.
        </p>
        <div className="heroActions">
          <a className="primaryButton" href="#shop">Jetzt einkaufen →</a>
          <a className="secondaryButton" href="#categories">Kategorien entdecken</a>
        </div>
      </div>

      <div className="heroVisual" aria-label="FAST Produktvisual">
        <div className="speedBeam" />
        <div className="glowBall" />
        <img src="/hero.jpg" alt="FAST Premium Kopfhörer" className="heroProduct" />
        <div className="floatingCard">
          <strong>FAST DEAL</strong>
          <span>Trendprodukte. Faire Preise. Sicherer Einkauf.</span>
        </div>
      </div>
    </section>
  );
}
