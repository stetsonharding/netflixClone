import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { HeaderContainer } from "../containers/header";
import { Form } from "../components";
import { FooterContainer } from "../containers/footer";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";

export default function SignUp() {
  const history = useHistory(FirebaseContext);
  const { firebase } = useContext(FirebaseContext);
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const isInvalid = firstName === "" || emailAddress === "" || password === "";

  const handleSignup = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            disayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            setEmailAddress("");
            setPassword("");
            setError("");
            history.push(ROUTES.BROWSE);
          })
      )
      .catch((error) => setError(error.message));
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSignup} method="POST">
            <Form.Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              type="email"
              placeholder="Email Address"
              value={emailAddress}
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Password"
              value={password}
              autoComplete="off"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type="submit">
              Sign Up
            </Form.Submit>
            <Form.Text>
              Already a user? <Form.Link to="/signin">Sign in here.</Form.Link>
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
