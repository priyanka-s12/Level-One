import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <section className="text-center mt-3">
          <img src="https://placehold.co/1200x400" className="img-fluid" />
        </section>

        <section className="text-center py-3">
          <h2>Shopie</h2>
          <p>Welcome to the Shopie application!</p>
          <Link className="btn btn-primary" to={'/products'}>
            Browse Products
          </Link>
        </section>

        <section className="text-center py-3">
          <h2>Trending</h2>
          <p>Checkout out trending products</p>
          <div className="row mt-5">
            <div className="col-md-4 mb-3">
              <img src="https://placehold.co/300x300" />
            </div>
            <div className="col-md-4 mb-3">
              <img src="https://placehold.co/300x300" />
            </div>
            <div className="col-md-4 mb-3">
              <img src="https://placehold.co/300x300" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
