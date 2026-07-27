import "./App.css";

function App() {

  const products = [
    {
      name: "Oversized Black Tee",
      price: "LKR 3,490",
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
      name: "Urban Streetwear Tee",
      price: "LKR 3,990",
      image:
        "https://images.unsplash.com/photo-1503341504253-dff4815485f1"
    },
    {
      name: "Premium Collection",
      price: "LKR 4,490",
      image:
        "https://images.unsplash.com/photo-1523381294911-8d3cead13475"
    }
  ];


  return (

    <div className="website">


      {/* HEADER */}

      <header>

        <div className="logo">
          CLOZEE
        </div>


        <nav>
          <a href="#home">HOME</a>
          <a href="#collection">COLLECTION</a>
          <a href="#contact">CONTACT</a>
        </nav>

      </header>



      {/* HERO SECTION */}

      <section className="hero" id="home">

        <div className="hero-content">

          <h1>
            CLOZEE
          </h1>


          <h2>
            WEAR YOUR IDENTITY
          </h2>


          <p>
            Premium streetwear created for the next generation.
          </p>



          <a 
          className="shop-btn"
          href="#collection"
          >
            SHOP COLLECTION
          </a>


        </div>


      </section>




      {/* PRODUCTS */}


      <section 
      className="products"
      id="collection"
      >


        <h2>
          Latest Collection
        </h2>



        <div className="product-grid">


        {products.map((item,index)=>(


          <div className="card" key={index}>


            <img 
            src={item.image}
            alt={item.name}
            />


            <h3>
              {item.name}
            </h3>


            <p>
              {item.price}
            </p>



            <a
            className="order"
            href="https://wa.me/94722884573?text=Hi%20CLOZEE,%20I%20want%20to%20order"
            target="_blank"
            rel="noopener noreferrer"
            >
              📲 Order on WhatsApp
            </a>



          </div>


        ))}


        </div>


      </section>




      {/* SOCIAL */}


      <section className="social">

  <h2>
    Follow CLOZEE
  </h2>

  <a
  className="instagram"
  href="https://instagram.com/clozee.lk"
  target="_blank"
  rel="noopener noreferrer"
  >
    📸 Follow Instagram
  </a>

</section>


{/* CONTACT SECTION */}

<section className="contact">

  <h2>
    Contact CLOZEE
  </h2>

  <p>
    Connect with us for orders and support
  </p>


  <div className="contact-buttons">


    <a
    href="https://wa.me/94722884573?text=Hi%20CLOZEE"
    target="_blank"
    rel="noopener noreferrer"
    >
      📲 WhatsApp
    </a>


    <a
    href="https://instagram.com/clozee.lk"
    target="_blank"
    rel="noopener noreferrer"
    >
      📸 Instagram
    </a>


    <a
    href="https://facebook.com/YOURFACEBOOK"
    target="_blank"
    rel="noopener noreferrer"
    >
      👍 Facebook
    </a>


    <a href="mailto:clozeelk@gmail.com">
      ✉️ Gmail
    </a>


  </div>

      </section>


    </div>

  );

}

export default App;