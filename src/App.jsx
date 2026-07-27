import "./App.css";

function App() {
  return (
    <div className="home">

      <nav>
        <h1>CLOZEE.LK</h1>
        <div>
          <span>Men</span>
          <span>Women</span>
          <span>New Arrivals</span>
          <span>Collections</span>
        </div>
      </nav>

      <section className="banner">
        <div className="content">
          <h2>CLOZEE</h2>
          <p>Premium Fashion For The Modern Generation</p>
          <button>Shop Now</button>
        </div>
      </section>

      <section className="collection">
        <h2>Latest Collection</h2>

        <div className="products">

          <div className="card">
            <h3>Oversized T-Shirts</h3>
            <p>Comfort meets style</p>
          </div>

          <div className="card">
            <h3>Street Wear</h3>
            <p>Designed for confidence</p>
          </div>

          <div className="card">
            <h3>Premium Drops</h3>
            <p>Limited fashion pieces</p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default App;