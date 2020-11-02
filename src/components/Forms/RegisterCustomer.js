import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';

export default function RegisterCustomer() {
  const defaultUser = {
    fName: 'Martha',
    lName: 'Seymour',
    email: 'martha@seymour.com',
    phone: '',
    zipcode: '',
    address: '',
    city: '',
    state: '',
    country: '',
    photo_url: 'https://images.unsplash.com/photo-1586057710892-4f30aed09a20',
    //   password: '',
  };

  const { register, handleSubmit, errors } = useForm();
  // const onSubmit = (data) => console.log(data);
  const [user, setUser] = useState(defaultUser);

  const onSubmit = data => {
    axios
      .post('https://labspt12-express-groomer-a-api.herokuapp.com/groomers', {
        fName: user.fName,
        lName: user.lName,
        email: user.email,
        phone: user.phone,
        address: user.address,
        city: user.city,
        state: user.state,
        country: user.country,
        zipcode: user.zip,
        photo_url: user.photo_url,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  //   async function onSubmit (data) = {
  //   // must be async in order to await key function

  //   try {
  //     let result = await fetch(
  //       'https://labspt12-express-groomer-a-api.herokuapp.com/groomers',
  //       {
  //         method: 'post',
  //         mode: 'no-cors', // no-cors to eliminate some errors
  //         headers: {
  //           Accept: 'application/json',
  //           'Content-type': 'application/json',
  //         },
  //         // stringify the json obj payload
  //         body: JSON.stringify({
  //           fName: user.fName,
  //           lName: user.lName,
  //           email: user.email,
  //           phone: user.phone,
  //           address: user.address,
  //           city: user.city,
  //           state: user.state,
  //           country: user.country,
  //           zipcode: user.zip,
  //           photo_url: user.photo_url,
  //         }),
  //       }
  //     );
  //     console.log('RESULT', result);
  //   } catch (e) {
  //     console.log('REGISTER ERROR: ', e);
  //   }

  // }

  // const handleSubmit = event => {
  //   event.preventDefault();
  //   //   testing the handlesubmit
  //   const data = this.state;
  //   console.log('Final Data', data);
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   axios.post('/customers', customerRegister)
  //     .then(function (response) {
  //         console.log(response)
  //     })
  //     .catch(function (error) {
  //         console.log(error)
  //     })

  const handleInputChange = event => {
    event.preventDefault();
    //   getting name of input and value
    // console.log('handleINputChange Name', event.target.name);
    //   console.log('handleINputChange Value', event.target.value);
    setUser({
      ...user,
      // seting key to key-value pair
      [event.target.name]: event.target.value,
    });
  };

  return (
    //   change user.state based on whats coming in input

    <div className="registration-container">
      <h1>User Registration</h1>
      {/* To test functionality */}
      <p>First name is: {user.fName}</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name</label>

        {/* use aria-invalid to indicate field contain error */}
        <input
          type="text"
          id="fName"
          name="fName"
          placeholder="First Name"
          onChange={handleInputChange}
          aria-invalid={errors.fName ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.fName && errors.fName.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.fName && errors.fName.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <input
          type="text"
          id="lName"
          name="lName"
          placeholder="Last Name"
          onChange={handleInputChange}
          aria-invalid={errors.lName ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.lName && errors.lName.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.lName && errors.lName.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          onChange={handleInputChange}
          aria-invalid={errors.email ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.email && errors.email.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.email && errors.email.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <input
          type="text"
          id="phone"
          name="phone"
          placeholder="Phone"
          onChange={handleInputChange}
          aria-invalid={errors.phone ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.phone && errors.phone.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.phone && errors.phone.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <input
          type="text"
          id="address"
          name="address"
          placeholder="Address"
          onChange={handleInputChange}
          aria-invalid={errors.address ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.address && errors.address.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.address && errors.address.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <input
          type="text"
          id="city"
          name="city"
          placeholder="City"
          onChange={handleInputChange}
          aria-invalid={errors.city ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.city && errors.city.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.city && errors.city.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <input
          type="text"
          id="state"
          name="state"
          placeholder="State"
          onChange={handleInputChange}
          aria-invalid={errors.state ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.state && errors.state.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.state && errors.state.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <input
          type="text"
          id="zipcode"
          name="zipcode"
          placeholder="zipcode"
          onChange={handleInputChange}
          aria-invalid={errors.zipcode ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.zipcode && errors.zipcode.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.zipcode && errors.zipcode.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <input
          type="text"
          id="photoUrl"
          name="photoUrl"
          placeholder="Photo URL"
          onChange={handleInputChange}
          aria-invalid={errors.zipcode ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.photoUrl && errors.photoUrl.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.photoUrl && errors.photoUrl.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <input type="submit" />
      </form>
    </div>
  );
}
