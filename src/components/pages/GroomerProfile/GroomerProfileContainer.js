import React, { useEffect, useState } from 'react';
import Geocode from 'react-geocode';

import { RenderGroomerProfile } from './RenderGroomerProfile';
import { connect } from 'react-redux';
import { getGroomerInfo } from '../../../api/index';
import { updateGroomer } from '../../../api/index';

const GroomerProfileContainer = props => {
  const [contactModalVisible, setContactModalVisible] = useState(false);
  const [profileModalVisible, setProfileModalVisible] = useState(false);
  const dummyData = {
    name: 'Tony',
    description:
      'Deleniti dolorem nam. Dolores libero omnis consequatur minus illo. Cum soluta tempore quod nemo placeat ratione saepe. Sit labore reprehenderit et laborum cumque corrupti.',
    lastname: 'Lang',
    address: 'Ave L',
    latitude: '',
    longitude: '',
    zip: '76801',
    phone: '2649864723',
    email: 'Norene45@gmail.com',
    city: 'Brownwood',
    state: 'TX',
    country: 'USA',
    photo_url:
      'https://s3.amazonaws.com/uifaces/faces/twitter/nfedoroff/128.jpg',
  };
  
  const { getGroomerInfo } = props;
  const groomerId = localStorage.getItem('groomerId');

  useEffect(() => {
    getGroomerInfo(groomerId);
  }, [getGroomerInfo, groomerId]);

  const updateProfile = data => {
    props.updateGroomer(data, groomerId);
  };

  const showContactModal = () => {
    setContactModalVisible(true);
  };

  const handleContactModalClose = e => {
    setContactModalVisible(false);
  };

  const showProfileModal = () => {
    setProfileModalVisible(true);
  };

  const handleProfileModalClose = e => {
    setProfileModalVisible(false);
  };
  // set Google Maps Geocoding API for purposes of quota management. Its optional but recommended.
  Geocode.setApiKey(process.env.REACT_APP_API_KEY);

  // set response language. Defaults to english.
  Geocode.setLanguage('en');

  // set response region. Its optional.
  // A Geocoding request with region=es (Spain) will return the Spanish city.
  Geocode.setRegion('us');

  // Enable or disable logs. Its optional.
  Geocode.enableDebug();

  // Get latitude & longitude from address.
  Geocode.fromAddress(
    dummyData.address + dummyData.state + dummyData.country
  ).then(
    response => {
      const { lat, lng } = response.results[0].geometry.location;
      dummyData.latitude = lat;
      dummyData.longitude = lng;
    },
    error => {
      console.error(error);
    }
  );

  if (props.groomer && props.groomer.hasOwnProperty('name')) {
    return (
      <RenderGroomerProfile
        contactModalVisible={contactModalVisible}
        showContactModal={showContactModal}
        handleContactModalClose={handleContactModalClose}
        profileModalVisible={profileModalVisible}
        showProfileModal={showProfileModal}
        handleProfileModalClose={handleProfileModalClose}
        groomer={props.groomer}
        updateProfile={updateProfile}
        error={props.error}
        status={props.status}
      />
    );
  } else if (props.isFetching === true) {
    return <div>Loading</div>;
  } else {
    return <div>There was a problem loading this page</div>;
  }
};

const mapStateToProps = state => {
  return {
    groomer: state.groomerReducer.groomer,
    isFetching: state.groomerReducer.isFetching,
    error: state.groomerReducer.error,
    status: state.groomerReducer.status,
  };
};

export default connect(mapStateToProps, { getGroomerInfo, updateGroomer })(
  GroomerProfileContainer
);
