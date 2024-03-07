import axios from 'axios';

export const loadBlogConfig = ({ blogConfig, setBlogConfig }) => {
  if (!blogConfig) {
    axios.get('/api/configurations/default/blog').then(response => {
      if (response.data) setBlogConfig(response.data);
    });
  }
};

export const updateBlogConfig = ({ blogConfig, callback }) => {
  if (blogConfig) {
    axios.put('/api/configurations/default', { data: blogConfig, name: 'blog' }).then(response => {
      if (response.data) callback(blogConfig);
    });
  }
};
