export default function FAQ() {
  const items = [
    ['Wie lange dauert der Versand?', 'Die Lieferzeit liegt je nach Produkt meist bei 5 bis 10 Werktagen.'],
    ['Kann ich meine Bestellung zurückgeben?', 'Ja, du hast 30 Tage Rückgaberecht. Die genauen Bedingungen stehen später in der Widerrufsbelehrung.'],
    ['Welche Zahlungsarten gibt es?', 'Geplant sind PayPal, Kreditkarte, Apple Pay und Google Pay.'],
    ['Ist FAST schon ein echter Shop?', 'Aktuell ist FAST eine Design- und Shop-Demo. Zahlungsanbieter, echte Lieferanten und finale Rechtstexte müssen noch eingerichtet werden.']
  ];

  return (
    <section className="faq">
      <div className="sectionTitle">
        <p className="sectionKicker">Hilfe</p>
        <h2>Häufige Fragen</h2>
      </div>
      <div className="faqList">
        {items.map(([q, a]) => (
          <details key={q}>
            <summary>{q}</summary>
            <p>{a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
