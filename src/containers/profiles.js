import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { Profiles } from "../components";

export function SelectProfileContainer({ user, setProfile }) {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo
            to={ROUTES.HOME}
            src="/images/misc/logo.svg"
            alt="Netflix"
          />
        </Header.Frame>
      </Header>

      <Profiles>
        <Profiles.Title>Who's Watching?</Profiles.Title>
        <Profiles.List>
          <Profiles.User
            onClick={() =>
              setProfile({
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            }
          >
            <Profiles.Picture src={user.photoURL}></Profiles.Picture>
            <Profiles.Name>{user.displayName}</Profiles.Name>
          </Profiles.User>
        </Profiles.List>
      </Profiles>
    </>
  );
}
