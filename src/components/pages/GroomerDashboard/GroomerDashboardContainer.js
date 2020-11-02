import React, { useState } from 'react';
import { RenderGroomerDashboard } from './RenderGroomerDashboard';

const GroomerDashboardContainer = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [home, setHome] = useState(true);
  const [profile, setProfile] = useState(false);
  const [appointments, setAppointments] = useState(false);

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  const viewHome = () => {
    setProfile(false);
    setAppointments(false);
    setHome(true);
  };

  const viewProfile = () => {
    setHome(false);
    setAppointments(false);
    setProfile(true);
  };

  const viewGroomers = () => {
    setHome(false);
    setProfile(false);
    setAppointments(true);
  };

  return (
    <RenderGroomerDashboard
      collapsed={collapsed}
      onCollapse={onCollapse}
      home={home}
      viewHome={viewHome}
      profile={profile}
      viewProfile={viewProfile}
      appointments={appointments}
      viewGroomers={viewGroomers}
    />
  );
};

export default GroomerDashboardContainer;
