import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import Categories from '../components/Categories';
import ProductGrid from '../components/ProductGrid';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBadges />
      <Categories />
      <ProductGrid />

      <section id="about" className="aboutPanel">
        <h2>About FAST</h2>
        <p>
          FAST steht für Future Always Starts Today. Unser Ziel ist ein moderner
          Shop für smarte Produkte, faire Preise und ein sicheres Einkaufserlebnis.
        </p>
      </section>

      <Footer />
    </main>
  );
}
