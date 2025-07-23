import './Services.css';

const services = [
  {
    title: '24/7 Concierge Assistance',
    description: 'Anything you need, anytime you need it — your personal concierge is always ready.',
    image: '/concierge.webp',
  },
  {
    title: 'Luxury Spa Treatments',
    description: 'Rejuvenate your senses with our curated wellness therapies and indulgent rituals.',
    image: '/spa.webp',
  },
  {
    title: 'Private Dining & Poolside Events',
    description: 'Celebrate in style with chef-curated experiences and ambient views.',
    image: '/dining.webp',
  },
  {
    title: 'Helicopter Transfers',
    description: 'Arrive in unforgettable fashion with our exclusive skyline transit service.',
    image: '/helicopter.webp',
  },
  {
    title: 'Butler-On-Call',
    description: 'Discreet, elegant, ever-present — for moments when only perfection will do.',
    image: '/butler.webp',
  },
  {
    title: 'Rooftop Lounge Access',
    description: 'Skyline cocktails, live music, and an atmosphere only Paradise can offer.',
    image: '/rooftop.webp',
  },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="services-header">
        <h1>At Your Service</h1>
        <h2>Thoughtfully delivered, perfectly personalized.</h2>
        <h2>Our offerings are tailored to make your stay unforgettable</h2>
      </div>

      <div className="services-grid">
        {services.map((item, index) => (
          <div className="service-card" key={index}>
            <div
              className="service-image"
              style={{ backgroundImage: `url(${item.image})` }}
            />
            <div className="service-content">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;