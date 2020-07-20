import React, { useEffect } from 'react';

const Login = () => {
  useEffect(() => {
    const url = window.location.href;
    const hasCode = url.includes('?code=');

    if (hasCode) {
      const newUrl = url.split('?code=');
      window.history.pushState({}, '', newUrl[0]);
    }
  });

  return (
    <div>
      <a
        href={`https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`}
      >
        Login with GitHub
      </a>
    </div>
  );
};

export default Login;
