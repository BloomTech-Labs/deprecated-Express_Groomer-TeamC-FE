import React, { useState } from 'react';
import { RenderCustomerDashboard } from './RenderCustomerDashboard';

const CustomerDashboardContainer = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [home, setHome] = useState(true);
  const [profile, setProfile] = useState(false);
  const [groomers, setGroomers] = useState(false);
  const [pets, setPets] = useState(false);

  const onCollapse = collapsed => {
    setCollapsed(collapsed);
  };

  const viewHome = () => {
    setProfile(false);
    setGroomers(false);
    setPets(false);
    setHome(true);
  };

  const viewProfile = () => {
    setHome(false);
    setGroomers(false);
    setPets(false);
    setProfile(true);
  };

  const viewGroomers = () => {
    setHome(false);
    setProfile(false);
    setPets(false);
    setGroomers(true);
  };

  const viewPets = () => {
    setHome(false);
    setProfile(false);
    setGroomers(false);
    setPets(true);
  };

  return (
    <RenderCustomerDashboard
      collapsed={collapsed}
      onCollapse={onCollapse}
      home={home}
      viewHome={viewHome}
      profile={profile}
      viewProfile={viewProfile}
      groomers={groomers}
      viewGroomers={viewGroomers}
      pets={pets}
      viewPets={viewPets}
    />
  );
};

export default CustomerDashboardContainer;
