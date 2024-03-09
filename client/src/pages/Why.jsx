import { Link } from "react-router-dom";
import WhyImage1 from "../assets/why_image_1.jpg";
import ServiceCard from "../components/ServiceCard"; // Adjust the path accordingly
import { Button, Card, CardTitle, CardBody, CardText } from "reactstrap";

const Why = () => {
  const cardRows = [
    {
      title: "The Customer Experience",
      cards: [
        {
          title: "Meet & Greet Consultation",
          body: "This is where your vision meets our expertise. Expect measurements, style and function details, Q & A, and most of all, the excitement to begin.",
        },
        {
          title: "Showroom Visuals & Options",
          body: "Customers typically need a “visual” sense of their custom design/ Our showroom satisfies that by providing colors, accessories, door styles, and more.",
        },
        {
          title: "Unmatched Professional Installation",
          body: "We’re lucky enough to have an install team with over three decades of experience. And, the experience is specific to our industry, which may be the most important aspect of the entire process.",
        },
      ],
    },
    {
      title: "Much more than just a project",
      cards: [
        {
          title: "Great Relationships",
          body: "Whether you’re a Homeowner, Builder, Interior Decorator, or Real Estate Professional, our relationship typically goes beyond just “business”. In fact, our designers have been invited to family dinners and get-togethers outside of the project! ",
        },
        {
          title: "Superior Customer Service",
          body: "We know, superior is a strong word. But when it comes to making each and every customer happy, walking away feeling great about their experience, we live up to it, period!",
        },
        {
          title: "Community & Humanity",
          body: "The good our team and their families do outside of “work” is an important part of our culture. To quote our customer, who once gave a perfect description of our team…….”Great work done by Good people!”",
        },
      ],
    },
  ];

  return (
    <div className="page-container">
      <ServiceCard
        reverse
        noButton
        image={WhyImage1}
        header="Quality & Beauty, Tailored to YOUR Style & Budget!"
        description="Each and every project is tailored to your space, style, and budget, ensuring a unique and efficient solution. Our customer-centric experience includes a meet & greet consultation, 3D designs, showroom displays, and most importantly, over three decades installation experience. 
We firmly believe in being customer-focused, less 'promotional' without tactics and questionable discounts. The result has made us a TRUSTED partner in home storage improvement throughout the Greater Pittsburgh Region. Overall, we are the most experienced, customer service-oriented in the industry. We will prove it from the moment we meet!"
      />

      <div
        style={{
          textAlign: "center",
          marginTop: "-30px",
          marginBottom: "30px",
        }}
      >
        <Button
          className="service-button"
          style={{
            backgroundColor: "#179d97",
            color: "white",
            padding: "10px",
          }}
          size="lg"
        >
          <Link
            to="/consultation"
            style={{ textDecoration: "none", color: "white" }}
          >
            Free Design Consultation
          </Link>
        </Button>
      </div>

      {cardRows.map((item) => {
        const { title, cards } = item;
        return (
          <div key={title}>
            <div className="about-header">
              <h2>{title}</h2>
              <hr></hr>
            </div>
            <div className="about-cards-row">
              {cards.map((card) => {
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

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Button
          className="service-button"
          style={{
            backgroundColor: "#179d97",
            color: "white",
            padding: "10px",
          }}
          size="lg"
        >
          <Link
            to="/consultation"
            style={{ textDecoration: "none", color: "white" }}
          >
            Free Design Consultation
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Why;
