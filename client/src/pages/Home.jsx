import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => (
  <section className="home-section">
    <div className="home-section-background">
            <div className="hero-image">
  <div className="hero-text">
    <h1>Welcome to Hotel Paradise</h1>
    <h2>Discover a stay that exceeds expectations.</h2>
    <p>Your comfort is our priority</p>

  </div>
</div>


    <div className="home-container-details-room">
      <div className="home-container-details-text">
        <h1>Modern comfort meets timeless simplicity</h1>
        <h2>
          Step into a room designed for pure relaxation — soft lighting, natural tones, and stylish decor blend to create a space that feels like home away from home.
        </h2>
                <div className="home-container-details-room-button">
<Link to="/rooms">View More</Link>        </div>

      </div>
      <div className="home-container-details-image1" />
    </div>

    <div className="home-container-details-food">
      <div className="home-container-details-food-image1">

      </div>
      <div className="home-container-details-food-text">
        <h1>Gourmet moments, served with grace</h1>
        <h2>Every dish, a moment of indulgence — served with precision, elegance, and care. Experience gourmet dining brought right to your room.</h2>
              <div className="home-container-details-button">
        <Link to ="/services">Services</Link>
      </div>
      </div>
    </div>

    <div className="home-container-details-pool">
      <div className="home-container-details-pool-text">
        <h1>Unwind Beside the Water's Edge</h1>
        <h2>Dive into serenity with our crystal-clear pool — a tranquil retreat perfect for morning laps, lazy afternoons, or golden hour relaxation. With comfortable loungers and ambient surroundings, it’s your private escape under open skies.</h2>
        <div className="home-container-details-pool-text-button">
          <Link to="/gallery">View Galery</Link>
        </div>
      </div>
      <div className="home-container-details-pool-image1"></div>

    </div>
        </div>


  </section>);

export default Home;
