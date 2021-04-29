import React, { useState } from "react";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import { FooterContainer } from "../containers/footer";

export default function Signin() {
  const [error, setError] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");

  const isInvalid = password === "" || emailAddress === "";

  const handleSignIn = (e) => {
    e.preventDefault();

    // call in here to firebase to authenticate the user
    // if there's an error, populate the error state
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignIn} method="POST">
            <Form.Input
              placeholder="Email address"
              type="email"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
            <Form.Input
              placeholder="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
            <Form.Submit type="submit" disabled={isInvalid}>
              Sign In
            </Form.Submit>

            <Form.Text>
              New to Netflix? <Form.Link to="signup">Sign up now.</Form.Link>
            </Form.Text>

            <Form.TextSmall>
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.
            </Form.TextSmall>
          </Form.Base>
        </Form>
      </HeaderContainer>

      <FooterContainer />
    </>
  );
}
