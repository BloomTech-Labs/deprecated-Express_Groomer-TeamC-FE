import React, { Component } from 'react';

class CustomerGroomer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fName: '',
      lName: '',
      email: '',
      phone: '',
      zipcode: '',
      address: '',
      city: '',
      state: '',
      country: '',
      photo_url: '',
      walk_rate: 0,
      day_care_rate: 0,
      vet_visit_rate: 0,
      //   password: '',
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    //   testing the handlesubmit
    const data = this.state;
    console.log('Final Data', data);
  };

  handleInputChange = event => {
    event.preventDefault();
    //   getting name of input and value
    // console.log('handleINputChange Name', event.target.name);
    //   console.log('handleINputChange Value', event.target.value);
    this.setState({
      // seting key to key-value pair
      [event.target.name]: event.target.value,
    });
  };

  // must be async in order to await key function
  async postDataGroomers() {
    try {
      let result = await fetch(
        'https://labspt12-express-groomer-a-api.herokuapp.com/customers',
        {
          method: 'post',
          mode: 'no-cors', // no-cors to eliminate some errors
          headers: {
            Accept: 'application/json',
            'Content-type': 'application/json',
          },
          // stringify the json obj payload
          body: JSON.stringify({
            fName: this.state.fName,
            lName: this.state.lName,
            email: this.state.email,
            phone: this.state.phone,
            address: this.state.address,
            city: this.state.city,
            state: this.state.state,
            country: this.state.country,
            zipcode: this.state.zip,
            photo_url: this.state.photo_url,
            walk_rate: this.state.walk_rate,
            day_care_rate: this.state.day_care_rate,
            vet_visit_rate: this.state.vet_visit_rate,
          }),
        }
      );
      console.log('RESULT', result);
    } catch (e) {
      console.log('REGISTER ERROR: ', e);
    }
  }

  componentDidMount() {
    this.setState({
      fName: this.state.fName,
      lName: this.state.lName,
      email: this.state.email,
      phone: this.state.phone,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      country: this.state.country,
      zipcode: this.state.zip,
      photo_url: this.state.photo_url,
      walk_rate: this.state.walk_rate,
      day_care_rate: this.state.day_care_rate,
      vet_visit_rate: this.state.vet_visit_rate,
      //   password: this.state.password,
    });
  }

  render() {
    //   change state based on whats coming in input
    const { fName } = this.state;

    return (
      <div className="registration-container">
        <h1>User Registration</h1>
        {/* To test functionality */}
        <p>First name is: {fName}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <input
              type="text"
              placeholder="First Name"
              name="fName"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of First Name */}
          <p>
            <input
              type="text"
              placeholder="Last Name"
              name="lName"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of last name */}
          <p>
            <input
              type="email"
              placeholder="email"
              name="email"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of email */}
          <p>
            <input
              type="text"
              placeholder="phone #"
              name="phone"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of phone */}
          <p>
            <input
              type="text"
              placeholder="address"
              name="address"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of address */}
          <p>
            <input
              type="text"
              placeholder="city"
              name="city"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of city */}
          <p>
            <input
              type="text"
              placeholder="state"
              name="state"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of state */}
          <p>
            <input
              type="text"
              placeholder="country"
              name="country"
              onChange={this.handleInputChange}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="zipcode"
              name="zipcode"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of zipcode */}
          <p className="about-textbox">
            <input
              type="text"
              placeholder="Talk about yourself!"
              name="description"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of description */}
          <p className="profile-photo">
            <input
              type="text"
              placeholder="Upload photo"
              name="photo_url"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of description */}
          <p>
            <input
              type="number"
              placeholder="walk rate"
              name="walk_rate"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of walk rate */}
          <p>
            <input
              type="number"
              placeholder="day care rate"
              name="day_care_rate"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of day care rate */}
          <p>
            <input
              type="number"
              placeholder="vet visit rate"
              name="vet_visit_rate"
              onChange={this.handleInputChange}
            />
          </p>
          {/* end of zipcode */}

          {/* <p>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={this.handleInputChange}
            />
          </p> */}
          {/* <p>
            <label>Are you a: </label>
            <select onChange={this.handleInputChange} defaultValue="Select">
              <option>Select One</option>
              <option value="groomer">Groomer</option>
              <option value="client">Client</option>
            </select>
          </p> */}
          <p>
            <button onClick={() => this.postData()}>Register</button>
          </p>
        </form>
      </div>
      // end of first div
    );
  }
} // end of Form

export default CustomerGroomer;
