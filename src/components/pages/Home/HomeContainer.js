import React, { useState, useEffect, useMemo } from 'react';
import { Redirect } from 'react-router-dom';
import { useOktaAuth } from '@okta/okta-react';
import { getUserData } from '../../../api/index.js';

import RenderHomePage from './RenderHomePage';

function HomeContainer({ LoadingComponent }) {
  const { authState, authService } = useOktaAuth();
  const [userInfo, setUserInfo] = useState(null);
  // eslint-disable-next-line
  const [memoAuthService] = useMemo(() => [authService], []);

  const [oktaIds, setOktaIds] = useState([]);

  // getUserData().then(response => {
  //   const oktaUserIds = response.filter(user => user.oktaId);
  //   setOktaIds(...oktaUserIds);
  // });

  useEffect(() => {
    let isSubscribed = true;

    memoAuthService
      .getUser()
      .then(info => {
        // if user is authenticated we can use the authService to snag some user info.
        // isSubscribed is a boolean toggle that we're using to clean up our useEffect.
        if (isSubscribed) {
          setUserInfo(info);
          console.log(info);
        }
      })
      .catch(err => {
        isSubscribed = false;
        return setUserInfo(null);
      });
    return () => (isSubscribed = false);
  }, [memoAuthService]);

  return (
    <>
      {authState.isAuthenticated && !userInfo && (
        <LoadingComponent message="Fetching user profile..." />
      )}

      {authState.isAuthenticated && userInfo ? (
        <RenderHomePage userInfo={userInfo} authService={authService} />
      ) : (
        // you can either render a registration component here,
        <h1>you need to register before you can view dashboard</h1>
        // OR you can redirect to it's own registration page
        // <Redirect to={'/registration'} />
      )}

      {/* {authState.isAuthenticated &&
      userInfo &&
      oktaIds &&
      !(userInfo.oktaId in oktaIds) ? (
        <RenderHomePage userInfo={userInfo} authService={authService} />
      ) : (
        // you can either render a registration component here,
        <h1>you need to register before you can view dashboard</h1>
        // OR you can redirect to it's own registration page
        // <Redirect to={'/registration'} />
      )} */}
    </>
  );
}

export default HomeContainer;
