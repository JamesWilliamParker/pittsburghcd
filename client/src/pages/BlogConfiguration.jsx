import { useEffect, useState } from 'react';
import { Button, Row, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { loadBlogConfig, updateBlogConfig } from '../lib/utils/configurationUtils';
import Markdown from 'react-markdown';
import WithAuth from '../components/WithAuth';

function BlogConfiguration() {
  const [blogConfig, setBlogConfig] = useState(null);
  const [blogIndex, setBlogIndex] = useState(null);

  // Form State:
  const [newBlogTitle, setNewBlogTitle] = useState('');
  const [newBlogImage, setNewBlogImage] = useState('');
  const [newBlogSummary, setNewBlogSummary] = useState('');
  const [newBlogBody, setNewBlogBody] = useState('');

  // MODAL STUFF (POPUP)
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  useEffect(() => loadBlogConfig({ blogConfig, setBlogConfig }), [blogConfig, setBlogConfig]);

  if (!blogConfig) return null;

  const { dynamic } = blogConfig;

  const deleteBlogConfig = () => {
    const newBlogList = [...dynamic.blogsList];
    if (blogIndex < newBlogList.length) {
      newBlogList.splice(blogIndex, 1);
    }
    const newBlogConfig = { ...blogConfig, dynamic: { ...dynamic, blogsList: newBlogList } };

    // UPDATE SERVER
    updateBlogConfig({
      blogConfig: newBlogConfig,
      callback: serverResponse => {
        toggle();
        setBlogConfig(serverResponse);
      },
    });
  };

  const stageBlogForDeletion = index => {
    setBlogIndex(index);
    setModal(true);
  };

  const addNewBlog = () => {
    if (newBlogTitle && newBlogImage && newBlogSummary && newBlogBody) {
      const newBlogItem = {};
      newBlogItem.blogTitle = newBlogTitle;
      newBlogItem.blogSummary = newBlogSummary;
      newBlogItem.blogImage = newBlogImage;
      newBlogItem.blogBody = newBlogBody;

      const newBlogList = [...dynamic.blogsList];
      const newBlogConfig = { ...blogConfig, dynamic: { ...dynamic, blogsList: [newBlogItem, ...newBlogList] } };

      setBlogConfig(newBlogConfig);

      // UPDATE SERVER
      updateBlogConfig({
        blogConfig: newBlogConfig,
        callback: serverResponse => {
          setBlogConfig(serverResponse);

          // Clear Local variables for each field after adding it.
          setNewBlogTitle('');
          setNewBlogImage('');
          setNewBlogSummary('');
          setNewBlogBody('');
        },
      });
    }
  };

  return (
    <div className="page">
      <h2>BLOG CONFIGURATION</h2>
      <div className="blog-section">
        <h4>Complete this form and click Add New Blog, then your blog will be added to the top of the list.</h4>
        <Input type="text" onChange={e => setNewBlogTitle(e.target.value)} placeholder="New Blog Title" required />
        <Input type="text" onChange={e => setNewBlogImage(e.target.value)} placeholder="New Blog Image URL like: https://cdn.pixabay.com/photo/2019/09/27/10/00/children-4508017_960_720.jpg" required />
        <Input type="textarea" rows="3" onChange={e => setNewBlogSummary(e.target.value)} placeholder="New Blog Summary" required />
        <Input type="textarea" rows="10" onChange={e => setNewBlogBody(e.target.value)} placeholder="## New Blog Body in Markdown Format." required />
        <Row sm="12" className="blog-row" noGutters>
          <Button color="primary" onClick={addNewBlog}>
            Add New Blog
          </Button>
        </Row>
        <div className="divider"></div>
        <p>Preview of Blog Body Markdown:</p>
        <Row sm="12" className="markdown" noGutters>
          <Markdown>{newBlogBody}</Markdown>
        </Row>
      </div>
      <div className="blog-section">
        <h3>Below you can delete existing blogs by clicking the delete button on each summary section</h3>
        <div className="dynamic-blog-section">
          {dynamic?.blogsList?.map((blogObject, index) => (
            <div key={blogObject.blogTitle} className="dynamic-blog">
              <h4>{blogObject.blogTitle}</h4>
              <img src={blogObject.blogImage} alt={`Image of ${blogObject.blogTitle}`} className="summary-blog-image" />
              <p className="dynamic-blog-summary">{blogObject.blogSummary}</p>
              <Button color="danger" onClick={() => stageBlogForDeletion(index)}>
                Delete Blog Entry
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Are you sure you want to delete this blog?</ModalHeader>
        <ModalBody>This operation is permanent and will be performed automatically after clicking Delete</ModalBody>
        <ModalFooter>
          <Button color="danger" onClick={deleteBlogConfig}>
            Delete
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

const BlogConfigurationWithAuth = WithAuth(BlogConfiguration);

export default BlogConfigurationWithAuth;
