import React from 'react';

const TestimonialCard = ({ quote, author, location, imageUrl }) => {
  return (
    <div className="testimonial-card">
      <div className="testimonial-image">
        <img src={imageUrl} alt={author} />
      </div>
      <div className="testimonial-content">
        <p className="testimonial-quote">{quote}</p>
        <div className="testimonial-author">
          <h4>{author}</h4>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "Cartagena superó todas mis expectativas. La ciudad amurallada es mágica y la comida es increíble.",
      author: "María González",
      location: "Madrid, España",
      imageUrl: "https://images.pexels.com/photos/1036623/pexels-photo-1036623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      quote: "Las playas de las Islas del Rosario son un paraíso. Definitivamente regresaré pronto con toda mi familia.",
      author: "John Smith",
      location: "Nueva York, USA",
      imageUrl: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    },
    {
      quote: "La combinación de historia, cultura y playa hace de Cartagena un destino único que recomiendo a todos.",
      author: "Ana Martínez",
      location: "Buenos Aires, Argentina",
      imageUrl: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="section-title">
        <h2>Lo que dicen nuestros viajeros</h2>
      </div>
      <div className="testimonials-grid">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard key={index} {...testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;