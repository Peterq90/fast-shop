export default function Reviews() {
  const reviews = [
    ['Schnelle Lieferung', 'Produkt kam sauber verpackt an. Sieht hochwertiger aus als erwartet.'],
    ['Guter Preis', 'Für den Preis wirklich stark. Der Shop wirkt modern und übersichtlich.'],
    ['Einfach bestellt', 'Bestellprozess war unkompliziert. Würde wieder bestellen.']
  ];

  return (
    <section id="bewertungen" className="reviews">
      <div className="sectionTitle">
        <p className="sectionKicker">Kundenstimmen</p>
        <h2>Das sagen unsere Kunden</h2>
      </div>
      <div className="reviewGrid">
        {reviews.map(([title, text]) => (
          <article className="reviewCard" key={title}>
            <div className="stars">★★★★★</div>
            <h3>{title}</h3>
            <p>{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
