import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustBadges from '../components/TrustBadges';
import Categories from '../components/Categories';
import ProductGrid from '../components/ProductGrid';
import Reviews from '../components/Reviews';
import FAQ from '../components/FAQ';
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
        <div>
          <p className="sectionKicker">Über FAST</p>
          <h2>Future Always Starts Today.</h2>
        </div>
        <p>
          FAST steht für moderne Produkte, faire Preise und ein Einkaufserlebnis,
          das schnell, übersichtlich und vertrauenswürdig wirkt. Unser Ziel ist
          ein Shop, der nicht wie ein typischer Dropshipping-Shop aussieht,
          sondern wie eine eigenständige Marke.
        </p>
      </section>

      <Reviews />
      <FAQ />
      <Footer />
    </main>
  );
}
