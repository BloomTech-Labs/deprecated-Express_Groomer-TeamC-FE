import React, { useState } from 'react';
// useState
import {
  Field,
  Form,
  Input,
  Button,
  Checkbox,
  Radio,
  Card,
  Pagination,
} from 'antd';
import SkeletonButton from 'antd/lib/skeleton/Button';
import SearchPagination from './SearchPagination.js';
const demo = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

// const {Meta} = Card;
// function itemRender (current, type, originalElement) {
//   if (type === 'prev') {
//     return <a>Previous</a>;
//   }
//   if (type === 'next') {
//     return <a>Next</a>;
//   }
//   return originalElement;
// }

// const onChange = e => {
//   console.log('radio checked', e.target.value);
//   this.setState({
//     value: e.target.value,
//   });
// };

const SearchForm = () => {
  const [name, setName] = useState('');
  const [zipcode, setZipcode] = useState('');

  const onFinish = values => {
    console.log('Success: groomers displayed', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Unable to retrieve data:', errorInfo);
  };
  const handleName = e => setName(e.target.value);
  const handleZipCode = e => setZipcode(e.target.value);
  const onSubmit = e => {
    e.preventDefault();
    console.log(name, zipcode);
  };

  return (
    <Form
      {...SearchForm}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="petsName"
        name="petsName"
        rules={[
          {
            required: true,
            message: 'What is your pets name?',
          },
        ]}
      >
        <Input onChange={handleName} />
      </Form.Item>

      <Radio.Group>
        {/* onChange={onChange} */}
        <h3>I have a:</h3>
        <Radio value={1}>Dog</Radio>
        <Radio value={2}>Cat</Radio>
      </Radio.Group>

      <Form.Item
        label="Enter zip or postal code:"
        name="zipcode"
        rules={[
          {
            required: true,
            message: 'Please input your zipcode!',
          },
        ]}
      >
        <Input onChange={handleZipCode} />
      </Form.Item>

      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button onClick={onSubmit} type="primary" htmlType="submit">
          Find Your Groomers
        </Button>
      </Form.Item>
      <SearchPagination />
    </Form>
  );
};
export default SearchForm;
