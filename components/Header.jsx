import { Search, User, ShoppingBag } from 'lucide-react';

export default function Header() {
  return (
    <>
      <div className="topbar">
        <span>🚚 Free shipping on orders over €50</span>
        <span>💰 30-Day Money Back Guarantee</span>
        <span>🎧 24/7 Customer Support</span>
      </div>

      <header className="header">
        <div className="brand">
          <div className="logo">FAST</div>
          <div className="claim">Future Always Starts Today.</div>
        </div>

        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#categories">Categories</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
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
