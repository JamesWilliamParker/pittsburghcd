import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import OriginalLogo from '../assets/pcd_logo_v1.png';

const Careers = () => {
  return (
    <Container sm="12" className="page-container">
      <Row sm="12" className="p-4">
        <Col>
          <h1 className="text-center pt-4">Join Our Team</h1>
          <img src={OriginalLogo} alt="Careers Image" className="img-fluid d-block mx-auto mt-4" style={{ maxWidth: '200px' }} />

          <p className="mt-4 justify-text">
            At Pittsburgh Doors and Closets, we're not just offering jobs; we're offering careers that make a difference. As a locally owned business, we pride ourselves on a family-like atmosphere where fairness, respect, and compensation are foundational principles. We understand that our strength
            lies in our team, which is why we're committed to creating an environment that supports personal growth and learning. Here, you'll have the unique opportunity to learn from some of the most experienced installation technicians in the industry. Whether you're just starting out or looking
            to bring your expertise to a new setting, we offer a space where your work is valued and your professional development is taken seriously. We're looking for individuals who share our dedication to excellence, our passion for improving homes, and our commitment to delivering outstanding
            customer service. If you're ready to start your career with a company that truly cares, we'd love to hear from you.{' '}
            <a href="mailto:closets@pittdac.com" className="career-link">
              Simply click here
            </a>{' '}
            to email us or send your resume directly to closets@pittdac.com. Let's build beautiful spaces together!
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Careers;
