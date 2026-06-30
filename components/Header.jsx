import { Search, User, ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <>
      <div className="topbar">
        <span>🚚 Kostenloser Versand ab 50 €</span>
        <span>↩️ 30 Tage Rückgaberecht</span>
        <span>🔒 Sicher bezahlen</span>
      </div>

      <header className="header">
        <div className="brand">
          <div className="logo">FAST</div>
          <div className="claim">Future Always Starts Today.</div>
        </div>

        <nav className="nav">
          <a href="#home">Startseite</a>
          <a href="#shop">Shop</a>
          <a href="#categories">Kategorien</a>
          <a href="#bewertungen">Bewertungen</a>
          <a href="#kontakt">Kontakt</a>
        </nav>

        <div className="headerIcons">
          <Search size={22} />
          <User size={22} />
          <ShoppingBag size={22} />
        </div>
      </header>
    </>
  );
}
