import "./App.css";

function App() {

  const products = [
    {
      name: "CLOZEE Oversized Black Tee",
      price: "LKR 3,490",
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      name: "CLOZEE Streetwear Edition",
      price: "LKR 3,990",
      image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1"
    },
    {
      name: "CLOZEE Premium Collection",
      price: "LKR 4,490",
      image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475"
    }
  ];


  return (

    <div className="website">


      <header>

        <div className="logo">
          CLOZEE
        </div>


        <nav>
          <a>MEN</a>
          <a>WOMEN</a>
          <a>COLLECTION</a>
          <a>CONTACT</a>
        </nav>


      </header>



      <section className="hero">

        <div className="hero-text">

          <h1>
            CLOZEE
          </h1>

          <h2>
            WEAR YOUR IDENTITY
          </h2>


          <p>
            Premium streetwear designed for the next generation.
          </p>


          <button>
            SHOP NOW
          </button>


        </div>


      </section>




      <section className="products">


        <h2>
          Latest Collection
        </h2>



        <div className="product-grid">


          {products.map((product,index)=>(

            <div className="card" key={index}>


              <img 
              src={product.image}
              alt={product.name}
              />


              <h3>
                {product.name}
              </h3>


              <p>
                {product.price}
              </p>


              <a 
              className="whatsapp"
              href="https://wa.me/94722884573"
              target="_blank"
              >
                Order on WhatsApp
              </a>


            </div>


          ))}


        </div>


      </section>




      <section className="social">


        <h2>
          Follow CLOZEE
        </h2>


        <a 
        href="https://instagram.com/clozee.lk"
        target="_blank"
        >
          Instagram 📸
        </a>


      </section>



    </div>

  );
}


export default App;