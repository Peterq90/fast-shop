import { Lock, Truck, RotateCcw, Headphones } from 'lucide-react';

const badges = [
  [Lock, 'Sichere Zahlung', 'Verschlüsselte Zahlungsabwicklung'],
  [Truck, 'Schneller Versand', 'Kostenlos ab 50 € Bestellwert'],
  [RotateCcw, '30 Tage Rückgabe', 'Einfach und kundenfreundlich'],
  [Headphones, 'Kundenservice', 'Support bei Fragen zur Bestellung'],
];

export default function TrustBadges() {
  return (
    <section className="trustBadges">
      {badges.map(([Icon, title, text]) => (
        <div className="trustBadge" key={title}>
          <Icon size={28} />
          <div>
            <strong>{title}</strong>
            <span>{text}</span>
          </div>
        </div>
      ))}
    </section>
  );
}
