import React from 'react';
import axios from 'axios';

export default class Profile extends React.Component {
  state = {
    email: [],
    password: [],
  }

  componentDidMount() {
    axios.get(`http://localhost:3000/api/users/`)
      .then(res => {
        const firstName = res.data;
        this.setState({ firstName });
        const lastName = res.data;
        this.setState({ lastName });
        const email = res.data;
        this.setState({ email });
      })
  }

  render() {
    return (
      <ul className='uldata'>
        {
          this.state.email.map(email =>
              <li key={email._id}>{email.firstName}, {email.lastName}, {email.email}</li>
            )
        }
      </ul>
    )
  }
}