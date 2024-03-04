import { useEffect, useState } from 'react';
import { Button, Row, Col } from 'reactstrap';
import { loadBlogConfig } from '../lib/utils/configurationUtils';
import Markdown from 'react-markdown';

import Banner from '../components/Banner';

export default function Blog() {
  const [blogConfig, setBlogConfig] = useState(null);
  const [selectedBlogConfig, setSelectedBlogConfig] = useState(null);

  useEffect(() => loadBlogConfig({ blogConfig, setBlogConfig }), [blogConfig, setBlogConfig]);

  console.log({ blogConfig });

  // destructuring the contents of the blog configuration obtained from the server
  if (!blogConfig) return null;

  const { title, fixed, dynamic } = blogConfig;

  return (
    <>
      <Banner text={title.toUpperCase()} width="100%" backgroundColor="#9f6f81" />
      <div className="page">
        <div className="blog-section">
          <h3>{fixed?.sectionOneTitle}</h3>
        </div>
        <div className="blog-section">
          <h3>{fixed?.sectionTwoTitle}</h3>
        </div>
        <div className="blog-section">
          <h3>{fixed?.sectionThreeTitle}</h3>
        </div>
        <div className="blog-section">
          <h3>{dynamic?.sectionTitle}</h3>
          <div className="dynamic-blog-section">
            {selectedBlogConfig ? (
              <div className="selected-blog">
                <Row sm="12" className="blog-row" noGutters>
                  <Col sm="9">
                    <h2>{selectedBlogConfig.blogTitle}</h2>
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
    </>
  );
}
