import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import './GroomerRegistration.css';

function GroomerRegistration() {
  const defaultUser = {
    name: '',
    lastname: '',
    email: '',
    phone: '',
    zipcode: '',
    address: '',
    city: '',
    state: '',
    country: '',
    photo_url: 'https://images.unsplash.com/photo-1586057710892-4f30aed09a20',
    walk_rate: 0,
    day_care_rate: 0,
    vet_visit_rate: 0,
  };

  const { register, handleSubmit, errors } = useForm();
  const [user, setUser] = useState(defaultUser);

  const onSubmit = data => {
    axios
      .post('https://labspt12-express-groomer-a-api.herokuapp.com/groomers', {
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        phone: user.phone,
        address: user.address,
        city: user.city,
        state: user.state,
        country: user.country,
        zipcode: user.zip,
        description: user.description,
        photo_url: user.photo_url,
        walk_rate: user.walk_rate,
        day_care_rate: user.day_care_rate,
        vet_visit_rate: user.vet_visit_rate,
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  const handleInputChange = event => {
    event.preventDefault();
    //   getting name of input and value

    setUser({
      ...user,
      // seting key to key-value pair
      [event.target.name]: event.target.value,
    });
  };

  return (
    //   change user.state based on whats coming in input

    <div className="registration-container">
      <h1>Groomer Registration</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name: </label>

        {/* use aria-invalid to indicate field contain error */}
        <input
          type="text"
          id="name"
          name="name"
          placeholder="First Name"
          onChange={handleInputChange}
          aria-invalid={errors.name ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.name && errors.name.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.name && errors.name.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <label htmlFor="lastname">Last Name: </label>
        <input
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Last Name"
          onChange={handleInputChange}
          aria-invalid={errors.lastname ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.lastname && errors.lastname.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.lastname && errors.lastname.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <label htmlFor="email">Email: </label>
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

        <label htmlFor="phone">Phone: </label>
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

        <label htmlFor="address">Address: </label>
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

        <label htmlFor="city">City: </label>
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

        <label htmlFor="state">State: </label>
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

        <label htmlFor="zipcode">ZIP Code: </label>
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

        <label htmlFor="description">Description: </label>
        <input
          type="text"
          id="description"
          name="description"
          placeholder="description"
          onChange={handleInputChange}
          aria-invalid={errors.description ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 30 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.description && errors.description.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.description && errors.description.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <label htmlFor="photoUrl">Photo URL: </label>
        <input
          type="text"
          id="photoUrl"
          name="photoUrl"
          placeholder="Photo URL"
          onChange={handleInputChange}
          aria-invalid={errors.zipcode ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 100 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.photoUrl && errors.photoUrl.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.photoUrl && errors.photoUrl.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <label htmlFor="walk_rate">Walk rate: </label>
        <input
          type="text"
          id="walk_rate"
          name="walk_rate"
          placeholder="Walk rate"
          onChange={handleInputChange}
          aria-invalid={errors.walk_rate ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 100 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.walk_rate && errors.walk_rate.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.walk_rate && errors.walk_rate.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}

        <label htmlFor="day_care_rate">Day care rate: </label>
        <input
          type="text"
          id="day_care_rate"
          name="day_care_rate"
          placeholder="Day care rate"
          onChange={handleInputChange}
          aria-invalid={errors.day_care_rate ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 100 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.day_care_rate && errors.day_care_rate.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.day_care_rate && errors.day_care_rate.type === 'maxLength' && (
          <span role="alert">Max length exceeded</span>
        )}
        <label htmlFor="vet_visit_rate">Vet visit rate: </label>

        <input
          type="text"
          id="vet_visit_rate"
          name="vet_visit_rate"
          placeholder="Vet visit rate"
          onChange={handleInputChange}
          aria-invalid={errors.vet_visit_rate ? 'true' : 'false'}
          ref={register({ required: true, maxLength: 100 })}
        />

        {/* use role="alert" to announce the error message */}
        {errors.vet_visit_rate && errors.vet_visit_rate.type === 'required' && (
          <span role="alert">This is required</span>
        )}
        {errors.vet_visit_rate &&
          errors.vet_visit_rate.type === 'maxLength' && (
            <span role="alert">Max length exceeded</span>
          )}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default GroomerRegistration;
