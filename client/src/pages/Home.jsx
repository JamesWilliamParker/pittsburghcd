import Carousel from '../components/Carousel';
import ReviewCard from '../components/ReviewCard';
import { Button } from 'reactstrap';

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
    <div style={{ background: '#f2f2f2', minHeight: '100vh' }}>
      <Carousel />
      <div className="card-container mt-5">
        {cardsData.map((data, index) => (
          <ReviewCard key={index} {...data} />
        ))}
      </div>
      <Button
        className="service-button"
        style={{
          backgroundColor: '#179d97',
          color: 'white',
          padding: '20px 30px', // Changes Button Size
          marginTop: '170px',
          marginBottom: '90px', // Add margin to the bottom of the button
          fontSize: '30px',
          transition: 'background-color 0.3s', // Smooth transition
        }}
        href="/consultation"
        onMouseOver={e => (e.target.style.backgroundColor = '#9f6f81')}
        onMouseOut={e => (e.target.style.backgroundColor = '#179d97')}
      >
        Free Design Consultation
      </Button>
    </div>
  );
};

export default Home;
