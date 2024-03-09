import Carousel from '../components/Carousel';
import ReviewCard from '../components/ReviewCard';
import { Button, Row, Col } from 'reactstrap';
import HouseLogo from '../assets/footer_logo_image.png';

const Home = () => {
  // Manually set data for three cards *Review Cards*
  const cardsData = [
    {
      authorName: 'Dan O.',
      rating: 5,
      feedback:
        'We absolutely love our new walk in closet! We saw our neighbor’s closet and just had to schedule a consultation. As our neighbors mentioned, the entire experience couldn’t have been better. Oh, and they did our mudroom too. It is modernized, and perfect for our family of 3, soon to be 4! It seems they’re a little more known for offering interior and exterior doors, but I’d definitely recommend them for storage areas as well!',
    },
    {
      authorName: 'Josh D.',
      rating: 5,
      feedback:
        'Scott and his team installed 12 news doors in our house, including in 3 doorways where there wasn’t an already pre-existing door (and in one of those doors they also installed a cat door for us). The doors look amazing and work great! For brand new, perfectly measured custom doors, the price was reasonable and well worth it. The overall process took a couple months—most of which was just spent waiting on the doors to be built and delivered. Once all the doors were ready, Scott and his team had all the doors installed in our home and were cleaned up within a few hours. They were great to work with, easy to get in touch with, provided a ton of helpful information, and they were always respectful of our home and our pets! We would highly recommend!',
    },
    {
      authorName: 'Madeline V.',
      rating: 5,
      feedback: 'I can’t say enough positive things about Pittsburgh Doors & Closets. We recently had thirteen doors in our townhome replaced as well as the two master bedroom closets fully.',
    },
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      <Carousel />
      <Row className="mt-4 p-5 justify-text">
        <Col sm="12" lg="8" className="offset-lg-1">
          {/* Logo shows up when small screen atop the text */}
          <Row sm="12" className="d-flex d-lg-none">
            <img src={HouseLogo} alt="Careers Image" className="mx-auto" style={{ maxWidth: '200px' }} />
          </Row>
          <Row sm="12" className="mt-3">
            {/* Logo shows up  when on larger screens next to the text*/}
            <Col sm="12" lg="4" className="d-none d-lg-flex flex-end-row">
              <img src={HouseLogo} alt="Careers Image" className="" style={{ maxWidth: '200px' }} />
            </Col>
            <Col sm="12" lg="8" className="d-flex flex-end-bottom">
              <p>
                We are a Pittsburgh-based company passionate about transforming homes with custom designed whole-home storage options and doors. Our mission is simple: To deliver personalized, innovative organized spaces and door solutions with quality craftsmanship and unmatched customer service,
                while enhancing the beauty and functionality of every Greater Pittsburgh Area home.
              </p>
            </Col>
          </Row>
        </Col>
      </Row>
      <Button size="lg" className="service-button" href="/consultation">
        Free Design Consultation
      </Button>
      <div className="card-container mt-5">
        {cardsData.map((data, index) => (
          <ReviewCard key={index} {...data} />
        ))}
      </div>
      <Button className="service-button mb-5" size="lg" href="/consultation">
        Free Design Consultation
      </Button>
    </div>
  );
};

export default Home;
