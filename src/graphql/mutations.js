/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      emailAddress
      Accounts {
        items {
          id
          userID
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      emailAddress
      Accounts {
        items {
          id
          userID
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      emailAddress
      Accounts {
        items {
          id
          userID
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createAccount = /* GraphQL */ `
  mutation CreateAccount(
    $input: CreateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    createAccount(input: $input, condition: $condition) {
      id
      Envelopes {
        items {
          id
          name
          balance
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      name
      balance
      users {
        items {
          id
          userID
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateAccount = /* GraphQL */ `
  mutation UpdateAccount(
    $input: UpdateAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    updateAccount(input: $input, condition: $condition) {
      id
      Envelopes {
        items {
          id
          name
          balance
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      name
      balance
      users {
        items {
          id
          userID
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteAccount = /* GraphQL */ `
  mutation DeleteAccount(
    $input: DeleteAccountInput!
    $condition: ModelAccountConditionInput
  ) {
    deleteAccount(input: $input, condition: $condition) {
      id
      Envelopes {
        items {
          id
          name
          balance
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      name
      balance
      users {
        items {
          id
          userID
          accountID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createEnvelope = /* GraphQL */ `
  mutation CreateEnvelope(
    $input: CreateEnvelopeInput!
    $condition: ModelEnvelopeConditionInput
  ) {
    createEnvelope(input: $input, condition: $condition) {
      id
      name
      balance
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateEnvelope = /* GraphQL */ `
  mutation UpdateEnvelope(
    $input: UpdateEnvelopeInput!
    $condition: ModelEnvelopeConditionInput
  ) {
    updateEnvelope(input: $input, condition: $condition) {
      id
      name
      balance
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteEnvelope = /* GraphQL */ `
  mutation DeleteEnvelope(
    $input: DeleteEnvelopeInput!
    $condition: ModelEnvelopeConditionInput
  ) {
    deleteEnvelope(input: $input, condition: $condition) {
      id
      name
      balance
      accountID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUserAccount = /* GraphQL */ `
  mutation CreateUserAccount(
    $input: CreateUserAccountInput!
    $condition: ModelUserAccountConditionInput
  ) {
    createUserAccount(input: $input, condition: $condition) {
      id
      userID
      accountID
      user {
        id
        name
        emailAddress
        Accounts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      account {
        id
        Envelopes {
          nextToken
          startedAt
        }
        name
        balance
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserAccount = /* GraphQL */ `
  mutation UpdateUserAccount(
    $input: UpdateUserAccountInput!
    $condition: ModelUserAccountConditionInput
  ) {
    updateUserAccount(input: $input, condition: $condition) {
      id
      userID
      accountID
      user {
        id
        name
        emailAddress
        Accounts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      account {
        id
        Envelopes {
          nextToken
          startedAt
        }
        name
        balance
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserAccount = /* GraphQL */ `
  mutation DeleteUserAccount(
    $input: DeleteUserAccountInput!
    $condition: ModelUserAccountConditionInput
  ) {
    deleteUserAccount(input: $input, condition: $condition) {
      id
      userID
      accountID
      user {
        id
        name
        emailAddress
        Accounts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      account {
        id
        Envelopes {
          nextToken
          startedAt
        }
        name
        balance
        users {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
