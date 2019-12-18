import React from 'react';
import SignUpForm from '../components/SignUpForm';
import SignInForm from '../components/SignInForm';
import Page from '../components/Page';

const SignInPage = () => (
  <Page location="sign-in">
    <h2>Sign up</h2>
    <SignInForm />
    {/* <SignUpForm /> */}
  </Page>
);

export default SignInPage;
