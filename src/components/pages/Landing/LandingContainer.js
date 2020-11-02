import React from 'react';
import RenderLandingPage from './RenderLandingPage';
import { ButtonSmall } from 'antd';
function LandingContainer({ LoadingComponent }) {
  return (
    <>
      <RenderLandingPage />
      <ButtonSmall />
    </>
  );
}

export default LandingContainer;
