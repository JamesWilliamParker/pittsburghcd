import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const Careers = () => {
  return (
    <div className="container">
      <Card className="my-2" style={{ width: '80%', maxWidth: '800px', margin: 'auto' }}>
        <CardImg
          alt="Card image cap"
          src="https://picsum.photos/900/180"
          style={{
            height: 'auto',
            width: '100%'
          }}
          top
        />
        <CardBody>
          <CardTitle tag="h5">
            Join US
          </CardTitle>
          <CardText>
            At Pittsburgh Closets and Doors, we're not just offering jobs; we're offering careers that make a difference. As a locally owned business, we pride ourselves on a family-like atmosphere where fairness, respect, and compensation are foundational principles. We understand that our strength lies in our team, which is why we're committed to creating an environment that supports personal growth and learning. Here, you'll have the unique opportunity to learn from some of the most experienced installation technicians in the industry. Whether you're just starting out or looking to bring your expertise to a new setting, we offer a space where your work is valued and your professional development is taken seriously. We're looking for individuals who share our dedication to excellence, our passion for improving homes, and our commitment to delivering outstanding customer service. If you're ready to start your career with a company that truly cares, we'd love to hear from you.Simply email us and send your resume directly to closets@pittdac.com. Let's build beautiful spaces together. 
          </CardText>
          <CardText>
            <small className="text-muted">
              Last updated 3 mins ago
            </small>
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Careers;
