import React, { useEffect } from 'react';

function WithAuth(Component) {
  return function AuthenticatedComponent(props) {
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (!token) {
        window.location.href = '/login';
      }
    });

    return <Component {...props} />;
  };
}

export default WithAuth;
