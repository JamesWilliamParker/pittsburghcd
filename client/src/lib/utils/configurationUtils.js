import axios from 'axios';

// export const loadBlogConfig = ({ blogConfig, setBlogConfig }) => {
//   if (!blogConfig) {
//     axios.get('/api/configurations/default/blog').then(response => {
//       if (response.data) setBlogConfig(response.data);
//     });
//   }
// };

// export const updateBlogConfig = ({ blogConfig, callback }) => {
//   if (blogConfig) {
//     axios.put('/api/configurations/default', { data: blogConfig, name: 'blog' }).then(response => {
//       if (response.data) callback(blogConfig);
//     });
//   }
// };

export const loadBlogConfig = ({ blogConfig, setBlogConfig }) => {
  if (!blogConfig) {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .get('/api/configurations/default/blog', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(response => {
          if (response.data) setBlogConfig(response.data);
        })
        .catch(error => {
          console.error('Error loading blog config:', error);
          window.location.href = '/login';
        });
    } else {
      window.location.href = '/login';
      console.error('JWT token is missing');
    }
  }
};

export const updateBlogConfig = ({ blogConfig, callback }) => {
  if (blogConfig) {
    const token = localStorage.getItem('token');
    if (token) {
      axios
        .put(
          '/api/configurations/default',
          { data: blogConfig, name: 'blog' },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(response => {
          if (response.data) callback(blogConfig);
        })
        .catch(error => {
          console.error('Error updating blog config:', error);
        });
    } else {
      window.location.href = '/login';
      console.error('JWT token is missing');
    }
  }
};
