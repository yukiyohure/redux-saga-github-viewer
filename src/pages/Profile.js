import React from "react";
import styled from "styled-components";
import { colors } from "../variables";
import PropTypes from "prop-types";

const ProfileContainer = styled.div`
  display: flex;
  margin: 2rem 0;
  border-radius: 6px;
  border: 1px solid ${colors.border};
`;

const ProfilePicture = styled.div`
  padding: 1rem;
  width: 50%;
`;

const ProfileInformation = styled.div`
  padding: 1rem;
  width: 50%;
`;

const Label = styled.label`
  color: ${colors.weak};
`;

const ProfileItem = styled.p`
  padding: 1rem 0;
  font-size: 1.2rem;
`;

const ProfileWrapper = styled.div`
  padding: 1rem;
`;

const Profile = ({ user }) => {
  return (
    <ProfileWrapper>
      <h1>Profile</h1>
      <ProfileContainer>
        <ProfilePicture>
          <Label>プロフィール</Label>
          <ProfileItem>
            <img src={user.profileUrl} alt="profile" />
          </ProfileItem>
        </ProfilePicture>
        <ProfileInformation>
          <div>
            <Label>ユーザー名</Label>
            <ProfileItem>{user.userName}</ProfileItem>
          </div>
          <div>
            <Label>メールアドレス</Label>
            <ProfileItem>{user.email}</ProfileItem>
          </div>
        </ProfileInformation>
      </ProfileContainer>
    </ProfileWrapper>
  );
};

Profile.propTypes = {
  user: PropTypes.object,
};

export default Profile;
