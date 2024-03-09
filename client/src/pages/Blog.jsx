import { useEffect, useState } from 'react';
import { Button, Row, Col } from 'reactstrap';
import { loadBlogConfig } from '../lib/utils/configurationUtils';
import Markdown from 'react-markdown';

import Banner from '../components/Banner';

export default function Blog() {
  const [blogConfig, setBlogConfig] = useState(null);
  const [selectedBlogConfig, setSelectedBlogConfig] = useState(null);

  useEffect(() => loadBlogConfig({ blogConfig, setBlogConfig }), [blogConfig, setBlogConfig]);

  // destructuring the contents of the blog configuration obtained from the server
  if (!blogConfig) return null;

  const { dynamic } = blogConfig;

  return (
    <div className="page-container">
      <Banner text={dynamic?.sectionTitle} width="100%" backgroundColor="#9f6f81" />
      <div className="spacer"></div>
      <div className="page">
        <div className="dynamic-blog-section">
          {selectedBlogConfig ? (
            <div className="selected-blog">
              <Row sm="12" className="service-card" noGutters>
                <Col sm="12" md="6">
                  <h3 className="service-header">{selectedBlogConfig.blogTitle}</h3>
                </Col>

                <Col sm="12" md="6">
                  <img src={selectedBlogConfig.blogImage} alt={`Image of ${selectedBlogConfig.blogTitle}`} className="service-image-col" />
                </Col>
              </Row>
              <Row sm="12" className="blog-row markdown" noGutters>
                <Markdown>{selectedBlogConfig.blogBody}</Markdown>
              </Row>
              <Row sm="12" noGutters className="blog-button-row">
                <Button className="service-button" onClick={() => setSelectedBlogConfig(null)}>
                  Go Back
                </Button>
              </Row>
            </div>
          ) : (
            dynamic?.blogsList?.map(blogObject => (
              <div key={blogObject.blogTitle} className="dynamic-blog">
                <h4>{blogObject.blogTitle}</h4>
                <img src={blogObject.blogImage} alt={`Image of ${blogObject.blogTitle}`} className="summary-blog-image" />
                <p className="dynamic-blog-summary">{blogObject.blogSummary}</p>
                <Button className="service-button" onClick={() => setSelectedBlogConfig(blogObject)}>
                  Read More
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
