import "./App.css";

function App() {

  return (
    <div>

      <nav>
        <h1>CLOZEE.LK</h1>

        <div>
          <span>Men</span>
          <span>Women</span>
          <span>New Arrivals</span>
        </div>
      </nav>


      <section className="banner">

        <div>
          <h2>CLOZEE</h2>

          <p>
            Premium Fashion For The Modern Generation
          </p>

          <button>
            Shop Now
          </button>

        </div>

      </section>


      <section className="products">

        <h2>Latest Collection</h2>

        <div className="product-grid">

          <div className="card">
            <h3>Oversized Collection</h3>
            <p>Premium Streetwear</p>
          </div>


          <div className="card">
            <h3>New Arrivals</h3>
            <p>Fresh Styles Coming Soon</p>
          </div>


          <div className="card">
            <h3>Signature Drops</h3>
            <p>Designed By CLOZEE</p>
          </div>

        </div>

      </section>


    </div>
  );
}

export default App;