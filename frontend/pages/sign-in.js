import React from 'react';
import Link from 'next/link';
import SignInForm from '../components/SignInForm';
import Page from '../components/Page';

const SignInPage = () => (
  <Page location="sign-in">
    <h2>Sign up</h2>
    <SignInForm />
    <Link href="/new-account">
      <a>Sign Up</a>
    </Link>
  </Page>
);

export default SignInPage;
