import * as Types from '../../generated/types.generated';

import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Creates a user */
  createUser?: Maybe<User>;
};


export type MutationCreateUserArgs = {
  email?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  user?: Maybe<User>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
};

export type CreateUserMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  email: Types.Scalars['String'];
  phoneNumber?: Types.Maybe<Types.Scalars['String']>;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser?: Types.Maybe<(
    { __typename?: 'User' }
    & Pick<Types.User, 'id' | 'name' | 'email'>
  )> }
);


export const CreateUserDocument = gql`
    mutation CreateUser($name: String!, $email: String!, $phoneNumber: String) {
  createUser(name: $name, email: $email, phoneNumber: $phoneNumber) {
    id
    name
    email
  }
}
    `;

export function useCreateUserMutation() {
  return Urql.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument);
};