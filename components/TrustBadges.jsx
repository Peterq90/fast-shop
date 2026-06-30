import { Lock, Truck, RotateCcw, Headphones } from 'lucide-react';

const badges = [
  [Lock, 'Secure Checkout', '100% secure payments'],
  [Truck, 'Fast Shipping', 'Worldwide delivery'],
  [RotateCcw, '30-Day Returns', 'No hassle returns'],
  [Headphones, 'Customer Support', "We're here for you"],
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
