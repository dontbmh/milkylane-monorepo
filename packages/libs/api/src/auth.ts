import { IUser } from '@milkylane/model';
import { Auth } from 'aws-amplify';
import { CognitoUser } from 'amazon-cognito-identity-js';

export const currentUser = (): Promise<IUser> => {
  return Auth.currentAuthenticatedUser();
};

export const signUp = (username: string, password: string) => {
  return Auth.signUp({ username, password, attributes: {} });
};

export const signIn = async (username: string, password: string) => {
  const user: CognitoUser = await Auth.signIn({ username, password });
  return {
    id: user.getUsername(),
  };
};

export const signOut = () => {
  return Auth.signOut();
};

export const verifyCode = (userSub: string, code: string) => {
  return Auth.confirmSignUp(userSub, code);
};

export const resendCode = (userSub: string) => {
  return Auth.resendSignUp(userSub);
};

export const resetPassword = async (username: string) => {
  await Auth.forgotPassword(username);
  return await currentUser();
};
