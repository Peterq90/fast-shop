import { ShoppingCart, Star } from 'lucide-react';
import { products } from '../data/products';

export default function ProductGrid() {
  return (
    <section id="shop" className="section">
      <div className="sectionTitle between">
        <h2>Trending Now</h2>
        <a href="#shop">View All →</a>
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
                <span>{product.rating} ({product.reviews})</span>
              </div>
              <div className="buyRow">
                <strong>{product.price}</strong>
                <button>
                  <ShoppingCart size={18} />
                  Add
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
