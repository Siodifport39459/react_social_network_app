import React from 'react';
import firebase from 'firebase'

import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import {Link} from 'react-router-dom'
//import {Redirect} from 'react-router-dom'

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


import './Login.styles.scss';

class Login extends React.Component {
  constructor(props) {
    super(props);


    this.state = {
      email: '',
      password: ''
    };
  }

/*  handleSubmit = async event => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: '' });
    } catch (error) {
      console.log(error);
    }
  };

  handleChange = event => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
*/
  render() {
    /*if(this.auth)
    {
      <Redirect to='/pages/FriendsList/FriendsList.component'/>
    }*/

    return (
      <div>
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              Signin with Google
            </CustomButton>
          </div>
        </form>
        <Link className='link' to='/friendslist'>See your friends</Link>

      </div>
    </div>
    );


  }
}

export default Login;
