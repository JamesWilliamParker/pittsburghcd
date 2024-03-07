// why.jsx
import { Link } from 'react-router-dom';
import WhyImage1 from '../assets/why_image_1.jpg';
import ServiceCard from '../components/ServiceCard'; // Adjust the path accordingly
import { Button, Card, CardHeader, CardTitle, CardBody, CardText } from 'reactstrap';

const Why = () => {
  const cardRows = [
    {
      title: 'The Customer Experience',
      cards: [
        {
          title: 'Meet & Greet Consultation',
          body: 'This is where your vision meets our expertise. Expect measurements, style and function details, Q & A, and most of all, the excitement to begin.',
        },
        {
          title: 'Showroom Visuals & Options',
          body: 'Customers typically need a “visual” sense of their custom design/ Our showroom satisfies that by providing colors, accessories, door styles, and more.',
        },
        {
          title: 'Unmatched Professional Installation',
          body: 'We’re lucky enough to have an install team with over three decades of experience. And, the experience is specific to our industry, which may be the most important aspect of the entire process.',
        },
      ],
    },
    {
      title: 'Much more than just a project',
      cards: [
        {
          title: 'Great Relationships',
          body: 'Whether you’re a Homeowner, Builder, Interior Decorator, or Real Estate Professional, our relationship typically goes beyond just “business”. In fact, our designers have been invited to family dinners and get-togethers outside of the project. ',
        },
        {
          title: 'Superior Customer Service',
          body: 'We know, superior is a strong word. But when it comes to making each and every customer happy, walking away feeling great about their experience, we live up to it, period!',
        },
        {
          title: 'Community & Attention to Other',
          body: 'Once you get to know our team, you’ll be impressed by the good we do outside of “work”. A customer once stated a perfect description of our team…….”Great work done by Good people!”',
        },
      ],
    },
  ];

  return (
    <div>
      {/* Other content on your WhyPage */}

      {/* Example usage of ServiceCard2 */}

      <ServiceCard
        reverse
        noButton
        image={WhyImage1} // Use the imported image variable
        header="The perfect combination of Quality & Beauty, tailored to your style and budget!"
        description="Each and every project is tailored to your space, style, and budget, ensuring a unique and efficient solution. Our smooth process includes a meet & greet consultation, 3D designs, showroom displays, and over three decades installation experience, resulting in us being a trusted partner in home improvement throughout the Greater Pittsburgh Region. Whether you know us as Pittsburgh Doors & Closets, or Pittsburgh Closets & Doors, we are the most experienced, customer service oriented in the industry. We will prove it from the moment we meet!"
      />
      <hr />
      {cardRows.map(item => {
        const { title, cards } = item;
        return (
          <div key={title}>
            <div className="about-header">
              <h2>{title}</h2>
              <hr></hr>
            </div>
            <div className="about-cards-row">
              {cards.map(card => {
                return (
                  <Card
                    className="my-2 about-cards"
                    color="dark"
                    outline

                    key={title + card.title}
                  >
                    <CardBody>
                      <CardTitle tag="h5">{card.title}</CardTitle>
                      <CardText>{card.body}</CardText>
                    </CardBody>
                  </Card>
                );
              })}
            </div>
          </div>
        );
      })}

      {/* Example usage of WhyCard */}

      {/* Add more instances of WhyCard as needed */}

      {/* Other content on your WhyPage */}

      {/* Example usage of Link */}
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button
          className="service-button"
          style={{
            backgroundColor: '#179d97',
            color: 'white',
            padding: '10px',
          }}
          size="lg"
        >
          <Link to="/consultation" style={{ textDecoration: 'none', color: 'white' }}>
            Free Design Consultation
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Why;
