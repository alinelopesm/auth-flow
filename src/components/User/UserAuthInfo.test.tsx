import React from 'react';
import { render } from '@testing-library/react';
import UserAuthInfo from './UserAuthInfo';
import { AuthInfo } from '../../types/AuthInfoType';
import { USER_DATA, USER_AUTH_INFO} from '../../__mocks__/userInfoMock'

const mockUser = USER_DATA;

const mockAuthInfo: AuthInfo = USER_AUTH_INFO;

test('renders user information when user info is provided', () => {
  const { getByText, getByAltText } = render(
    <UserAuthInfo userInfo={mockUser} authInfo={mockAuthInfo} />
  );

  const nameElement = getByText('User Test');
  const usernameElement = getByText('userTest');
  const emailElement = getByText('test@qq.com');
  const genderElement = getByText('male');
  const avatarElement = getByAltText('User Avatar');
  
  expect(nameElement).toBeInTheDocument();
  expect(usernameElement).toBeInTheDocument();
  expect(emailElement).toBeInTheDocument();
  expect(genderElement).toBeInTheDocument();
  expect(avatarElement).toBeInTheDocument();
});

test('does not render when no user info is provided', () => {
  const { queryByText, queryByAltText } = render(
    <UserAuthInfo userInfo={null} authInfo={null} />
  );

  const nameElement = queryByText('Test');
  const usernameElement = queryByText('test');
  const emailElement = queryByText('teste@.com');
  const genderElement = queryByText('male');
  const avatarElement = queryByAltText('image');
  
  expect(nameElement).not.toBeInTheDocument();
  expect(usernameElement).not.toBeInTheDocument();
  expect(emailElement).not.toBeInTheDocument();
  expect(genderElement).not.toBeInTheDocument();
  expect(avatarElement).not.toBeInTheDocument();
});
