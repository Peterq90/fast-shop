import { categories } from '../data/products';

export default function Categories() {
  return (
    <section id="categories" className="section">
      <div className="sectionTitle">
        <p className="sectionKicker">Schnell finden</p>
        <h2>Nach Kategorie shoppen</h2>
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
