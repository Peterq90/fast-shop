import { categories } from '../data/products';

export default function Categories() {
  return (
    <section id="categories" className="section">
      <div className="sectionTitle">
        <h2>Shop by Category</h2>
      </div>
      <div className="categoriesGrid">
        {categories.map(([icon, label]) => (
          <button className="categoryCard" key={label}>
            <span className="categoryIcon">{icon}</span>
            <span>{label}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
