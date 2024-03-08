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

  const { title, dynamic } = blogConfig;

  return (
    <div className="page-container">
      <Banner text={dynamic?.sectionTitle} width="100%" backgroundColor="#9f6f81" />
      <div className="blog">
        <div className="blog-section">
          <div className="dynamic-blog-section">
            {selectedBlogConfig ? (
              <div className="selected-blog">
                <Row sm="12" className="blog-row" noGutters>
                  <Col sm="9">
                    <h3>{selectedBlogConfig.blogTitle}</h3>
                  </Col>
                  <Col sm="3" className="right-col">
                    <Button onClick={() => setSelectedBlogConfig(null)}>Go Back</Button>
                  </Col>
                </Row>
                <Row sm="12" className="blog-row" noGutters>
                  <img src={selectedBlogConfig.blogImage} alt={`Image of ${selectedBlogConfig.blogTitle}`} className="main-blog-image" />
                </Row>
                <Row sm="12" className="blog-row" noGutters>
                  <Markdown>{selectedBlogConfig.blogBody}</Markdown>
                </Row>
                <Row sm="12" className="blog-row" noGutters>
                  <Button onClick={() => setSelectedBlogConfig(null)}>Go Back</Button>
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
    </div>
  );
}
