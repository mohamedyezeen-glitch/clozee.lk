import "./App.css";

function App() {

  const products = [
    {
      name: "Oversized Black Tee",
      price: "LKR 3,490",
      tag: "NEW DROP",
      image: "/images/tshirt.jpg.jpg"
    },
    {
      name: "Streetwear White Tee",
      price: "LKR 3,990",
      tag: "POPULAR",
      image: "/images/white.png"
    },
    {
      name: "Premium Signature Tee",
      price: "LKR 4,490",
      tag: "LIMITED",
      image: "/images/whitetshirt.png"
    }
  ];


  const reviews = [
    {
      name: "Customer",
      text: "Amazing quality and perfect oversized fit."
    },
    {
      name: "Customer",
      text: "Premium feel with fast delivery."
    },
    {
      name: "Customer",
      text: "CLOZEE has the best streetwear style."
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
          <a href="#shop">SHOP</a>
          <a href="#about">ABOUT</a>
          <a href="#contact">CONTACT</a>
        </nav>

      </header>



      {/* HERO */}

      <section className="hero" id="home">

        <div className="hero-content">

          <h1>CLOZEE</h1>

          <h2>WEAR YOUR IDENTITY</h2>

          <p>
            Premium streetwear created for the next generation.
          </p>

          <a className="shop-btn" href="#shop">
            SHOP COLLECTION
          </a>

        </div>

      </section>



      {/* PRODUCTS */}

      <section className="products" id="shop">

        <h2>
          NEW COLLECTION
        </h2>


        <div className="product-grid">


        {products.map((item,index)=>(

          <div className="card" key={index}>


            <span>
              {item.tag}
            </span>


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



            <div className="sizes">
              S &nbsp; M &nbsp; L &nbsp; XL &nbsp; XXL
            </div>



            <a
            className="order"
            href="https://wa.me/94722884573?text=Hi%20CLOZEE,%20I%20want%20to%20order"
            target="_blank"
            rel="noopener noreferrer"
            >
              📲 Order WhatsApp
            </a>


          </div>


        ))}


        </div>


      </section>




      {/* WHY CLOZEE */}

      <section className="features">

        <h2>
          WHY CLOZEE
        </h2>


        <div className="feature-grid">

          <div>
            🚚
            <h3>Fast Delivery</h3>
            <p>Islandwide delivery available</p>
          </div>


          <div>
            👕
            <h3>Premium Quality</h3>
            <p>Comfortable luxury streetwear</p>
          </div>


          <div>
            🔄
            <h3>Easy Exchange</h3>
            <p>Customer friendly service</p>
          </div>


        </div>


      </section>




      {/* ABOUT */}

      <section className="about" id="about">

        <h2>
          ABOUT CLOZEE
        </h2>


        <p>
          CLOZEE represents confidence, comfort and individuality.
          Every piece is designed to help you wear your identity.
        </p>


      </section>




      {/* LIMITED DROP */}

      <section className="drop">

        <h2>
          LIMITED DROP
        </h2>


        <p>
          Exclusive collections. Limited pieces.
        </p>


        <a href="#shop">
          SHOP NOW
        </a>


      </section>




      {/* REVIEWS */}

      <section className="reviews">

        <h2>
          CUSTOMER LOVE
        </h2>


        <div className="review-grid">


        {reviews.map((review,index)=>(

          <div key={index}>

            ⭐⭐⭐⭐⭐

            <p>
              {review.text}
            </p>

            <h4>
              - {review.name}
            </h4>

          </div>

        ))}


        </div>


      </section>




      {/* CONTACT */}

      <section className="contact" id="contact">

        <h2>
          CONNECT WITH CLOZEE
        </h2>


        <div className="contact-buttons">


          <a
          href="https://wa.me/94722884573"
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
          href="mailto:clozeelk@gmail.com"
          >
            ✉️ Gmail
          </a>


          <a
          href="https://www.facebook.com/profile.php?id=61573784430882"
          target="_blank"
          rel="noopener noreferrer"
          >
             👍 Facebook
          </a>


        </div>


      </section>




      <footer>

        © 2026 CLOZEE. All Rights Reserved.

      </footer>



      <a
      className="floating-whatsapp"
      href="https://wa.me/94722884573"
      target="_blank"
      rel="noopener noreferrer"
      >
        💬
      </a>


    </div>

  );

}


export default App;