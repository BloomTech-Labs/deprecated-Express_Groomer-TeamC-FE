import React from 'react';
import { Row, Col, Avatar, Modal, Button, Breadcrumb, Form, Input } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import MyMap from '../../../components/MyMap/MyMap';
import './style.css';

const DemoBox = props => (
  <div className={`height-${props.value}`}>{props.children}</div>
);

export const RenderGroomerProfile = props => {
  return (
    <>
      <Modal
        title="Contact info"
        visible={props.contactModalVisible}
        onOk={props.handleContactModalClose}
        onCancel={props.handleContactModalClose}
        footer={[
          <Button key="back" onClick={props.handleContactModalClose}>
            Close
          </Button>,
        ]}
      >
        <p>Phone number: {props.dummyData.phone}</p>
        <p>Email: {props.dummyData.email}</p>
      </Modal>
      <Modal
        title="Edit profile"
        visible={props.profileModalVisible}
        onOk={props.handleProfileModalClose}
        onCancel={props.handleProfileModalClose}
        footer={[
          <Button key="back" onClick={props.handleProfileModalClose}>
            Close
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={props.handleProfileModalClose}
          >
            Update
          </Button>,
        ]}
      >
        <Form.Item label="First Name" name="name">
          <Input placeholder={props.dummyData.name} />
        </Form.Item>
        <Form.Item label="Last Name" name="lastname">
          <Input placeholder={props.dummyData.lastname} />
        </Form.Item>
        <Form.Item label="Address" name="address">
          <Input placeholder={props.dummyData.address} />
        </Form.Item>
        <Form.Item label="Zip Code" name="zip">
          <Input placeholder={props.dummyData.zip} />
        </Form.Item>
        <Form.Item label="City" name="city">
          <Input placeholder={props.dummyData.city} />
        </Form.Item>
        <Form.Item label="State" name="state">
          <Input placeholder={props.dummyData.state} />
        </Form.Item>
        <Form.Item label="Country" name="country">
          <Input placeholder={props.dummyData.country} />
        </Form.Item>
        <Form.Item label="Phone Number" name="phone">
          <Input placeholder={props.dummyData.phone} />
        </Form.Item>
        <Form.Item label="Email" name="email">
          <Input placeholder={props.dummyData.email} />
        </Form.Item>
        <Form.Item label="Profile Picture" name="photo_url">
          <Input placeholder={props.dummyData.photo_url} />
        </Form.Item>
      </Modal>
      <Breadcrumb style={{ margin: '16px 0', marginBottom: '24px' }}>
        <Breadcrumb.Item
          onClick={props.showProfileModal}
          style={{ cursor: 'pointer' }}
        >
          Edit profile
        </Breadcrumb.Item>
      </Breadcrumb>
      <Row id="about" justify="start" align="middle">
        <Col xs={24} sm={24} md={24} lg={10} xl={10}>
          <DemoBox value={100}>
            <img
              src={props.dummyData.photo_url}
              alt={props.dummyData.name}
              style={{ borderRadius: '50%', marginBottom: '10px' }}
            />
            <h2>
              {props.dummyData.name} {props.dummyData.lastname}
            </h2>
            <p>
              {props.dummyData.city}, {props.dummyData.state},{' '}
              {props.dummyData.country}
              <span
                onClick={props.showContactModal}
                style={{
                  color: '#ec3944',
                  marginLeft: '20px',
                  cursor: 'pointer',
                }}
              >
                Contact info
              </span>
            </p>
          </DemoBox>
          <div className="groomer-about-section">
            <h2>About</h2>
            <p>{props.dummyData.description}</p>
          </div>
        </Col>

        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <div id="calendar">
            <DemoBox value={50}>Calendar Here</DemoBox>
          </div>
        </Col>
      </Row>

      <Row id="map" justify="start" align="middle">
        <Col xs={24} sm={24} md={24} lg={10} xl={10}>
          <div id="map">
            <h2>Location</h2>
            <MyMap
              // style={{

              // }}
              zoom={10}
              initialCenter={{
                lat: -1.2884,
                lng: 36.8233,
              }}
            />
          </div>
        </Col>
      </Row>
    </>
  );
};
