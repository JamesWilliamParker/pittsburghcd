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
          body: "Customers often seek a visual representation of their custom design. Our showroom offers a comprehensive display of colors, accessories, door styles, and more to fulfill this need!",
        },
        {
          title: "Unmatched Professional Installation",
          body: "Our installation team has over three decades of specialized experience in our industry. This expertise is crucial and sets us apart in the entire process.",
        },
      ],
    },
    {
      title: "More Than Just a Project",
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

  const descriptionComponent = (
    <>
      <p>{`Every project is meticulously customized to suit your space, style, and budget, guaranteeing a distinctive and effective solution. Our customer-centric approach includes a personalized consultation, detailed 3D designs, captivating showroom displays, and, crucially, over three decades of installation expertise.`}</p>
      <p>
        {`We prioritize a customer-focused ethos over promotional gimmicks and dubious discounts. This commitment has earned us the trust of homeowners seeking superior home storage solutions across the Greater Pittsburgh Region. We pride ourselves on being the most experienced and service-oriented company in the industry, a reputation we are eager to demonstrate from our very first meeting.`}
      </p>
    </>
  );

  return (
    <div className="page-container">
      <ServiceCard
        reverse
        noButton
        image={WhyImage1}
        header="Quality & Beauty, Tailored to YOUR Style & Budget!"
        description={descriptionComponent}
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
