import { ShoppingCart, Star } from 'lucide-react';
import { products } from '../data/products';

export default function ProductGrid() {
  return (
    <section id="shop" className="section">
      <div className="sectionTitle between">
        <div>
          <p className="sectionKicker">Aktuelle Angebote</p>
          <h2>Bestseller</h2>
        </div>
        <a href="#shop">Alle Produkte →</a>
      </div>

      <div className="productGrid">
        {products.map((product) => (
          <article className="productCard" key={product.id}>
            <div className="productImage">
              <span className="badge">{product.badge}</span>
              <span className="productEmoji">{product.emoji}</span>
            </div>
            <div className="productInfo">
              <p className="productCategory">{product.category}</p>
              <h3>{product.name}</h3>
              <div className="rating">
                <Star size={16} fill="currentColor" />
                <span>{product.rating} ({product.reviews} Bewertungen)</span>
              </div>
              <p className="delivery">{product.delivery}</p>
              <div className="buyRow">
                <div>
                  <strong>{product.price}</strong>
                  <small>{product.oldPrice}</small>
                </div>
                <button>
                  <ShoppingCart size={18} />
                  In den Warenkorb
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
